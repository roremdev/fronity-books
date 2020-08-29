// const { graphqlHTTP } = require('express-graphql');
// const schemaBooks = require('../graphql/bookSchema');
// var { printSchema } = require('graphql');

// const booksGQL = app => {
//     console.log(printSchema(schemaBooks))
//     app.use(
//         '/graphql',
//         graphqlHTTP({
//             schema: schemaBooks,
//             graphiql: true
//         })
//     );
// };

// module.exports = { booksGQL };

const { ApolloServer, gql } = require('apollo-server-express');
const Books = require('../services/bookService');

const books = new Books();

const typeDefs = gql`
    type BookType {
        _id: ID
        name: String
        author: String
        website: String
        description: String
        price: Float
    }

    type Query {
        book(id: ID): BookType
        books: [BookType]
    }
`;

const resolvers = {
    Query: {
        book: async (root, { id }) => await books.getBook(id),
        books: async () => await books.getBooks({}),
    },
};

const apollo = new ApolloServer({ typeDefs, resolvers });


module.exports = apollo;