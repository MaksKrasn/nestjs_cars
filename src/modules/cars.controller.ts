import { Body, Controller, Get, Post } from '@nestjs/common';
import { CarDto } from './dto/car.dto';
import { Car } from './interfaces/car.interface';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
    constructor(private carsService: CarsService) {}

    @Get()
    async cars() : Promise<CarDto[]> {
        return this.carsService.getAll();
    }
}