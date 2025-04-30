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
  ];
}
