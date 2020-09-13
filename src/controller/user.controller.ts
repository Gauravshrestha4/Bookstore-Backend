import { Request, Response } from "express";
import { User, UserAttributes } from "../model/user";

export default class UserController {
  email: string;

  userAttributes: UserAttributes;

  public createUser(req: Request, res: Response): void {
    this.userAttributes = req.body;
    User.create<User>(this.userAttributes)
      .then(() => res.status(201).send(`User created.`))
      .catch((err: Error) => res.status(500).send(`ERROR: ${err}`));
  }

  public findUserbyEmail(req: Request, res: Response): void {
    this.email = req.body;
    User.findOne<User>({
      where: { email: this.email },
      attributes: ["firstName", "lastName", "email", "phone"],
    })
      .then((user: User) => {
        if (!user) {
          res.status(404).send(`No user found.`);
        }
        res.status(200).send(user);
      })
      .catch((err: Error) => res.status(500).send(`ERROR: ${err}`));
  }
}
