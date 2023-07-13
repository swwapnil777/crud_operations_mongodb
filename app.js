import express from "express";
import { join } from "path";
import connectDB from "./db/connectDB.js";
import web from "./routes/web.js";
const app = express();
const port = 9000;

app.use(express.urlencoded({ extended: true }));
app.use("/student", web);
app.use(express.static(join(process.cwd(), "public")));
app.set("view engine", "ejs");
const DATABASE_URL = "mongodb://127.0.0.1:27017/school";
connectDB(DATABASE_URL);
app.listen(port, () => {
  console.log("Server is Listening");
});
