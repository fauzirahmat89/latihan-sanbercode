import { Request, Response } from "express"
import { ProductModel } from "../models/product.model"
import { MongooseError } from "mongoose";


export default {
    async create(req: Request, res: Response){
        try {
            const result = await ProductModel.create(req.body);

            res.status(201).json({

                data: result,
                message: "success create product",
            
            });
        } catch (error) {
            const err = error as MongooseError;

            res.status(500).json({
                data: null,
                message: err.message,
            });
        }
    },
    async findAll(req: Request, res: Response){
        try {
            const result = await ProductModel.find().populate("category");

            res.status(200).json({

                data: result,
                message: "success get product",
            
            });
        } catch (error) {
            const err = error as MongooseError;

            res.status(500).json({
                data: null,
                message: err.message,
            });
        }
    },
    async findOne(req: Request, res: Response){
        try {
            const {id} = req.params;
            const result = await ProductModel.findById(id);

            res.status(200).json({

                data: result,
                message: "success create product",
            
            });
        } catch (error) {
            const err = error as MongooseError;

            res.status(500).json({
                data: null,
                message: err.message,
            });
        }
    },
    async update(req: Request, res: Response){
        try {
            const {id} = req.params;
            const result = await ProductModel.findOneAndUpdate({
                _id: id,
            },
            {
                ...req.body,
            },
            {
                new: true,
            });

            res.status(200).json({

                data: result,
                message: "success update product",
            
            });
        } catch (error) {
            const err = error as MongooseError;

            res.status(500).json({
                data: null,
                message: err.message,
            });
        }
    },
    async remove(req: Request, res: Response){
        try {
            const {id} = req.params;
            const result = await ProductModel.findOneAndDelete({
                _id: id,
            });

            res.status(200).json({

                data: result,
                message: "success dellete product",
            
            });
        } catch (error) {
            const err = error as MongooseError;

            res.status(500).json({
                data: null,
                message: err.message,
            });
        }
    },
}