'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;


//less编译
gulp.task('less', function() {

	return gulp.src( [ 'src/css/*.less' , '!src/css/_*.less' ] , { base: 'src' } )
		.pipe( sourcemaps.init() )
	  	.pipe( less() )
	  	.pipe( sourcemaps.write( '.' ) )
	  	.pipe( gulp.dest( 'dist' ) );
});


//css 压缩
gulp.task('cssnano' , ['less'] , function() {

	return gulp.src( [ 'dist/css/*.css' , '!dist/css/*.min.css'] , { base: 'dist' } )
		.pipe( sourcemaps.init() )
		.pipe( cssnano() )
		.pipe( rename( { suffix: '.min' } ) )   //添加后缀
		.pipe( sourcemaps.write( '.' ) )
		.pipe( gulp.dest( 'dist') );
})


//css MD5命名及路径替换
gulp.task('cssrev' , ['cssnano'] , function () {

	return gulp.src( [ 'dist/css/*.css' ] , { base: 'dist'} )
		.pipe( gulp.dest( 'build' ) )
		.pipe( rev() )
		.pipe( gulp.dest( 'build' ) )
		.pipe( rev.manifest() )
        .pipe( gulp.dest( './rev/css' ) );
})


//拷贝html到新的目录
gulp.task('html' , ['cssrev'] , function () {

	return gulp.src( ['src/**/*.html'] , { base: 'src' } )
		.pipe(gulp.dest( 'dist' ) )
		.pipe(gulp.dest( 'build' ) )

})

//替换html中的路径
gulp.task('revcollector' , ['html'] , function () {

	return gulp.src( [ 'rev/**/*.json' , 'build/**/*.html' ] )
	.pipe( revCollector() )
	.pipe( gulp.dest( 'build') )
	.pipe( reload( { stream: true } ) );
})


// browser-sync
gulp.task('serve', ['revcollector'] , function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch( ['src/**/*.*' ], [ 'revcollector' ] )
		.on('change', function(event) {
	  		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});
});


gulp.task('default', ['serve']);

// gulp.task('script' , function() {

// 	return gulp.src( [ 'src/js/*.js' ] , { base: 'src' } )
// 		.pipe( sourcemaps.init() )
// 		.pipe( concat( 'js/common.min.js' , { newLine: ';' } ) )
// 		.pipe( uglify() )
// 		.pipe( sourcemaps.write( '.' ) )
// 		.pipe( gulp.dest( 'dist' ) )

// })