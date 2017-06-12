module.exports = (ctx) => ({
    map: ctx.options.map,
    parser: ctx.file.extname === '.sss' ? 'sugarss' :  false,
    plugins: {
        'postcss-import': { root: ctx.file.dirname },
        'postcss-cssnext': ctx.options.cssnext ? ctx.options.cssnext : true,
        'cssnano': ctx.env === 'production' ? ctx.options.cssnano : false //css压缩
    }
})