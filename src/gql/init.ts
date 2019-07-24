import { Application } from "express";
import expressGraphQL from "express-graphql";
import config from "../config";
import schema from "./";

export default (app: Application) =>
  app.use(
    "/graphql",
    expressGraphQL({
      graphiql: config.env === "production" ? false : true,
      schema
    })
  );
