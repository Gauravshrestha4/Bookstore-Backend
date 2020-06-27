import * as express from "express";
import { Request, Response } from "express";

const router = express.Router();

router.post("/sign-up", (req: Request, res: Response) => {
  // check is user exists
  // if not create a new user and log in
  // send user details in response
  res.json({ msg: "This is sign up route" });
});

router.post("/login", (req: Request, res: Response) => {
  // check is user exists
  // if yes  log in
  // send user details in response
  res.json({ msg: "I am logged in user " });
});

export default router;
