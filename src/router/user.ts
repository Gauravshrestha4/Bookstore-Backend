import * as express from "express";
import { getUserById, getAllUsers } from "../controllers/user";

const router = express.Router();

router.get('/:userid', getUserById);
router.get('/', getAllUsers);

export default router;
