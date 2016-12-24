一、node 和 npm 的安装与管理

	- 使用 nvm 进行 node 版本的管理

		1、下载 nvm 安装包
			选择 nvm-setup.zip 进行下载
			网址：https://github.com/coreybutler/nvm-windows/releases
		2、安装
			选择存放 nvm 的路径 --- 对应配置项 root
			选择存放 nodejs 的路径 --- 对应配置项 path
		3、完成 配置
			nvm 根目录 有一个 settings.txt 文件
			手动配置如下：
				root: d:\abc\nvm
				path: d:\abc\nodejs
				arch: 64
				proxy: none
				node_mirror: https://npm.taobao.org/mirrors/node/
				npm_mirror: https://npm.taobao.org/mirrors/npm/
		4、配置环境变量
			使用 nvm-setup.zip 自动安装 已经默认帮我们配置了环境变量
		5、补充


	- npm 的安装

		- 其实 node 各版本已经自带了 npm 管理工具，但为了方便包的管理，需安装全局的 npm

		1、首先我们进入命令模式，输入 npm config set prefix "d:\abc\nvm\npm" 回车
		这是在配置npm的全局安装路径，然后在用户文件夹下会生成一个.npmrc的文件
		用记事本打开后可以看到如下内容：

			prefix=d:\abc\nvm\npm

		2、手动配置其他项：

			proxy=null
			prefix=d:\abc\nvm\npm
			cache=d:\abc\nvm\npm-cache
			registry=http://r.cnpmjs.org/
			disturl=https://npm.taobao.org/dist

		3、然后继续在命令中输入： npm install npm -g 回车后会发现正在下载npm包
		4、配置环境变量
			 - 变量名为：NPM_HOME，变量值为 ：C:\dev\nvm\npm
			 - 在Path的最前面添加 ;%NPM_HOME%
			 - 注意了，这个一定要添加在 %NVM_SYMLINK%之前
			 - 所以我们直接把它放到Path的最前面

	- cnpm 的安装 国内镜像

		[网址]：https://npm.taobao.org/
		[网址]：https://cnpmjs.org/

		npm install -g cnpm --registry=https://registry.npm.taobao.org
		或者
		npm install -g cnpm --registry=http://r.cnpmjs.org

	- nrm 的安装

		- nrm 就是 npm registry manager 也就是 npm 的镜像源管理工具
		- 有时候国外资源太慢，那么我们可以用这个来切换镜像源。
		- 我们只要通过这个命令: npm install -g nrm 就可以实现安装。
		- 注意 -g 可以直接放到 install 的后面，我们以后也最好这样用
		- 因为这样用，我们可以在cmd中上下箭头切换最近命令的时候，容易修改，更方便操作。
		- 安装完成后，我们就可以使用了。

		命令：nrm ls 用于展示所有可切换的镜像地址
		命令：nrm use cnpm 我们这样就可以直接切换到cnpm上了。当然也可以按照上面罗列的其他内容进行切换。


