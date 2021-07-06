"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
exports.CACHE_CLEAR_METADATA = 'cache_module:cache_clear';
exports.CACHE_DISABLE_METADATA = 'cache_module:cache_disable';
exports.CacheClear = (value) => common_1.SetMetadata(exports.CACHE_CLEAR_METADATA, value === undefined ? true : value);
exports.CacheDisable = (value) => common_1.SetMetadata(exports.CACHE_DISABLE_METADATA, value === undefined ? true : value);
//# sourceMappingURL=cache-decorators.js.map