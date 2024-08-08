import productsRouter from "./product.routes.js"
import cartsRouter from "./cart.routes.js"
import { Router } from "express"

const router = Router();

router.use("/products", productsRouter);
router.use("/carts", cartsRouter);

export default router;