---
title: zsh
date: 2022-01-13 11:07:24
permalink: /pages/46cdad/
sidebar: auto
categories:
  - 随笔
tags:
  - 
---
添加 hosts
`185.199.108.133 raw.githubusercontent.com`

安装 Oh My Zsh

`sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"`

解决报错：https://ceshiren.com/t/topic/5462

ip 地址查询：https://www.ipaddress.com/

卸载主题

uninstall_oh_my_zsh
Are you sure you want to remove Oh My Zsh? [y/N] Y

设置主题

cd ~/.oh-my-zsh/custom/themes

打开https://github.com/romkatv/powerlevel10k

直接下载压缩包

然后复制到~/.oh-my-zsh/custom/themes 下面

打开
vim ~/.zshrc

修改

ZSH_THEME="powerlevel10k/powerlevel10k"

保存

source ~/.zshrc

如果你指定了 ZSH_THEME="powerlevel10k/powerlevel10k" 但是在 zshrc 里没进行任何手动的配置，打开 iTerm2 的时候就会触发自动配置的流程。

也可以通过以下命令再次进入自动配置的流程：

p10k configure

问题大致如下：

- 这个符号看起来像钻石（旋转的正方形）吗？
- 这个符号看起来像锁吗？这个符号看起来像 Debian logo 吗？
- 这些图标都交叉分布在 X 之间吗？
- 风格编码是否显示时间目录层级分隔符头部（左边）尾部（右边）
- 是否换行左边和右边
- 是否有连接线命令行和提示
- 是否连接两行命令之间分布稀疏还是松散
- 是否需要图标

后面几个选项随意，执行完命令之后，就会初始化 p10k：在根目录下生成 ~/.p10k.zsh，并且在 ~/.zshrc 底部写入

如果想废除 p10k 的配置，只需要删除 ~/.p10k.zsh，并且删除上面这条命令即可。

安装目录跳转

brew install autojump

vim ~/.zshrc 加一行代码：

[[-s $(brew --prefix)/etc/profile.d/autojump.sh]] && . $(brew --prefix)/etc/profile.d/autojump.sh

复制代码

然后就是 source ~/.zshrc 生效。

使用 j 命令就可以执行 auto-jump，比如 j articles：

zsh-autosuggestions

brew install zsh-autosuggestions
