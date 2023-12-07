# 手摸手配置代码格式校验

## 一、eslint 工具集成

安装 eslint

`npm i eslint  -D`

初始化 eslint，生成.eslintrc.js

`npx eslint --init`

新建.eslintignore 文件，配置不需要 eslint 校验的文件

```
/node_modules

/unpackage

/uni_modules

/wxcomponents/vant-weapp

/commitlint.config.js

*.html

```

安装 eslint 相关插件

`npm i eslint-plugin-vue@latest -D`

项目中有使用 ts 的安装相关 ts 插件

`npm i @typescript-eslint/eslint-plugin@latest`

`@typescript-eslint/parser@latest -D`

package.json 添加相关校验

```
"scripts": {
"lint": "eslint . --ext .js,.ts,.vue --ignore-path .gitignore"
}
```

## 二、安装 prettier

`npm i prettier eslint-plugin-prettier eslint-config-prettier -D`

新建.prettierrc.js

// .prettierrc.js

```
module.exports = {

// 让 prettier 使用 eslint 的代码格式进行校验

eslintIntegration: true,

printWidth: 80, //单行长度

tabWidth: 2, //缩进长度

useTabs: false, //使用空格代替 tab 缩进

semi: true, //句末使用分号

singleQuote: true, //使用单引号

};

```

新建.prettierignore 配置你不需要的格式化的文件

```
//.prettierignore

unpackage

uni_modules

wxcomponents

```

更新一下 eslint 的配置，以处理 prettier 和 eslint 的冲突

```
// .eslintrc.js

module.exports = {

// 其他配置。。。

extends: [

//继承 vue 的标准特性

"plugin:vue/essential",

"eslint:recommended",

"prettier",

],

// 其他配置不变。。。

};
```

## 三、安装 stylelint

`npm i -D stylelint stylelint-config-standard`

新建.stylelintignore 配置你不需要的格式化的文件

# 忽略打包的文件

unpackage

## 四、安装配置 husky，一个为 git 客户端增加 hook 的工具

安装 husky

`npm i husky --save -D`

在 package.json  中添加  prepare  脚本

```
"scripts": {

//其他不变

"prepare": "husky install", // 新增 prepare 脚本

}

```

执行 prepare 脚本，创建.husky/目录

`npm run prepare`
添加 pre-commit 脚本

`npx husky add .husky/pre-commit "npm run lint"`

添加 commit-msg 脚本

`npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'`

## 五、安装配置  lint-staged 只对修改的文件进行校验

安装 lint-staged

`npm i lint-staged --save-dev`

在  package.json  文件中配置  lint  的命令

```
"scripts": {

//其他的不变

"lint": "lint-staged --allow-empty"

},

```

新建.lintstagedrc 文件

```
//.lintstagedrc

{

"_.{js,ts,vue}": [ "eslint --fix","prettier --write"],

"_.{html,vue,css,scss,sass,less}": ["stylelint --fix"]

}

```

## 六、安装 commitlint 通过钩子函数,判断 commit 信息是否符合规范

`npm install @commitlint/config-conventional @commitlint/cli -D`

新建 commitlint.config.js 文件

//commitlint.config.js

```
module.exports = {

extends: ["@commitlint/config-conventional"],

rules: {

"type-enum": [

2,

"always",

['ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'build', 'chore', 'revert', 'style', 'test'],

],

"subject-full-stop": [0, "never"],

"subject-case": [0, "never"],

},

};
```

//提交格式为 <type>(scope?): <subject>


- @Description: commit-msg 提交信息格式规范

-
- commit-msg 格式: <type>(scope?): <subject>

- - type: 用于表明我们这次提交的改动类型，是新增了功能？还是修改了测试代码？又或者是更新了文档？

-     - build: 编译相关的修改，例如发布版本、对项目构建或者依赖的改动

-     - chore: 其他修改, 比如改变构建流程、或者增加依赖库、工具等

-     - ci: 持续集成修改

-     - docs: 文档修改

-     - feat: 新特性、新功能

-     - fix: 修改bug

-     - perf: 优化相关，比如提升性能、体验

-     - refactor: 代码重构

-     - revert: 回滚到上一个版本

-     - style: 代码格式修改, 注意不是 css 修改

-     - test: 测试用例修改

-     - scope：一个可选的修改范围。用于标识此次提交主要涉及到代码中哪个模块。

-    - Subject：一句话描述此次提交的主要内容，做到言简意赅


使用方式

git commit -m 'feat: 增加 xxx 功能'

git commit -m 'fix(account): 修复 xxx 的 bug'

七、安装辅助提交依赖（可不安）

`npm i commitizen cz-conventional-changelog -D`

在  package.json  文件中配置  lint  的命令

```
"scripts": {

//其他的不变

"commit": "git-cz"

},

```

初始化 commit 命令

`npx commitizen init cz-conventional-changelog --save-dev --save-exact`

使用

运行 npm run commit
