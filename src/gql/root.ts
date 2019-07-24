import { GraphQLObjectType, GraphQLList } from "graphql";
import todoType from "./todoType";
import Todo from "../models/Todo";

export default new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: () => ({
    todo: {
      type: GraphQLList(todoType),
      description: "Todo query",
      resolve: async () => Todo.find()
    }
  })
});
