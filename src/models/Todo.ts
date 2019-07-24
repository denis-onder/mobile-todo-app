import { model, Schema } from "mongoose";

export default model(
  "todo",
  new Schema({
    body: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    isCompleted: {
      type: Boolean,
      default: false
    }
  })
);
