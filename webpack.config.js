module.exports = {
  // Normally an `entry` isn't required with Webpack 4, but
  // we'll put this here just in case you want to change the
  // filename of your entry point.
  entry: './src/index.js',
  module: {
    rules: [
      // Standard Babel with `babel-preset-env` and `babel-preset-react`.
      // See `.babelrc` to view your loaded preset and/or change it.
      {
        test: /\.jsx?$/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    // This allows you to import files in your code matching these
    // extensions without specifying the extensions themselves.
    extensions: ['.js', '.jsx']
  }
}
