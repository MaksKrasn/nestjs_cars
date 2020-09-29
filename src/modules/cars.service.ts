import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {
    constructor(@InjectModel('Car') private carsModel: Model<Car>){}

  async getAll(): Promise<Car[]> {
    return this.carsModel.find();
  }
}
