module.exports = ({ file, options, env }) => ({
    map: 'inline',
    parser: file.extname === '.sss' ? 'sugarss' :  false,
    plugins: {
        'postcss-import': { root: file.dirname },
        'postcss-cssnext': options.cssnext ? options.cssnext : false,
        'cssnano': env === 'production' ? options.cssnano : false //css压缩
    }
})