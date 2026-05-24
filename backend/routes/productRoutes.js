import express from "express";
import {
  createProduct,
  getProductBySlug,
  getProductById,
  getProducts
} from "../controllers/productController.js";

const router = express.Router();

router.route("/").get(getProducts).post(createProduct);
router.get("/:slug", getProductBySlug);
router.get("/:id", getProductById);

export default router;