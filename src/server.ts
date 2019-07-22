import express from "express";
import config from "./config";

class Server {
  public app: express.Application;
  constructor() {
    this.app = express();
  }
  /**
   * Start the server
   */
  public start() {
    this.app.listen(config.port, () =>
      console.log(
        `Server running! \nEnvironment: ${
          config.env === "development" ? config.env : config.env + " container"
        }\nAddress: http://localhost:${config.port}`
      )
    );
  }
}

export default new Server();
