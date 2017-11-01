import { Middleware, NestMiddleware } from "@nestjs/common";
import { urlencoded } from "express";

@Middleware()
export class URLEncodedMiddleware implements NestMiddleware {
  public resolve(): (req: any, res: any, next: any) => void {
    return urlencoded();
  }
}
