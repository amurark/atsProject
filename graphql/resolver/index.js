const authResolver = require('./auth');
const feedbackResolver = require('./feedback');

const rootResolver = {
    ...authResolver,
    ...feedbackResolver
};

module.exports = rootResolver;