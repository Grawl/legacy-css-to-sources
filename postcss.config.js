module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-discard-empty'),
    require('postcss-discard-comments')({
      remove: comment => !(
        comment[0] == '*' ||
        comment[0] == '!'
      )
    }),
    require('postcss-discard-duplicates'),
    require('postcss-merge-rules'),
    require('postcss-unique-selectors'),
    require('postcss-normalize-charset'),
  ]
}
