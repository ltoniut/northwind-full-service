import { CustomDecorator } from '@nestjs/common';
export declare const CACHE_CLEAR_METADATA = "cache_module:cache_clear";
export declare const CACHE_DISABLE_METADATA = "cache_module:cache_disable";
export declare const CacheClear: (value?: boolean | undefined) => CustomDecorator<string>;
export declare const CacheDisable: (value?: boolean | undefined) => CustomDecorator<string>;
