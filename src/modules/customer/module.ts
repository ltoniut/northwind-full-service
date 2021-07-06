import { Module } from '@nestjs/common';
import { CustomerControllerImpl } from './controller';
import { CustomerRepositoryKey, CustomerServiceKey } from './interfaces';
import { CustomerRepositoryImpl } from './repository';
import { CustomerServiceImpl } from './service';
@Module({
  controllers: [CustomerControllerImpl],
  providers: [
    {
      provide: CustomerRepositoryKey,
      useClass: CustomerRepositoryImpl,
    },
    {
      provide: CustomerServiceKey,
      useClass: CustomerServiceImpl,
    },
  ],
})
export class CustomerModule {}
