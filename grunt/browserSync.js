module.exports = {
    bsFiles: {
        src : 'build/css/*.css'
    },
        options: {
                watchTask: true,
                ghostMode: {
                    clicks: true,
                    scroll: true,
                    links: true,
                    forms: true
                },
                server: {
                    baseDir: '_site'
                }
            }

}
