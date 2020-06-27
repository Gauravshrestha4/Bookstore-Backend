import * as express from "express";
import { Request, Response } from "express";
import {signUp,login} from '../controllers/auth'
const router=express.Router()

router.post('/sign-up',signUp)
router.post('/login', login)

router.post("/login", (req: Request, res: Response) => {
  // check is user exists
  // if yes  log in
  // send user details in response
  res.json({ msg: "I am logged in user " });
});

export default router;
