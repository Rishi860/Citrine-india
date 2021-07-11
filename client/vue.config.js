const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  outputDir: path.resolve(__dirname, '../server/public'),
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    plugins: [
      new Dotenv({
        systemvars: true
      })
    ]
  }
}