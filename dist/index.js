"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const compression_middleware_1 = require("./middlewares/compression.middleware");
const cors_middleware_1 = require("./middlewares/cors.middleware");
const helmet_middleware_1 = require("./middlewares/helmet.middleware");
const json_middleware_1 = require("./middlewares/json.middleware");
const serve_favicon_middleware_1 = require("./middlewares/serve-favicon.middleware");
const urlencoded_middleware_1 = require("./middlewares/urlencoded.middleware");
const allRoutes = {
    method: common_1.RequestMethod.ALL,
    path: "*",
};
let StandardMiddlewareModule = StandardMiddlewareModule_1 = class StandardMiddlewareModule {
    configure(consumer) {
        Object.freeze(StandardMiddlewareModule_1);
        consumer
            .apply(compression_middleware_1.CompressionMiddleware)
            .with(StandardMiddlewareModule_1.compressionOptions)
            .forRoutes(allRoutes)
            .apply(cors_middleware_1.CorsMiddleware)
            .with(StandardMiddlewareModule_1.corsOptions)
            .forRoutes(allRoutes)
            .apply(helmet_middleware_1.HelmetMiddleware)
            .with(StandardMiddlewareModule_1.helmetOptions)
            .forRoutes(allRoutes)
            .apply(json_middleware_1.JSONMiddleware)
            .with(StandardMiddlewareModule_1.jsonOptions)
            .forRoutes(allRoutes)
            .apply(urlencoded_middleware_1.URLEncodedMiddleware)
            .with(StandardMiddlewareModule_1.urlencodedOptions)
            .forRoutes(allRoutes);
        if (StandardMiddlewareModule_1.faviconPath !== undefined) {
            consumer
                .apply(serve_favicon_middleware_1.ServeFaviconMiddleware)
                .with(StandardMiddlewareModule_1.faviconPath, StandardMiddlewareModule_1.faviconMaxAge)
                .forRoutes(allRoutes);
        }
    }
};
StandardMiddlewareModule.compressionOptions = undefined;
StandardMiddlewareModule.corsOptions = undefined;
StandardMiddlewareModule.helmetOptions = undefined;
StandardMiddlewareModule.jsonOptions = undefined;
StandardMiddlewareModule.urlencodedOptions = undefined;
StandardMiddlewareModule.faviconPath = undefined;
StandardMiddlewareModule.faviconMaxAge = undefined;
StandardMiddlewareModule = StandardMiddlewareModule_1 = __decorate([
    common_1.Module({})
], StandardMiddlewareModule);
exports.StandardMiddlewareModule = StandardMiddlewareModule;
var StandardMiddlewareModule_1;
//# sourceMappingURL=index.js.map