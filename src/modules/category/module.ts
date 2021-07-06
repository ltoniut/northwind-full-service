import { Module } from '@nestjs/common';
import { CategoryControllerImpl } from './controller';
import { CategoryRepositoryKey, CategoryServiceKey } from './interfaces';
import { CategoryRepositoryImpl } from './repository';
import { CategoryServiceImpl } from './service';
@Module({
  controllers: [CategoryControllerImpl],
  providers: [
    {
      provide: CategoryRepositoryKey,
      useClass: CategoryRepositoryImpl,
    },
    {
      provide: CategoryServiceKey,
      useClass: CategoryServiceImpl,
    },
  ],
})
export class CategoryModule {}
