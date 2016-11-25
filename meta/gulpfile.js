var gulp=require('gulp');
var less=require('gulp-less');
var jade=require('gulp-jade');
var minifycss=require('gulp-minify-css');
var js=require('gulp-uglify');
gulp.task("default",["watch"],function(){

})
gulp.task("watch",function(){
	gulp.watch("less/*.less",["less"]);
	gulp.watch("jade/*.jade",["jade"]);
	gulp.watch("js/*.js",["js"])
})
gulp.task('jade',function(){
	gulp.src('jade/*.jade')
	.pipe(jade({
		pretty:true
	}))
	.pipe(gulp.dest("html/"))
})
gulp.task('less',function(){
	gulp.src("less/*.less")
	.pipe(less())
	.pipe(gulp.dest('css/'))
})
gulp.task('js',function(){
	gulp.src('js/*.js')
	.pipe(gulp.dest('css/js/'))
})