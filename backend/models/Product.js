import mongoose from "mongoose";

const featureSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    text: { type: String, required: true }
  },
  { _id: false }
);

const specSchema = new mongoose.Schema(
  {
    label: { type: String, required: true },
    value: { type: String, required: true }
  },
  { _id: false }
);

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    
    category: {
      type: String,
      required: true,
      enum: ["jacuzzi", "soaking", "spa", "outdoor"],
    },

    shortDescription: { type: String, required: true },
    description: { type: String, required: true },

    image: { type: String, required: true },
    gallery: [{ type: String }], // ✅ removed required (array me problem deta hai)

    priceLabel: { type: String, default: "Contact for pricing" },

    rating: { type: Number, min: 1, max: 5, default: 5 },

    tags: [{ type: String }],

    features: [featureSchema],
    specs: [specSchema],

    details: [{ type: String }],
    idealFor: [{ type: String }],

    isFeatured: { type: Boolean, default: false }
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product; 