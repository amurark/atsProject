const Feedback = require('../../models/feedback');
const utils = require('../../middleware/utils');

module.exports = {
    createFeedback: async args => {
        try {
            const created_at = new Date().valueOf();
            const time_diff = 1 * 60 * 1000;
            const fetchedFeedbacks = await Feedback.find({email: args.feedbackInput.email}, 'email created_at').sort({created_at: -1});
            
            console.log(JSON.stringify(fetchedFeedbacks, null, 2));

            // TODO: Improve this logic. 
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
            throw err;
        }
    },
    retrieveAllFeedbacks: async (res, req) => {
        try {
            const isAuth = req.isAuth;
            const userId = req.userId;
            
            // Check if the request is authenticated.
            if(!isAuth) throw new Error("Request not authenticated");

            // Check if the request is Authorized.
            if(!(await utils.isAdminAuthenticated(userId))) {
                throw new Error("Not authorized");
            }
            
            // Return all records.
            console.log("Fetching all feedbacks");
            const queryObject = {};
            const feedbacks = await Feedback.find(queryObject);
            return feedbacks;
        } catch(err) {
            console.error(err);
            throw err;
        }
    },
    retrieveFeedbacks: async args => {
        try {
            console.log(args.filter);
            if(!args.hasOwnProperty('filter') || 
               !args.filter.key ||
               !args.filter.value) {

                throw new Error('Invalid filter input');
            }

            const possiblyKeyValues = ['email', 'name', 'ratings', 'feedback', 'subscribe', 'created_at'];
            let key = args.filter.key;
            let value = args.filter.value;

            if(!possiblyKeyValues.includes(key)) {
                return new Error('Invalid key input');
            }

            // Trim the value.
            value = value.trim();
            
            // TODO: Lowercase `value`
            // TODO: Sanitize `value` also
            
            const queryObject = {};
            queryObject[key] = value;

            const feedbacks = await Feedback.find(queryObject, possiblyKeyValues.join(" "));
            return feedbacks;

        } catch(err) {
            console.error(err);
            throw err;
        }
    }
}