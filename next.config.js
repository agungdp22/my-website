require('dotenv').config()

const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new SWPrecacheWebpackPlugin({
        verbose: true,
        staticFileGlobsIgnorePatterns: [/\.next\//],
        runtimeCaching: [
          {
            handler: 'networkFirst',
            urlPattern: /^https?.*/
          }
        ]
      })
    )

    config.plugins.push(
        new Dotenv({
            path: path.join(__dirname, '.env'),
            systemvars: true
        })
    )

    return config
  }
}

const withSass = require('@zeit/next-sass')
module.exports = withSass()