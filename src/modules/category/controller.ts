import { Controller, Inject } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BaseControllerImpl } from 'northwind-rest-commons/dist/shared/baseModules/controller-impl';
import { CategoryService, CategoryServiceKey } from './interfaces';

const controllerPath =  'category';

@ApiTags(controllerPath)
@Controller(controllerPath)
export class CategoryControllerImpl extends BaseControllerImpl {
  constructor(
    @Inject(CategoryServiceKey)
    service: CategoryService,
  ) {
    super(service, controllerPath);
  }
}