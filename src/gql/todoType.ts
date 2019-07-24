import { GraphQLObjectType, GraphQLString, GraphQLBoolean } from "graphql";

export default new GraphQLObjectType({
  name: "Todo",
  description: "Query for getting todos",
  fields: () => ({
    id: {
      type: GraphQLString,
      description: "The todo ID"
    },
    body: {
      type: GraphQLString,
      description: "The todo itself"
    },
    isCompleted: {
      type: GraphQLBoolean,
      description: "Is the todo completed or not"
    }
  })
});
