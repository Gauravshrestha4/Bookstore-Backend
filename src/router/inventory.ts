import * as express from "express";
import { getProductById, getAllProducts, createProduct, updateProduct } from "../controllers/inventory";

const router = express.Router();

router.get('/:pid', getProductById);
router.get('/', getAllProducts);
router.post('/', createProduct);
router.patch('/:pid', updateProduct);

router.get("/:pid", (req: Request, res: Response) => {
  const productId = req.params.pid;
  const product = inventory.find(
    (_product) => _product.id === parseInt(productId, 10)
  );
  res.json(product);
});

router.get("/", (req: Request, res: Response) => {
  res.json(inventory);
});

export default router;
