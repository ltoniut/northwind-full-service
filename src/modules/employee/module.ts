import { Module } from '@nestjs/common';
import { EmployeeControllerImpl } from './controller';
import { EmployeeRepositoryKey, EmployeeServiceKey } from './interfaces';
import { EmployeeRepositoryImpl } from './repository';
import { EmployeeServiceImpl } from './service';
@Module({
  controllers: [EmployeeControllerImpl],
  providers: [
    {
      provide: EmployeeRepositoryKey,
      useClass: EmployeeRepositoryImpl,
    },
    {
      provide: EmployeeServiceKey,
      useClass: EmployeeServiceImpl,
    },
  ],
})
export class EmployeeModule {}
