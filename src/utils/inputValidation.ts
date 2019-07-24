import ITodoCreation from "../interfaces/ITodoCreation";
import IValidationErrors from "../interfaces/IValidationErrors";
import errorTypes from "../types/errorTypes";

class InputValidator {
  private errors: IValidationErrors;
  constructor() {
    this.errors = {};
  }
  /**
   * Validate the inputs provided for creating todos
   */
  public todo(data: ITodoCreation) {
    this.resetErrors();
    if (data.body === "") this.errors.todoBodyEmpty = errorTypes.todoBodyEmpty;
    if (data.body.length < 3)
      this.errors.todoBodyLength = errorTypes.todoBodyLength;
    if (data.body.includes("<script>"))
      this.errors.todoBodyInvalid = errorTypes.todoBodyInvalid;
    return this.checkErrors();
  }
  private checkErrors() {
    this.errors === {} ? false : this.errors;
  }
  private resetErrors() {
    this.errors = {};
  }
}

export default new InputValidator();
