const path = require("path");
const root = path.resolve(__dirname, "../");

module.exports = {
    resolve: path
        .resolve
        .bind(path),
    join: path
        .join
        .bind(path),

    root: getPathFrom(""),
    src: getPathFrom("src"),
    assets: getPathFrom("assets"),
    templates: getPathFrom("templates"),
    public: getPathFrom("public"),
    build: getPathFrom("build"),
    publicDir: ""
};

function getPathFrom(pathFrom) {
    return function getTemplatePath(filepath = "") {
        return getPath(pathFrom + (filepath
            ? "/" + filepath
            : ""));
    }
}

function getPath(pathStr = "") {
    if (!pathStr) {
        return root;
    }

    return path.join(root, ...pathStr.split("/"));
}
