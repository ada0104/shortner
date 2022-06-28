const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

const OUTPUT = path.join(__dirname, './dist');

module.exports = (env) => {
  const envPath = env.ENV ? `.env.${env.ENV}` : `.env`;

  const config = {
    entry: './src/index.tsx',
    output: {
      path: OUTPUT,
      filename: 'js/[name].[hash].js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './public/index.html',
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[hash].css',
      }),
      new Dotenv({
        path: envPath,
      }),
    ],
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
              plugins: ['@babel/plugin-transform-runtime'],
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
              plugins: ['@babel/plugin-transform-runtime'],
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
              plugins: ['@babel/plugin-transform-runtime'],
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
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
        },
        {
          test: /\.(css|less|sass|scss)$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
    devServer: {
      port: 3000,
      open: true,
      historyApiFallback: true,
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      plugins: [new TsconfigPathsPlugin()],
    },
    devtool: 'source-map',
  };
  return config;
};
