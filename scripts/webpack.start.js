const {merge} = require("webpack-merge");

const paths = require("./paths");
const dev = require("./webpack.dev.js");

module.exports = merge(dev, {
    output: {
        path: paths.build("start"),
        filename: "[name]_[id].bundle.js",
        publicPath: paths.publicDir,
        chunkFilename: "[name]_[id].js"
    },
    devServer: {
        client: {
            overlay: {
                errors: true,
                warnings: true
            },
            progress: true
        },
        historyApiFallback: true,
        host: "0.0.0.0",
        compress: false,
        hot: true,
        port: 8888,
        open: ["/"]
    }
});
