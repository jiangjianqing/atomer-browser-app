#!/bin/bash

#找出需要更新的package：Currenthe Wanted不相同
#20170726 : 目前还不能使用webpack3 需要关注!!!!
npm outdated|awk 'NR>1 {print $0}'|egrep -iv "([-a-z]+)(\s+)([0-9.]+)(\s+)(\3)"

