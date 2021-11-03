const express = require("express");
const connectDB = require("./connet");
const Todo = require("./models/todo");
const {
  getAll,
  postTodo,
  deleteTodo,
  completeTodo,
} = require("./controlers/controler");

const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

app.get("/todos", getAll);
app.post("/todos", postTodo);
app.delete("/todos/:id", deleteTodo);
app.patch("/todos/:id", completeTodo);

const start = async () => {
  try {
    await connectDB(
      "mongodb+srv://jose:Qaeuskuj1@nodeexpressprojects.nfztf.mongodb.net/mern-app?retryWrites=true&w=majority"
    );
    console.log(`connected to DB`);
    app.listen(3001, () => console.log(`server listening on port 3001`));
  } catch (error) {
    console.log(error);
  }
};

start();
