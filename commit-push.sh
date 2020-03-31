###
 # @Author: Rainy
 # @Date: 2020-03-31 17:41:06
 # @LastEditors: Rainy
 # @LastEditTime: 2020-03-31 17:54:38
 ###

#!/usr/bin/env bash

echo "---- commit push shell run ----"

read -p "Input your commit msg (*): " msg
read -p "Need pull current branch(Y, y, default: N): " pull

if [[ $pull = "Y" || $pull = "y" ]];then

read -p "Need pull branch(default: current branch, eg: master): " branch

fi

git add .

if [ -n "$msg" ];then

echo "commit msg: $msg"

git commit -m "$msg"

else

echo "Please input commit msg"
exit 1

fi

if [[ $pull = "Y" || $pull = "y" ]];then

if [ -n "$branch" ];then

echo "Pulling branch is $branch"

else

branch=$(git branch | awk '/\*/ { print $2; }')
# 另一种获取当前 branch_name 的方法
# git symbolic-ref --short HEAD
echo "Current branch is $branch, will pull $branch"

fi

echo "Pulling ${branch} from remote"

git pull origin ${branch}

else

echo "Jump pull current branch"

fi

echo "Commit pushing"

# git push origin ${branch}:refs/for/${branch}
git push origin ${branch}

echo "---- commit push shell end ----"
