import { NestMiddleware } from "@nestjs/common";
export declare class JSONMiddleware implements NestMiddleware {
    resolve(): (req: any, res: any, next: any) => void;
}
