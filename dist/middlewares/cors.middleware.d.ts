/// <reference types="cors" />
import { NestMiddleware } from "@nestjs/common";
import * as cors from "cors";
export declare class CorsMiddleware implements NestMiddleware {
    resolve(options?: cors.CorsOptions): (req: any, res: any, next: any) => void;
}
