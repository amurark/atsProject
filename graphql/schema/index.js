const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type User {
        _id: ID!
        email: String!
        userName: String
        password: String
        isAdmin: Boolean
    }

    type AuthData {
        userId: ID!
        userName: String!
        token: String!
        tokenExpiration: Int!
        isAdmin: Boolean!
    }

    type Feedback {
        email: String!
        name: String!
        ratings: Float!
        feedback: String!
        subscribe: Boolean!
        created_at: String!
        phone: String!
        destination: String!
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
        phone: String!
        destination: String!
    }

    input FilterInput {
        key: String!
        value: String!
    }


    type RootQuery {
        login(email: String!, password: String!): AuthData!
        retrieveFeedbacks(filter: FilterInput!): [Feedback!]!
        retrieveAllFeedbacks: [Feedback!]!
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