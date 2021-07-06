"use strict";
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
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
const environment_service_1 = require("./modules/environment/environment.service");
const app_module_1 = require("./app.module");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule, {
            cors: true,
        });
        app.useGlobalPipes(new common_1.ValidationPipe({
            transform: true,
        }));
        app.setGlobalPrefix(new environment_service_1.EnvironmentService().getEnvs().GLOBAL_ROUTES_PREFIX);
        const options = new swagger_1.DocumentBuilder()
            .setTitle('LinOS Connect Inventory API')
            .setDescription('API docs for the Inventory API')
            .setVersion('1.0')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, options);
        swagger_1.SwaggerModule.setup('docs', app, document);
        const configService = app.get(config_1.ConfigService);
        yield app.listen(configService.get('PORT') || 3034);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map