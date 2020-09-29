import { HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { CarSchema } from './schema/car.schema';

@Module({
    imports: [
      MongooseModule.forFeature([{ name: 'Car', schema: CarSchema }]),
    ],
    controllers: [CarsController],
    providers: [CarsService]
  })
  export class CarsModule {}