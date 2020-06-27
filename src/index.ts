import * as express from "express";
import { Request, Response } from "express";
import * as bodyParser from "body-parser";

import userRoutes from "./router/user";
import authRoutes from "./router/auth";
import inventoryRoutes from "./router/inventory";
import HttpError from "./models/http-error";

const app = express();
const { PORT = 3000 } = process.env;

app.use(bodyParser.json());
app.use("/auth", authRoutes);
app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "book store app",
  });
});
app.use("/users", userRoutes);

app.use("/inventory", inventoryRoutes);

app.use((req, res, next) => {
  next(new HttpError("Could not find this route", 404));
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  return res.json({ message: error.message || "An unknown error occurred" });
});
if (require.main === module) {
  // true if file is executed
  app.listen(PORT, () => {
    // FIX ME - Add a logger here.
    /* eslint-disable */
    console.log(`server started at http://localhost:${PORT}`);
  });
}
export default app;
