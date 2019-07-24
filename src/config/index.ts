export default {
  port: process.env.PORT || 8000,
  env: process.env.NODE_ENV || "development",
  database: "mongodb://localhost:27017/todos"
};
