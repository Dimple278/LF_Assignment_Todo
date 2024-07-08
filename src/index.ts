import express from "express";
import config from "./config";
import router from "./routes/taskRoutes";
import errorMiddleware from "./middleware/errorMiddleware";

const app = express();
app.use(express.json());

app.use(router);

app.use(errorMiddleware);
app.listen(config.port, () => {
  console.log(`Server listening at port:${config.port}`);
});
