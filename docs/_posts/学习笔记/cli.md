---
theme: vue-pro
title: cli
date: 2022-01-10 19:10:13
permalink: /pages/523318/
sidebar: auto
categories: 
  - 随笔
tags: 
  - 
---
## 前言

> 脚手架的作用

- 减少重复性的工作，不需要复制其他项目再删除无关代码，或者从零创建一个项目和文件。
- 可以根据交互动态生成项目结构和配置文件。
- 多人协作更为方便，不需要把文件传来传去。

本文项目完整代码**请戳**[https://github.com/xiumubai/xiumu-cli](https://github.com/xiumubai/xiumu-cli)

## 实现功能

- `xiumu init <projectName>`根据远程模板，初始化一个项目（vue、react）
- `xiumu --version` 查看当前版本号
- `xiumu -h` 帮助命令

## 第三方库

| 仓库 | 用途 |
| --- | --- |
| **commander** | 命令行工具 |
| **download-git-repo** | 用来下载远程模板 |
| **inquirer** | 交互式命令行工具 |
| **ora** | 显示loading动画 |
 

## 项目初始化

创建一个空项目(xiumu-cli)，使用 `npm init` 进行初始化。

## 安装依赖

`yarn add commander inquirer download-git-repo`

## 添加bin命令

在`package.json`文件中添加

```json
{
  "bin": {
    "xiumu": "./index.js"
  },
}
```

这样我们就可以使用`xiumu`这个命令了。

在`index.js`文件头部中添加`#!/usr/bin/env node`用来指定运行环境。

## 添加command命令

接下来需要添加`init`命令，这样就可以使用`xiumu init <projectName>`进行项目的初始化。

[commander](https://github.com/tj/commander.js/blob/HEAD/Readme_zh-CN.md)是 node.js 命令行解决方案。可以使用它进行命令交互。

**`index.js`**
```js
#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();

class Init {
  start() {
    program
      .version(require('./package.json').version)
      .option('-v, --version', '查看当前版本');

    program
      .command('init <projectName>')
      .description('create a new project')
      .action((projectName, options) => {
        console.log('projectName': projectName)
      });
    program.parse(process.argv);
  }
}

new Init().start();
```
运行`node index.js init test`，在日志中得到

```shell
projectName: test
```

这说明已经拿到了初始化的test目录名字，初始化完成的项目会放在test目录下。

## 添加模板选择

接下来需要选择模板选择，现在提供的模板有vue和react两个。

代码地址：[react](https://github.com/xiumubai/cli-template-store/tree/react-template)、[vue](https://github.com/xiumubai/cli-template-store/tree/vue-template)。

添加[inquirer](https://www.npmjs.com/package/inquirer)命令交互，可以供用户选择。

```js
#!/usr/bin/env node

const { Command } = require('commander');
const inquirer = require('inquirer');
const program = new Command();

class Init {
  start() {
    program
      .version(require('./package.json').version)
      .option('-v, --version', '查看当前版本');

    program
      .command('init <projectName>')
      .description('create a new project')
      .action((projectName, options) => {
        console.log(projectName, options)
        inquirer
          .prompt([
            {
              type: 'list',
              name: 'template',
              message: 'please select frame type',
              choices: ['Vue', 'React']
            }
          ])
          .then((answer) => {
            console.log(answer.template)
          })
      });
    program.parse(process.argv);
  }
}

new Init().start();

```
如果选择的是Vue，这里的日志打印为`Vue`，反之就是`React`,也就意味着我们可以拿到不同的值去选择不同的模板。接下来就是需要从git上拉取不同的模板代码，clone到本地就可以了。

## 添加模板下载

模板添加需要使用[download-git-repo](https://www.npmjs.com/package/download-git-repo)，具体用法参考官网。

```js
#!/usr/bin/env node

const { Command } = require('commander');
const fs = require('fs');
const inquirer = require('inquirer');
const ora = require('ora')
const downloadGit  = require('download-git-repo');
const program = new Command();

class Init {
  start() {
    program
      .version(require('./package.json').version)
      .option('-v, --version', '查看当前版本');

    program
      .command('init <projectName>')
      .description('create a new project')
      .action((projectName, options) => {
        console.log(projectName)
        inquirer
          .prompt([
            {
              type: 'list',
              name: 'template',
              message: 'please select frame type',
              choices: ['Vue', 'React']
            }
          ])
          .then((answer) => {
            console.log(answer.tempalate);
            const spinner = ora('downloading template ...');
            spinner.start();
            const template = answer.template === 'Vue' ? 'vue-template' : 'react-template';
            const api = `github:xiumubai/cli-template-store#${template}`;
            downloadGit(api, projectName, (err) =>{
              if (err) {
                spinner.fail('模板下载失败')
              } else {
                spinner.succeed('模板下载成功')
              }
            })
          })
      });
    program.parse(process.argv);
  }
}

new Init().start();

```

这里我们根据选择的不同模板，选择了不同的分支，然后进行了拼接，`api`为完成的代码地址。

现在整个流程就完成跑通了，一个最简单的cli脚手架工具就已经写完了。运行命令`node index.js init test`,然后选择模板，静静等待模板下载。

## 发布至npm

没有注册账号的可以先去[npm](https://www.npmjs.com/)官网注册一个账号。注册成功以后就可以在本地进行登录了。

**登录**

`npm login` 输入账户名、密码、邮箱、邮箱验证码就可以登录成功。

**发布包**

```
npm publish --access=public //如果是公开包这样发布，如果不是公开的包则去掉--access=public即可
```

发布成功以后，皆可以在本地使用了。

## 安装使用

**安装**

`yarn add @xiumu/cli -g`

**创建项目**

`xiumu init <projectName>`

输入项目名字，选择对应的vue或者react模板

## 写在最后

相信到这里，你已经学会了如何去写一个最基本的脚手架。那么就动起手来，亲自去实践一遍，你的理解就会更深刻。

这里还有很多要做的额外工作，比如创建项目的时候判断当前的项目是不是已经存在，`package.json`文件里的name,author等的初始化等。

如果你觉得本文对你有作用，请点个赞再走。遇到什么问题，也可以直接在评论区留言，我会一一回复。
