# 分支命名规范

## 1、master/main

        主分支，永远是可用的稳定版本，不能直接在该分支上开发

## 2、develop

    开发主分支，所有新功能以这个分支来创建自己的开发分支，该分支只做合并操作，不能直接在该分支上进行开发

## 3、feature

    功能开发分支，在 develop 上创建分支，以自己开发功能模块命名，功能测试正常后合并到 develop 分支

## 4、hotfix

    紧急 bug 修改分支，在 master/main 分支上创建，修复完成后合并到 master/main

## 5、release

    短期从 develop 创建
