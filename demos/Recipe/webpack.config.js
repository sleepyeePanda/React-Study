module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname +"/dist/assets",
        filename: "bundle.js",
        sourceMapFilename: 'bundle.map'
    },
    devtool: '#source-map',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['env', 'stage-0', 'react']
            }
        }
        ]
    }
}