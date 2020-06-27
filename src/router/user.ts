import * as express from "express";
import { Request, Response } from "express";

const router = express.Router();

const users = [
  {
    id: 1,
    name: "gaurav",
    age: 24,
    address: "abc location",
  },
  {
    id: 2,
    name: "abhinav",
    age: 23,
    address: "xyz location",
  },
  {
    id: 3,
    name: "shourya",
    age: 24,
    address: "new location",
  },
];
router.get("/:userid", (req: Request, res: Response) => {
  // check is user exists
  // if not create a new user and log in
  // send user details in response
  const userId = req.params.userid;
  const user = users.find((_user) => _user.id === parseInt(userId, 10));
  res.json(user);
});
router.get("/", (req: Request, res: Response) => {
  res.json(users);
});

export default router;
