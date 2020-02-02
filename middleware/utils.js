const User = require('../models/user');

module.exports = {

    isAdminAuthenticated: async (userId) => {
        try {
            if (!userId) throw new Error("Invalid UserId");

            const user = await User.findById(userId);
            if( !user || 
                !user.isAdmin) {
                return false;
            }

            console.log("Performing admin action");
            return true;

        } catch (err) {
            console.error(err);
        }
    }
}