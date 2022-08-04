'use strict'

var sass = require('sass')
var extend = require('util')._extend

module.exports = (ext) => function (data) {
   // support global and theme-specific config
   var userConfig = extend(
      this.theme.config.sass || {},
      this.config.sass || {}
   )

   var config = extend({
      data: data.text,
      file: data.path,
      outputStyle: 'compressed',
      sourceComments: false,
      indentedSyntax: (ext === 'sass')
   }, userConfig)

   try {
      // node-sass result object:
      // https://github.com/sass/node-sass#result-object
      var result = sass.renderSync(config)
      // result is now Buffer instead of String
      // https://github.com/sass/node-sass/issues/711
      return result.css.toString()
   } catch (error) {
      console.error(error.toString())
      throw error
   }
}
