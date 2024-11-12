import dotenv from "dotenv";

dotenv.config();

export const CLOUDINARY_API_KEY: string = process.env.CLOUDINARY_API_KEY || "";
export const CLOUDINARY_API_SECRET: string =
  process.env.CLOUDINARY_API_SECRET || "";
export const CLOUDINARY_CLOUD_NAME: string =
  process.env.CLOUDINARY_CLOUD_NAME || "";
export const DATABASE_URL: string = process.env.DATABASE_URL || "mongodb+srv://fauzirahmat89:9pw1bueZggjEuJso@cluster-wpu-course.n0qel.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-wpu-course";
