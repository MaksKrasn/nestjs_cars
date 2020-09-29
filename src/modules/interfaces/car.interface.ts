import { Document } from 'mongoose';

export interface Car extends Document{
    readonly mark: string;
    readonly mdl: string;
    readonly year: number;
    readonly price: number;
}