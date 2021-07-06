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
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const decorators_1 = require("@nestjs/common/decorators");
const shared_utils_1 = require("@nestjs/common/utils/shared.utils");
const common_1 = require("@nestjs/common");
const cache_constants_1 = require("@nestjs/common/cache/cache.constants");
const cache_decorators_1 = require("./cache-decorators");
const HTTP_ADAPTER_HOST = 'HttpAdapterHost';
const REFLECTOR = 'Reflector';
let CacheInterceptor = class CacheInterceptor {
    constructor(cacheManager, reflector) {
        this.cacheManager = cacheManager;
        this.reflector = reflector;
    }
    intercept(context, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const ttl = this.reflector.get(cache_constants_1.CACHE_TTL_METADATA, context.getHandler()) || null;
            const disabled = this.reflector.get(cache_decorators_1.CACHE_DISABLE_METADATA, context.getHandler()) ||
                undefined;
            const clear = this.reflector.get(cache_decorators_1.CACHE_CLEAR_METADATA, context.getHandler()) ||
                undefined;
            const key = this.trackBy(context, !clear);
            if (!clear && (!key || disabled)) {
                return next.handle();
            }
            try {
                const value = yield this.cacheManager.get(key);
                if (value && !clear) {
                    return rxjs_1.of(value);
                }
                return next.handle().pipe(operators_1.tap(response => {
                    if (clear) {
                        this.cacheManager.del(key);
                    }
                    else {
                        const args = shared_utils_1.isNil(ttl)
                            ? [key, response]
                            : [key, response, { ttl }];
                        this.cacheManager.set(...args);
                    }
                }));
            }
            catch (_a) {
                return next.handle();
            }
        });
    }
    trackBy(context, onlyGet) {
        const httpAdapter = this.httpAdapterHost.httpAdapter;
        const isHttpApp = httpAdapter && !!httpAdapter.getRequestMethod;
        const cacheMetadata = this.reflector.get(cache_constants_1.CACHE_KEY_METADATA, context.getHandler());
        if (!isHttpApp || cacheMetadata) {
            return cacheMetadata;
        }
        const request = context.getArgByIndex(0);
        if (onlyGet && httpAdapter.getRequestMethod(request) !== 'GET') {
            return undefined;
        }
        return httpAdapter.getRequestUrl(request);
    }
};
__decorate([
    decorators_1.Optional(),
    decorators_1.Inject(HTTP_ADAPTER_HOST),
    __metadata("design:type", Object)
], CacheInterceptor.prototype, "httpAdapterHost", void 0);
CacheInterceptor = __decorate([
    decorators_1.Injectable(),
    __param(0, decorators_1.Inject(common_1.CACHE_MANAGER)),
    __param(1, decorators_1.Inject(REFLECTOR)),
    __metadata("design:paramtypes", [Object, Object])
], CacheInterceptor);
exports.CacheInterceptor = CacheInterceptor;
//# sourceMappingURL=cache-interceptor.js.map