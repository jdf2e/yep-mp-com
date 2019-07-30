const path = require("path");

const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");

const isDev = process.argv.indexOf("--develop") >= 0;
const isWatch = process.argv.indexOf("--watch") >= 0;
const demoSrc = path.resolve(__dirname, "./demo");
const demoDist = path.resolve(__dirname, "../example");
const src = path.resolve(__dirname, "../src");
const dev = path.join(demoDist, "components");
const dist = path.resolve(__dirname, "../miniprogram_dist");

module.exports = {
  entry: ["index"],

  isDev,
  isWatch,
  srcPath: src,
  distPath: isDev ? dev : dist,

  demoSrc,
  demoDist,

  wxss: {
    less: false, // compile wxss with less
    sourcemap: false // source map for less
  },

  webpack: {
    mode: "production",
    output: {
      filename: "[name].js",
      libraryTarget: "commonjs2"
    },
    target: "node",
    externals: [nodeExternals()], // ignore node_modules
    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: [
            {
              loader: "ts-loader",
              options: {
                // 指定特定的ts编译配置，为了区分脚本的ts配置
                configFile: path.resolve(__dirname, "../tsconfig.json")
              }
            }
          ],
          exclude: /node_modules/
        },
        {
          test: /\.js$/i,
          use: [
            //         'eslint-loader',
            "babel-loader"
          ],
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      modules: [src, "node_modules"],
      extensions: [".js", ".ts", ".json"]
    },
    plugins: [
      new webpack.DefinePlugin({}),
      new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 })
    ],
    optimization: {
      minimize: false
    },
    performance: {
      hints: "warning",
      assetFilter: assetFilename => assetFilename.endsWith(".js")
    }
  },

  copy: ["./wxml", "./wxss", "./wxs", "./images"] // will copy to dist
};
