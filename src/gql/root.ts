import { GraphQLObjectType, GraphQLList, GraphQLString } from "graphql";
import todoType from "./todoType";

export default new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: () => ({
    todo: {
      type: todoType,
      description: "Todo query",
      resolve: () => {} // TODO: Implement API call
    }
  })
});
