import { join } from "path";

export function buildDevServer(output) {
  return {
    static: {
      directory: join(output),
      publicPath: "/",
    },
    compress: true,
    port: process.env.port ?? 8080,
    open: true,
  };
}
