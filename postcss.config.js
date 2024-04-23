// Next.js compiles CSS for its built-in CSS support using PostCSS.
module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    autoprefixer: {},
    cssnano: {}
  }
}
