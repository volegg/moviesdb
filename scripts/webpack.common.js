const webpack = require("webpack");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const paths = require("./paths");
const {BundleVersionPlugin} = require("./BundleVersionPlugin");
const {version} = require("./version");

const vendor = [
    "classnames",
    "react",
    "react-dom",
    "@fortawesome/fontawesome-svg-core",
    "@fortawesome/free-solid-svg-icons",
    "@fortawesome/react-fontawesome"
];
const vendorRedux = ["@reduxjs/toolkit", "react-redux"];
const isProd = process.env.NODE_ENV === "production";

module.exports = {
    optimization: {
        splitChunks: {
            chunks: "async",
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            cacheGroups: {
                vendor: {
                    chunks: "all",
                    name: "vendor",
                    reuseExistingChunk: true,
                    test: function (mod) {
                        if (!mod.context.includes("node_modules")) {
                            return false;
                        }

                        return vendor.some((str) => mod.context.includes(str));
                    }
                },
                vendorRedux: {
                    chunks: "all",
                    name: "vendorRedux",
                    reuseExistingChunk: true,
                    test: function (mod) {
                        if (!mod.context.includes("node_modules")) {
                            return false;
                        }

                        return vendorRedux.some((str) => mod.context.includes(str));
                    }
                },
                index: {
                    chunks: "all",
                    name: "index",
                    reuseExistingChunk: true,
                    test: function (mod) {
                        if (!mod.context.includes("node_modules")) {
                            return false;
                        }

                        return !vendor.some((str) => mod.context.includes(str)) && !vendorRedux.some((str) => mod.context.includes(str))
                    }
                }
            }
        }
    },

    plugins: [
        new webpack.DefinePlugin({
            "ENV.PROD": JSON.stringify(isProd),
            "ENV.DEV": JSON.stringify(process.env.NODE_ENV === "development"),
            "ENV.TEST": JSON.stringify(process.env.NODE_ENV === "unit_test"),
            "ENV.VERSION": JSON.stringify(version)
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                copyFromTo(paths.public(), paths.publicDir),
                copyFromTo(paths.assets(), paths.publicDir)
            ]
        }),
        new HtmlWebpackPlugin({
            scriptLoading: "defer",
            template: paths.templates("index.html"),
            templateParameters: {
                title: version.name,
                version: version.version
            },
            filename: "index.html",
            chunks: [
                "vendor", "index"
            ],
            minify: {
                html5: true,
                collapseWhitespace: true,
                minifyCSS: true,
                minifyJS: true,
                minifyURLs: true,
                removeAttributeQuotes: true,
                removeComments: true,
                removeEmptyAttributes: true,
                removeOptionalTags: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),

        new ForkTsCheckerWebpackPlugin({
            eslint: {
                files: paths.src("**/*.{ts,tsx,js,jsx}"), // required - same as command `eslint ./src/**/*.{ts,tsx,js,jsx} --ext .ts,.tsx,.js,.jsx`
            }
        }),

        new BundleVersionPlugin({version: version})
    ],

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    transpileOnly: true
                }
            },
            // Images: Copy image files to build folder
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: "asset/resource"
            },

            // Fonts
            {
                test: /\.(woff(2)?|eot|ttf|otf|)$/,
                type: "asset/resource"
            },

            // Inlines svg-files
            {
                test: /\.svg$/,
                type: "asset/inline"
            },

            // For svg files which should be loaded as resource
            {
                test: /\.resource\.svg$/,
                type: "asset/resource"
            },

            // For png files which should be inline loaded
            {
                test: /\.inline\.png$/,
                type: "asset/inline"
            }
        ]
    },

    resolve: {
        modules: [
            paths.src(),
            "node_modules"
        ],
        extensions: [
            ".js", ".jsx", ".json", ".ts", ".tsx"
        ],
        alias: {
            assets: paths.assets(),
            src: paths.src()
        }
    },

    stats: {
        children: true,
        preset: "minimal",

        warnings: false
    }
};

function copyFromTo(from, to) {
    return {
        from,
        to,
        globOptions: {
            ignore: ["*.DS_Store", "**/*.ts", "**/*.js", "**/*.map"]
        },
        noErrorOnMissing: true
    };
}
