const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type User {
        _id: ID!
        email: String!
        userName: String
        password: String
    }

    type AuthData {
        userId: ID!
        userName: String!
        token: String!
        tokenExpiration: Int!
    }

    type Feedback {
        _id: ID!
        email: String!
        name: String!
        ratings: Float!
        feedback: String!
        subscribe: Boolean!
        created_at: String!
    }

    input UserInput {
        email: String!
        password: String!
        userName: String
    }

    input FeedbackInput {
        email: String!
        name: String!
        ratings: Float!
        feedback: String!
        subscribe: Boolean!
    }


    type RootQuery {
        login(email: String!, password: String!): AuthData!
    }

    type RootMutation {
        createUser(userInput: UserInput!): User!
        createFeedback(feedbackInput: FeedbackInput!): Feedback!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);