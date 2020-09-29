import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export const CarSchema = new mongoose.Schema({
    mark: String,
    mdl: String,
    year: Number,
    price: Number
});