#!/bin/sh 

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
<<<<<<< HEAD
npm run build
=======
# npm run build
>>>>>>> 39241f7580a2d3949bf936a65c8bfda2fbea3d2b


cd docs
cd .vuepress
cp -r dist/*  -t  ../../../../html/

git add -A
git commit -m 'deploy'


# 如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目
git push origin
