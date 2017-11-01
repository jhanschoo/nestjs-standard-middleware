import { Middleware, NestMiddleware } from "@nestjs/common";
import * as helmet from "helmet";

@Middleware()
export class HelmetMiddleware implements NestMiddleware {
  public resolve(
    options?: helmet.IHelmetConfiguration,
  ): (req: any, res: any, next: any) => void {
    return helmet(options);
  }
}
