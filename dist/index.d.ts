/// <reference types="compression" />
/// <reference types="cors" />
/// <reference types="helmet" />
import { MiddlewaresConsumer, NestModule } from "@nestjs/common";
import { CompressionOptions } from "compression";
import { CorsOptions } from "cors";
import { IHelmetConfiguration } from "helmet";
export declare class StandardMiddlewareModule implements NestModule {
    static compressionOptions: CompressionOptions | undefined;
    static corsOptions: CorsOptions | undefined;
    static helmetOptions: IHelmetConfiguration | undefined;
    static jsonOptions: any | undefined;
    static urlencodedOptions: any | undefined;
    static faviconPath: string | undefined;
    static faviconMaxAge: number | undefined;
    configure(consumer: MiddlewaresConsumer): void;
}
