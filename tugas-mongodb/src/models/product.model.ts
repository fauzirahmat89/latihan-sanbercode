import mongoose from "mongoose";
import { Category } from "./category.model";

export interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    qty: number;
    images: string[];
    category: Category;
}

const schema = new mongoose.Schema<Product>({
    name: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    description: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    images: {
        type: [mongoose.Schema.Types.String],
        default: [],
    },
    price: {
        type: mongoose.Schema.Types.Number,
        required: true,
    },
    qty: {
        type: mongoose.Schema.Types.Number,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
    }
})

export const ProductModel = mongoose.model("product", schema);