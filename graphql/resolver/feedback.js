const Feedback = require('../../models/feedback');

module.exports = {
    createFeedback: async args => {
        console.log("eerer");
        try {
            const created_at = new Date().valueOf();
            const time_diff = 1 * 60 * 1000;
            const fetchedFeedbacks = await Feedback.find({email: args.feedbackInput.email}, 'email created_at').sort({created_at: -1});
            
            console.log(JSON.stringify(fetchedFeedbacks, null, 2));

            if(fetchedFeedbacks.length && fetchedFeedbacks[0].created_at.valueOf() + time_diff >= created_at) {
                throw new Error('Review recently submitted from this Email ID.');
            }

            const feedback = new Feedback({
                email: args.feedbackInput.email,
                name: args.feedbackInput.name,
                ratings: args.feedbackInput.ratings,
                feedback: args.feedbackInput.feedback,
                subscribe: args.feedbackInput.subscribe,
                created_at: new Date(created_at).toISOString()
            });
    
            const newFeedback = await feedback.save();
            console.log("New feedback added.");
            console.log(JSON.stringify(newFeedback, null, 2));
            return {
                ...newFeedback._doc
            };
        } catch(err) {
            console.log("here");
            throw err;
        }
    }
}