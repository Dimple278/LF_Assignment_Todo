import express from "express";
import config from "./config";
import router from "./routes/tasks";

const app = express();
app.use(express.json());

app.use(router);

app.listen(config.port, () => {
  console.log(`Server listening at port 8080`);
});
