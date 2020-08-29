const {
    GraphQLSchema
} = require('graphql');

const booksQuery = require('./books/bookQuery');
const booksMutation = require('./books/bookMutation');

module.exports = new GraphQLSchema({
    query: booksQuery,
    mutation: booksMutation
});
