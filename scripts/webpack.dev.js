const webpack = require("webpack");
const {merge} = require("webpack-merge");
const ESLintPlugin = require("eslint-webpack-plugin");

const paths = require("./paths");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    entry: {
        index: [paths.src("index.ts")]
    },
    output: {
        path: paths.build("dev"),
        filename: "[name]_[id].bundle.js",
        publicPath: paths.publicDir,
        chunkFilename: "[name]_[id].js"
    },
    module: {
        rules: [
            {
                test: /\.pcss$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-modules-typescript-loader"
                    }, {
                        loader: "css-loader",
                        options: {
                            modules: {
                                compileType: "module",
                                exportGlobals: true,
                                localIdentName: "[name]__[local]--[hash:base64:5]"
                            },
                            sourceMap: true,
                            importLoaders: 1
                        }
                    }, {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }, {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new ESLintPlugin(), new webpack.HotModuleReplacementPlugin(),
        new webpack.ProgressPlugin()
    ]
});
