const path = require('path');
const webpack = require('webpack');

let plugins = []
let SERVICE_URL = JSON.stringify('http://localhost:3001');


plugins.push(new webpack.DefinePlugin({
    SERVICE_URL
}));

module.exports = {
    entry: path.resolve('@babel/polyfill', __dirname, 'app', 'index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }, {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ]
            }, {
                test: /.*\.(gif|png|jpe?g)$/i,
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    },
    plugins,
    experiments: {
        outputModule: true,
        syncWebAssembly: true,
        topLevelAwait: true,
        asyncWebAssembly: true,
    },
};