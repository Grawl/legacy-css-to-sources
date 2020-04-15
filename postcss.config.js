module.exports = {
	plugins: [
		require("autoprefixer")({
			add: false,
		}),
		require("postcss-discard-empty"),
		require("postcss-discard-duplicates"),
		require("postcss-discard-overridden"),
		require("postcss-merge-longhand"),
		require("postcss-merge-rules"),
		require("postcss-minify-selectors"),
		require("postcss-normalize-whitespace"),
		require("postcss-unique-selectors"),
		require("postcss-normalize-charset"),
	],
}
