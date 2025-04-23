import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { buildDevServer } from "./webpack.buildDevServer.js";
import { buildLoaders } from "./webpack.buildLoaders.js";
import { buildPlugins } from "./webpack.buildPlugins.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const paths = {
  entry: resolve(__dirname, "../js/main.js"),
  output: resolve(__dirname, "../../build"),
  htmlTemplate: resolve(__dirname, "../index.html"),
};

export function buildWebpack() {
  return {
    mode: "development",
    entry: paths.entry,
    output: {
      filename: "bundle.[contenthash].js",
      path: paths.output,
      clean: true,
    },
    devServer: buildDevServer(paths.output),
    module: {
      rules: buildLoaders(),
    },
    devtool: "inline-source-map",
    plugins: buildPlugins(paths.htmlTemplate),
  };
}
