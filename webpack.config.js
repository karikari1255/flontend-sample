module.exports = {
  entry: { bundle: "./src/Index.tsx" },
  output: {
    filename: "./dist/app.js"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          { loader: "ts-loader" }
        ]
      },
      {
        test: /\.scss/,
         loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};