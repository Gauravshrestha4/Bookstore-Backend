import * as express from "express";
import { Request, Response } from "express";

import userRoutes from'./router/user'
import authRoutes from'./router/auth'
import inventoryRoutes from'./router/inventory'
const app = express();
const { PORT = 3000 } = process.env;

app.use('/auth',authRoutes);
app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "book store app",
  });
});
app.use('/users',userRoutes);
app.use('/inventory',inventoryRoutes);

if (require.main === module) {
  // true if file is executed
  app.listen(PORT, () => {
    // FIX ME - Add a logger here.
    /* eslint-disable */
    console.log(`server started at http://localhost:${PORT}`);
  });
}
export default app;
