const {
    GraphQLString,
    GraphQLFloat,
    GraphQLNonNull,
    GraphQLInputObjectType
} = require('graphql');

const bookInput = new GraphQLInputObjectType({
    name: 'BookInput',
    fields: {
        name: { type: GraphQLString },
        author: { type: GraphQLString },
        website: { type: GraphQLString },
        description: { type: GraphQLString },
        price: { type: new GraphQLNonNull(GraphQLFloat) },
    },
    description: 'Input GraphQL For Book',
});

module.exports = bookInput;