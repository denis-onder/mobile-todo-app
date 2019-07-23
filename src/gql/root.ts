import { GraphQLObjectType, GraphQLList, GraphQLString } from "graphql";

export default new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: () => ({
    test: {
      type: GraphQLString,
      description: "Testing",
      resolve: () => "Hello"
    }
  })
});
