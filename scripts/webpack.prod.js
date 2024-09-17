const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const {merge} = require("webpack-merge");

const ImageminPlugin = require("imagemin-webpack-plugin").default;
const imageminWebp = require("imagemin-webp");

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const paths = require("./paths");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    entry: {
        index: [paths.src("index.ts")]
    },
    output: {
        path: paths.build("prod"),
        filename: "[contenthash:8].js",
        publicPath: paths.publicDir,
        chunkFilename: "[contenthash:4][id].js",
        hashFunction: "md5",
        hashDigest: "hex"
    },
    mode: "production",
    devtool: false,
    module: {
        rules: [
            {
                test: /\.pcss$/,
                use: [
                    MiniCssExtractPlugin.loader, {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2,
                            sourceMap: false,
                            modules: true
                        }
                    },
                    "postcss-loader"
                ]
            }, {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },
    plugins: [
        new ESLintPlugin({emitError: true, emitWarning: true, failOnError: true, failOnWarning: true}),
        new TerserJSPlugin({}),
        new MiniCssExtractPlugin({filename: "[contenthash:8].css", chunkFilename: "[contenthash:6][id].css"}),
        new ImageminPlugin({
            test: /\.(jpe?g|png|svg)$/i,
            disable: false,
            plugins: [imageminWebp({quality: 90})]
        }),

        new BundleAnalyzerPlugin({generateStatsFile: true, analyzerMode: 'static', openAnalyzer: false}),
        new webpack.ProgressPlugin()
    ],
    optimization: {
        minimize: true,
        removeAvailableModules: true,
        removeEmptyChunks: true,
        minimizer: [
            new TerserJSPlugin({
                minify: TerserJSPlugin.swcMinify,
                terserOptions: {
                    cache: true,
                    ecma: 5,
                    mangle: true,
                    keep_classnames: false,
                    keep_fnames: false,
                    output: {
                        comments: false
                    },
                    parallel: true,
                    safari10: true,
                    toplevel: true,
                    wrap_iife: true
                }
            }),
            new CssMinimizerPlugin()
        ]
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
});
