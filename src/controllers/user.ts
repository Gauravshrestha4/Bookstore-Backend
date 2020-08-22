import { Request, Response, NextFunction } from "express";
import HttpError from "../models/http-error";

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

export const getUserById = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  // check is user exists
  // if not create a new user and log in
  // send user details in response
  const userId = req.params.userid;
  const user = users.find((_user) => _user.id === parseInt(userId, 10));
  if (!user) {
    next(new HttpError("User for the requested id not found", 404));
  }
  res.json(user);
};

export const getAllUsers = (req: Request, res: Response): void => {
  res.json(users);
};
