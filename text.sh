#!/bin/sh 

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build


cd docs
cd .vuepress
cp -r dist/*  -t  ../../../../html/

git add -A
git commit -m 'deploy'


# 如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目
git push origin
