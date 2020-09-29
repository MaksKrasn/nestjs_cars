import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Последнее ДЗ............. Введи в адресной строке /cars и вернется список машин..';
  }
}
