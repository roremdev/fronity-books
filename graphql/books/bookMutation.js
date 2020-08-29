const {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
} = require('graphql');

const bookType = require('./bookType');
const bookInput = require('./bookInput');
const Books = require('../../services/bookService');

const books = new Books();

const booksMutation = new GraphQLObjectType({
    name: 'BooksMutation',
    fields: {
        addBook: {
            type: bookType,
            args: {
                input: {
                    type: new GraphQLNonNull(bookInput),
                },
            },
            resolve: async (root, { input }) => await books.createBook(input),
        },
        updateBook: {
            type: bookType,
            args: {
                id: {
                    type: GraphQLID,
                },
                input: {
                    type: new GraphQLNonNull(bookInput),
                },
            },
            resolve: async (root, { id, input }) =>
                await books.updateBook(id, input),
        },
        deleteBook: {
            type: GraphQLID,
            args: {
                id: { type: GraphQLID },
            },
            resolve: async(root, { id }) =>
                await books.deleteBook(id)
        },
    },
    description: 'Mutation reference Books',
});

module.exports = booksMutation;
