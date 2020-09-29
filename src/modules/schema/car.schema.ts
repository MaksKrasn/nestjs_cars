import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export const CarSchema = new mongoose.Schema({
    mark: String,
    model: String,
    year: Number,
    price: Number
});