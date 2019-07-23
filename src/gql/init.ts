import { Application } from "express";
import expressGraphQL from "express-graphql";
import schema from "./";

export default (app: Application) =>
  app.use(
    "/graphql",
    expressGraphQL({
      graphiql: true,
      schema
    })
  );
