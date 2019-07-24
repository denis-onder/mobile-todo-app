import express from "express";
import config from "./config";
import router from "./router";
import initGql from "./gql/init";

class Server {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.app.use(router);
    initGql(this.app);
  }
  /**
   * Start the server
   */
  public start() {
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
    process.exit(err ? 1 : 0);
  }
}

export default new Server();
