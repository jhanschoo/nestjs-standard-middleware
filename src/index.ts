import {
  MiddlewaresConsumer,
  Module,
  NestModule,
  RequestMethod,
} from "@nestjs/common";
import { CompressionOptions } from "compression";
import { CorsOptions } from "cors";
import { IHelmetConfiguration } from "helmet";

import { CompressionMiddleware } from "./middlewares/compression.middleware";
import { CorsMiddleware } from "./middlewares/cors.middleware";
import { HelmetMiddleware } from "./middlewares/helmet.middleware";
import { JSONMiddleware } from "./middlewares/json.middleware";
import { ServeFaviconMiddleware } from "./middlewares/serve-favicon.middleware";
import { URLEncodedMiddleware } from "./middlewares/urlencoded.middleware";

const allRoutes = {
  method: RequestMethod.ALL,
  path: "*",
};

@Module({})
export class StandardMiddlewareModule implements NestModule {
  public static compressionOptions: CompressionOptions | undefined = undefined;
  public static corsOptions: CorsOptions | undefined = undefined;
  public static helmetOptions: IHelmetConfiguration | undefined = undefined;
  public static jsonOptions: any | undefined = undefined;
  public static urlencodedOptions: any | undefined = undefined;
  public static faviconPath: string | undefined = undefined;
  public static faviconMaxAge: number | undefined = undefined;

  public configure(consumer: MiddlewaresConsumer): void {
    Object.freeze(StandardMiddlewareModule);
    consumer
      .apply(CompressionMiddleware)
      .with(StandardMiddlewareModule.compressionOptions)
      .forRoutes(allRoutes)
      .apply(CorsMiddleware)
      .with(StandardMiddlewareModule.corsOptions)
      .forRoutes(allRoutes)
      .apply(HelmetMiddleware)
      .with(StandardMiddlewareModule.helmetOptions)
      .forRoutes(allRoutes)
      .apply(JSONMiddleware)
      .with(StandardMiddlewareModule.jsonOptions)
      .forRoutes(allRoutes)
      .apply(URLEncodedMiddleware)
      .with(StandardMiddlewareModule.urlencodedOptions)
      .forRoutes(allRoutes);
    if (StandardMiddlewareModule.faviconPath !== undefined) {
      consumer
        .apply(ServeFaviconMiddleware)
        .with(
          StandardMiddlewareModule.faviconPath,
          StandardMiddlewareModule.faviconMaxAge,
        )
        .forRoutes(allRoutes);
    }
  }
}
