/**
 * Script description.
 * @author TheoryOfNekomata
 * @date 2017-04-02
 */

const path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlPlugin = require('html-webpack-plugin'),

extractStyles = new ExtractTextPlugin('[name].css');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: './index.js'
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js'
    },
    resolve: {
        modules: ['node_modules'],
        mainFiles: ['script', 'style'],
        extensions: ['.js', '.json', '.scss']
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loaders: [
                    {
                        loader: 'json-loader'
                    }
                ]
            },
            {
                test: /\.(eot|svg|ttf|otf|woff2?)$/,
                loaders: [
                    {
                        loader: 'url-loader'
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: extractStyles.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            filename: 'login.html',
            template: './views/login.html'
        }),
        new HtmlPlugin({
            filename: 'index.html',
            template: './views/index.html'
        }),
        extractStyles
    ]
};
