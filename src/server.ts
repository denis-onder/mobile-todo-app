import express from "express";
import config from "./config";
import router from "./router";
import initGql from "./gql/init";
import bodyParser from "body-parser";
import mongoose from "mongoose";

class Server {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(router);
    initGql(this.app);
  }
  /**
   * Start the server
   */
  public start() {
    this.connectDB();
    this.app.listen(config.port, () =>
      console.log(
        `Server running! \nEnvironment: ${
          config.env === "docker" ? config.env + " container" : config.env
        }\nAddress: http://localhost:${config.port}`
      )
    );
  }
  /**
   * Stop the server
   */
  public stop(err = false) {
    mongoose.connection
      .close()
      .then(() => console.log("Database connection closed."))
      .catch(err => console.error(err));
    console.log("Server stopped.");
    if (err) console.error(err);
    process.exit(err ? 1 : 0);
  }
  private connectDB() {
    mongoose.connect(config.database, { useNewUrlParser: true }, (err: any) =>
      err ? this.stop(err) : console.log("Database connected!")
    );
  }
}

export default new Server();
