import { Middleware, NestMiddleware } from "@nestjs/common";
import * as compression from "compression";

@Middleware()
export class CompressionMiddleware implements NestMiddleware {
  public resolve(
    options?: compression.CompressionOptions,
  ): (req: any, res: any, next: any) => void {
    return compression(options);
  }
}
