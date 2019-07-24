import { Request, Response } from "express";

class Controller {
  /**
   * Create a new todo
   */
  public createTodo(req: Request, res: Response) {}
  /**
   * Get all todos
   */
  public getTodos(req: Request, res: Response) {}
  /**
   * Update a todo
   */
  public updateTodo(req: Request, res: Response) {}
  /**
   * Delete a todo
   */
  public deleteTodo(req: Request, res: Response) {}
}

export default new Controller();
