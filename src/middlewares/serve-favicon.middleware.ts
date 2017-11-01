import { Middleware, NestMiddleware } from "@nestjs/common";
import * as favicon from "serve-favicon";

@Middleware()
export class ServeFaviconMiddleware implements NestMiddleware {
  public resolve(
    path: string,
    options?: {
      maxAge?: number;
    },
  ): (req: any, res: any, next: any) => void {
    return favicon(path, options);
  }
}
