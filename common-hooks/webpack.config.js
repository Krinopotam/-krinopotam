'use strict'

const webpack = require('webpack');

module.exports = (env, argv) => {
    const NODE_ENV = (argv.mode && argv.mode === 'production') ? 'production' : 'development';

    return {
        mode: NODE_ENV,

        entry: {
            'index': './src/index.ts',
        },

        output: {
            publicPath: '/assets/',
            path: __dirname + '/dist',

            chunkFilename: '[name].js',
            filename: '[name].js',
            clean: true, //очистка public перед рендером
        },

        module: {
            rules: [
                {
                    test: /\.ts(x?)$/,
                    exclude: /node_modules/,
                    use:
                        [
                            {
                                loader: 'babel-loader', // uses babel-loader for the specified file types (no ts-loader needed)
                            },
                            {
                                loader: "ts-loader", //used for types generation
                                options: {
                                    compilerOptions: {
                                        noEmit: false,
                                    },
                                },
                            },
                        ],
                },
            ]
        },

        resolve: {
            extensions: ['*', ".ts", ".tsx", ".js", ".jsx"],
        },

        watch: NODE_ENV === 'development', //после запуска webpack он будет висеть в фоне и автоматически мониторить и перекомпилировать изменения (только в режиме разработки)

        devtool: NODE_ENV === 'development' ? "eval-source-map" : false,

        optimization: {
            minimize: false, //сжатие
        },

        target: ['web', 'es5'],
        plugins: [
            new webpack.DefinePlugin({
                NODE_ENV: JSON.stringify(NODE_ENV),
            }),
        ],
    }
}

