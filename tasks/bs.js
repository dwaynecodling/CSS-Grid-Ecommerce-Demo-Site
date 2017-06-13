const browserSync = require('browser-sync').create();

function bs(opts, ctx, done) {

    if (opts.init) {
        browserSync.init({
            proxy: {
                target: "dwayne.static"
            }
        }, function (err) {
            if (err) return done(err);
            done();

        });


    }

    if (opts.reload) {
        browserSync.reload();
        done();

    }
}


module.exports.tasks = [bs];