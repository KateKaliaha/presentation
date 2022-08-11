const path = require ('path');
const HTMLWebpackPlugin = require ('html-webpack-plugin');
const {CleanWebpackPlugin} = require ('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        assetModuleFilename: 'assets/[hash][ext][query]',
        clean: true,
    },
    devServer: {
        port: 4000,
        open: true,
        compress: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(ttf|woff2?|eot)$/,
                use: ['file-loader'],
            },
        ]
    },
    mode: 'development',
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                { from: 'src/assets', to: 'assets' },
                // { from: path.resolve(__dirname, 'src/assets/favicon.ico'), to: path.resolve(__dirname, 'dist/') }
            ],
        })
    ]
};