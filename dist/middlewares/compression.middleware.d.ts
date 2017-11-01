/// <reference types="compression" />
import { NestMiddleware } from "@nestjs/common";
import * as compression from "compression";
export declare class CompressionMiddleware implements NestMiddleware {
    resolve(options?: compression.CompressionOptions): (req: any, res: any, next: any) => void;
}
