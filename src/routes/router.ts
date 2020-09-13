import * as express from "express";
import UserController from "../controller/user.controller";

export default class Router {
  userController: UserController = new UserController();

  public callRoutes(app: express.Application): void {
    app
      .route("/user")
      .post(this.userController.createUser)
      .get(this.userController.findUserbyEmail);
  }
}
