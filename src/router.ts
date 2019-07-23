import express from "express";

class Router {
  public router: express.Router;
  constructor() {
    this.router = express.Router();
    this.init();
  }
  private init() {
    this.router.get("/", (req: express.Request, res: express.Response) =>
      res.status(200).send("Hello, world!")
    );
  }
}

export default new Router().router;
