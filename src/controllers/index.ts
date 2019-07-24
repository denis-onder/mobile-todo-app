import { Request, Response } from "express";
import Todo from "../models/Todo";
import InputValidator from "../utils/inputValidation";

class Controller {
  /**
   * Create a new todo
   */
  public createTodo(req: Request, res: Response) {
    const newTodo: any = {
      body: req.body.body
    };
    const inputErrors = InputValidator.todo(req.body);
    if (inputErrors) {
      res.status(400).json(inputErrors);
      return;
    }
    new Todo(newTodo)
      .save()
      .then(todo => res.status(200).json(todo))
      .catch(err => console.error(err));
  }
  /**
   * Get all todos
   */
  public getTodos(req: Request, res: Response) {
    Todo.find()
      .then(todos => {
        if (todos.length === 0) {
          res.status(404).json({ error: "No todos found." });
          return;
        }
        res.status(200).json(todos);
      })
      .catch(err => console.error(err));
  }
  /**
   * Update a todo
   */
  public updateTodo(req: Request, res: Response) {
    Todo.findById(req.params.id, (err: any, todo: any) => {
      if (err) {
        res.status(500).json(err);
        return;
      }
      todo.isCompleted = !todo.isCompleted;
      todo
        .save()
        .then(todo => res.status(200).json(todo))
        .catch(err => console.error(err));
    });
  }
  /**
   * Delete a todo
   */
  public deleteTodo(req: Request, res: Response) {
    Todo.findByIdAndDelete(req.params.id).then(() =>
      res.status(200).json({ deleted: true, timestamp: Date.now() })
    );
  }
}

export default new Controller();
