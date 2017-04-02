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
        script: './index.js'
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'script.js'
    },
    resolve: {
        modules: ['node_modules'],
        mainFiles: ['index', 'script', 'style'],
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
