'use strict'

const webpack = require('webpack');
const path = require('path');

module.exports = (env, argv) => {
    const NODE_ENV = (argv.mode && argv.mode === 'production') ? 'production' : 'development';

    return {
        mode: NODE_ENV,

        entry: {
			'js-helpers' : './src/index.ts',
            'js-helpers.min': './src/index.ts'
        },

        output: {
            path: path.resolve(__dirname, '_bundles'),
            filename: '[name].js',
            libraryTarget: 'umd',
            library: 'js-helpers',
            umdNamedDefine: true,
            clean: true //очистка public перед рендером
        },

        resolve: {
            extensions: ['*', ".ts", ".tsx", ".js", ".jsx"],
        },

        module: {
            rules: [
                {
					test: /\.ts(x?)$/,
					//exclude: /node_modules/,
					use: 
					[
                        /*
						{
							loader: 'babel-loader', // uses babel-loader for the specified file types (no ts-loader needed)							
						},*/
                        {
                            loader: "ts-loader",
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



        watch: NODE_ENV === 'development', //после запуска webpack он будет висеть в фоне и автоматически мониторить и перекомпилировать изменения (только в режиме разработки)

        devtool: 'source-map',

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

