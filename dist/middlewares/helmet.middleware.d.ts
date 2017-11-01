/// <reference types="helmet" />
import { NestMiddleware } from "@nestjs/common";
import * as helmet from "helmet";
export declare class HelmetMiddleware implements NestMiddleware {
    resolve(options?: helmet.IHelmetConfiguration): (req: any, res: any, next: any) => void;
}
