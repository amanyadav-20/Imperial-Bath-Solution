import Product from "../models/Product.js";
import asyncHandler from "../middleware/asyncHandler.js";
import mongoose from "mongoose";

export const getProducts = asyncHandler(async (req, res) => {
  const { category, featured, limit } = req.query;
  const filters = {};

  if (category) filters.category = category;
  if (featured === "true") filters.isFeatured = true;

  let query = Product.find(filters).sort({ createdAt: -1 });
  if (limit) query = query.limit(Number(limit));

  const products = await query;
  res.json(products);
});

export const getProductBySlug = asyncHandler(async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug });
  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }
  res.json(product);
});

export const getProductById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const product = mongoose.isValidObjectId(id)
    ? await Product.findById(id)
    : await Product.findOne({ slug: id });

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  res.json(product);
});

export const createProduct = asyncHandler(async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
});