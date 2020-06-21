const webpack = require('webpack')
const path = require('path')
const DeclarationBundlerPlugin = require('./declaration-bundler-webpack-plugin.fix')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const WebpackShellPlugin = require('webpack-shell-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals');
const {
    NODE_ENV = 'production'
  } =process.env
module.exports = {
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js'
      },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: [/node_modules/],
                loader: 'ts-loader'
            }
        ]
    },
    resolve: { extensions: ['.ts'] },
    output: {
        chunkFilename: '[name].js',
        filename: '[name].js'
    },
    target: 'node',
    externals: [ nodeExternals() ], 
    mode: NODE_ENV,
    watch: NODE_ENV === 'development',
    plugins: [
        new CleanWebpackPlugin(),
        new UglifyJSPlugin(),
        new DeclarationBundlerPlugin({
            moduleName: '"mylib"',
            out: '@types/index.d.ts'
        }),
        new WebpackShellPlugin({
            onBuildEnd: ['yarn run:dev']
          })
    ],
    devtool: 'source-map',
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    priority: -10,
                    test: /[\\/]node_modules[\\/]/
                }
            },

            chunks: 'async',
            minChunks: 1,
            minSize: 30000,
            name: true
        }
    }
}