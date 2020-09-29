import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CarsModule } from './modules/cars.module';


@Module({
  imports: [
    HttpModule,
    MongooseModule.forRoot('mongodb+srv://admin:ae765736@clusterstepuw5ekr.yrr3g.mongodb.net/CarsDB?retryWrites=true&w=majority'),
    CarsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
