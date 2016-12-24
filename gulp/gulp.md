https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md

通配符路径匹配示例：
	“src/a.js”：指定具体文件；
	“*”：匹配所有文件    例：src/*.js(包含src下的所有js文件)；
	“**”：匹配0个或多个子文件夹    例：src/**/*.js(包含src的0个或多个子文件夹下的js文件)；
	“{}”：匹配多个属性    例：src/{a,b}.js(包含a.js和b.js文件)  src/*.{jpg,png,gif}(src下的所有jpg/png/gif文件)；
	“!”：排除文件    例：!src/a.js(不包含src下的a.js文件)；
