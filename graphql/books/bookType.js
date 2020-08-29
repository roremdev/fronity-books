const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLFloat,
    GraphQLID,
} = require('graphql');

const bookType = new GraphQLObjectType({
    name: 'BookType',
    fields: {
        _id: { type: GraphQLID },
        name: { type: GraphQLString },
        author: { type: GraphQLString },
        website: { type: GraphQLString },
        description: { type: GraphQLString },
        price: { type: GraphQLFloat },
    },
    description: "Schema GraphQL For Book"
});

module.exports = bookType;
