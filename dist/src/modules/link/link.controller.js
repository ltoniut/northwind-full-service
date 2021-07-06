"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const create_link_dto_1 = require("./dto/create-link.dto");
const links_service_1 = require("./links.service");
let LinkController = class LinkController {
    constructor(linksService) {
        this.linksService = linksService;
    }
    getLinks() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.linksService.getLinks();
        });
    }
    getLink(linkId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.linksService.getLink(linkId);
        });
    }
    addLink(createLinkDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.linksService.createLink(createLinkDto);
        });
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LinkController.prototype, "getLinks", null);
__decorate([
    common_1.Get(':linkId'),
    __param(0, common_1.Param('linkId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LinkController.prototype, "getLink", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_link_dto_1.CreateLinkDto]),
    __metadata("design:returntype", Promise)
], LinkController.prototype, "addLink", null);
LinkController = __decorate([
    common_1.Controller('link'),
    __metadata("design:paramtypes", [links_service_1.LinksService])
], LinkController);
exports.LinkController = LinkController;
//# sourceMappingURL=link.controller.js.map