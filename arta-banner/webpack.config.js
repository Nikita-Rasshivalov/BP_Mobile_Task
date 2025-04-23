import { buildWebpack } from "./src/config/webpack.buildWebpack.js";

export default () => {
  const config = buildWebpack();
  return config;
};
