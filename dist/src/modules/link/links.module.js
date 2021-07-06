"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const links_service_1 = require("./links.service");
const link_entity_1 = require("./link.entity");
const link_controller_1 = require("./link.controller");
let LinksModule = class LinksModule {
};
LinksModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([link_entity_1.Link])],
        providers: [links_service_1.LinksService],
        controllers: [link_controller_1.LinkController],
    })
], LinksModule);
exports.LinksModule = LinksModule;
//# sourceMappingURL=links.module.js.map