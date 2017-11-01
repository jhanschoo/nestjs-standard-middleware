import { NestMiddleware } from "@nestjs/common";
export declare class ServeFaviconMiddleware implements NestMiddleware {
    resolve(path: string, options?: {
        maxAge?: number;
    }): (req: any, res: any, next: any) => void;
}
