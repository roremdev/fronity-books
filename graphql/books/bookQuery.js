const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLID
} = require('graphql');

const bookType = require('./bookType');
const Books = require('../../services/bookService');

const books = new Books();

const booksQuery = new GraphQLObjectType({
    name: 'BooksQuery',
    fields: {
        book: {
            type: bookType,
            args: {
                id: {
                    type: GraphQLID
                }
            },
            resolve: async (root, { id }) => await books.getBook(id)
        },
        books: {
            type: new GraphQLList(bookType),
            resolve: async () => await books.getBooks({}),
        },
    },
    description: "Query reference Books"
});

module.exports = booksQuery;