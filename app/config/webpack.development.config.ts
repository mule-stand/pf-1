import { Configuration as WebpackConfiguration } from 'webpack'
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { Config as SwcOptions } from '@swc/core/types'

type Configuration = WebpackConfiguration & {
  devServer?: WebpackDevServerConfiguration
}

const swcOptions: SwcOptions = {
  jsc: {
    parser: {
      syntax: 'typescript',
    },
    transform: {
      react: {
        refresh: true,
        runtime: 'automatic',
      },
    },
  },
}

export default (): Configuration => ({
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    clean: true,
  },
  watchOptions: {
    poll: 100,
  },
  devServer: {
    port: 80,
    hot: true,
    client: {
      webSocketURL: {
        port: process.env['APP_DEVELOPMENT_SERVER_PORT'] ?? 80,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: 'swc-loader',
          options: swcOptions,
        },
      },
    ],
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/template.html',
      title: 'WIR',
      containerElementId: 'app',
    }),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
  },
})
