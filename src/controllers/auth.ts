import { Request, Response } from "express";

const signUp = (req: Request, res: Response): void => {
  // check is user exists
  // if not create a new user and log in
  // send user details in response
  res.json({ msg: "This is sign up route" });
};

const login = (req: Request, res: Response): void => {
  // check is user exists
  // if yes  log in
  // send user details in response
  res.json({ msg: "I am logged in user " });
};

export { signUp, login };
