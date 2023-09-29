/* eslint-disable @typescript-eslint/no-var-requires */
//webpack.config.js
const path = require('path');

module.exports = {
  mode: "production",
  entry: {
    main: "./src/index.ts",
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: "[name]-bundle.js", // <--- Will be compiled to this single file,
    clean:true
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: [/node_modules/, /build/, /docs/],
      }
    ]
  }
};