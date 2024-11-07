import { Request, Response } from "express"
import { CategoryModel } from "../models/category.model"
import { MongooseError } from "mongoose";


export default {
    async create(req: Request, res: Response){
        try {
            const result = await CategoryModel.create(req.body);

            res.status(201).json({

                data: result,
                message: "success create category",
            
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
            const result = await CategoryModel.find();

            res.status(200).json({

                data: result,
                message: "success get category",
            
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
            const result = await CategoryModel.findById(id);

            res.status(200).json({

                data: result,
                message: "success create category",
            
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
            const result = await CategoryModel.findOneAndUpdate({
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
                message: "success update category",
            
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
            const result = await CategoryModel.findOneAndDelete({
                _id: id,
            });

            res.status(200).json({

                data: result,
                message: "success dellete category",
            
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