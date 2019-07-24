import express from "express";
import Controller from "./controllers";

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
    this.router.post("/todo", (req: express.Request, res: express.Response) =>
      Controller.createTodo(req, res)
    );
    this.router.get("/todos", (req: express.Request, res: express.Response) =>
      Controller.getTodos(req, res)
    );
    this.router.put(
      "/todo/:id",
      (req: express.Request, res: express.Response) =>
        Controller.updateTodo(req, res)
    );
    this.router.delete(
      "/todo/:id",
      (req: express.Request, res: express.Response) =>
        Controller.deleteTodo(req, res)
    );
  }
}

export default new Router().router;
