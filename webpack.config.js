const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
    devtool: isDev ? 'source-map' : false,
    entry: path.join(__dirname, 'src/index.js'),

    output: {
        filename: 'js/[name]-[hash:5].js',
        path: path.join(__dirname, 'dist'),
        publicPath: ''
    },

    devServer: {
        static: {
            directory: path.join(__dirname, 'src'),
        },
        compress: true,
        port: 9000,
    },

    optimization: {
        minimizer: [new TerserPlugin({
            extractComments: false,
        })],
        splitChunks: {
            chunks: 'all',
            maxSize: 20000,
            minRemainingSize: 0,
            minChunks: 1,
        },
    },

    plugins: [
        new HtmlWebpackPlugin({ template: 'src/index.html' }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: 'style/style-[hash:5].css' })],

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    esModule: false
                }
            },
            {
                test: /\.(png|jpg|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/img/[name]-[hash:5][ext]'
                }
            },
            {
                test: /\.(woff2|woff|otf|ttf)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name]-[hash:5][ext]'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: '../' }
                    },
                    { loader: 'css-loader' },
                    { loader: 'resolve-url-loader' },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                ]
            }
        ]
    }
}