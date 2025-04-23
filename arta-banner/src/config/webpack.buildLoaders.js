export function buildLoaders() {
  return [
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    },
    {
      test: /\.(png|jpg|webp|gif|svg)$/i,
      type: "asset/resource",
      generator: {
        filename: "assets/images/[name]-[hash:4][ext]",
      },
    },
    {
      test: /\.json$/i,
      type: "json",
    },
    {
      test: /\.html$/i,
      use: ["html-loader"],
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: "asset/resource",
      use: {
        loader: "url-loader",
      },
      generator: {
        filename: "assets/fonts/[name][ext]",
      },
    },
  ];
}
