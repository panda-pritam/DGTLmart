let express = require("express");
const mongoose = require("mongoose");
let routes = require("./router/videos.router");
let app = express();
let { errorHandler } = require("./middleware/error");
let dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
app.use(cors());
app.options("*", cors());
app.use(express.json());
console.log(process.env.MONGODB_URL);
app.use(express.urlencoded({ extended: true }));
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("DB Connected "))
  .catch((err) => {
    console.log(err);
    console.log("can't connect to the DB " + err);
  });

app.get("/", (req, res) => {
  res.send("hellos");
});
app.use("/v1", routes);
app.use(errorHandler);
app.listen(8000, () => {
  console.log("Server is running at 8000");
});

//"mongodb://127.0.0.1:27017/xflix"
//mongodb+srv://user:user@cluster0.wasjsog.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/videos
