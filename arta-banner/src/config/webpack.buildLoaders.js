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
        filename: ({ filename }) => {
          const relativePath = filename.replace(/^src\/assets\/images\//, "");
          return `assets/images/${relativePath}`;
        },
      },
      enforce: "pre",
      use: [
        {
          loader: "image-webpack-loader",
          options: {
            mozjpeg: {
              progressive: true,
              quality: 75,
            },
            optipng: {
              enabled: true,
            },
            pngquant: {
              quality: [0.65, 0.9],
              speed: 3,
            },
          },
        },
      ],
    },
    {
      test: /\.json$/i,
      type: "json",
    },
    {
      test: /\.html$/i,
      loader: "html-loader",
      options: {
        sources: {
          list: [
            "...",
            {
              tag: "source",
              attribute: "srcset",
              type: "srcset",
            },
          ],
        },
        preprocessor: (content, loaderContext) => {
          const result = content.replace(
            /srcset\s*=\s*"\s*([^"]+)\s*"/g,
            (match, p1) => {
              const normalized = p1
                .replace(/\s*\n\s*/g, "")
                .replace(/\s*,\s*/g, ", ")
                .trim();
              return `srcset="${normalized}"`;
            }
          );
          return result;
        },
      },
    },
  ];
}
