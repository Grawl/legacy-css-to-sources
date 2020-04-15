# Convert legacy CSS to sources

1. Install dependencies with `yarn install`
2. Put legacy CSS to `css/input.css` (create that file)
3. Run `yarn start`
4. Grab processed CSS from `css/output.css`
5. Manually fix problems that still exists in output

## What this repository do

- Autoprefixer with [`{ add: false }` option](https://github.com/postcss/autoprefixer#options)
- A set of safe [CSSNano](https://cssnano.co) plugins, one-line output
- [Stylelint](https://stylelint.io) with `--fix` flag and set of rules to normalize CSS
- [stylefmt](https://github.com/morishitter/stylefmt) to prettify CSS
