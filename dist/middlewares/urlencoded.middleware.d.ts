import { NestMiddleware } from "@nestjs/common";
export declare class URLEncodedMiddleware implements NestMiddleware {
    resolve(): (req: any, res: any, next: any) => void;
}
