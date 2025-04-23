import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
export function buildPlugins(htmlTemplate) {
  return [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: htmlTemplate,
      filename: "index.html",
    }),
  ];
}
