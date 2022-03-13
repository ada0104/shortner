const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

const OUTPUT = path.join(__dirname, './dist');

module.exports = (env) => {
  const envPath = env.ENV ? `.env.${env.ENV}` : `.env`;

  const config = {
    entry: './src/index.tsx',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      plugins: [new TsconfigPathsPlugin()],
    },
    output: {
      path: OUTPUT,
      filename: 'bundle.[hash].js',
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /.jsx$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-react',
                  {
                    runtime: 'automatic',
                  },
                ],
                '@babel/preset-env',
              ],
            },
          },
        },
        {
          test: /.tsx$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/typescript',
                [
                  '@babel/preset-react',
                  {
                    runtime: 'automatic',
                  },
                ],
                '@babel/preset-env',
              ],
            },
          },
        },
        {
          test: /.ts$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/typescript', '@babel/preset-env'],
            },
          },
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './public/index.html',
      }),
      new Dotenv({
        path: envPath,
      }),
    ],
    devServer: {
      port: 3000,
      open: true,
      historyApiFallback: true,
    },
  };
  return config;
};
