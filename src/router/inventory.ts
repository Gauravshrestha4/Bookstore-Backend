import * as express from "express";
import { getProductById, getAllProducts, createProduct, updateProduct } from "../controllers/inventory";

const router = express.Router();

router.get('/:pid', getProductById);
router.get('/', getAllProducts);
router.post('/', createProduct);
router.patch('/:pid', updateProduct);

export default router;