---
title: commader的使用
date: 2022-01-10 19:05:52
permalink: /pages/61f130/
sidebar: auto
categories:
  - 随笔
tags:
  - 
---
[中文网站](https://github.com/tj/commander.js/blob/HEAD/Readme_zh-CN.md)

## 安装

`npm install commander`

## 声明 program 变量

```js
const { program } = require('commander');
const program = new Command();
```

## 选项

Commander 使用.option()方法来定义选项

命名：-后面接单个字符，和--后面接一个或多个单词，使用逗号、空格或|分隔。

Command 对象上的.opts()方法获取可以获取选项。

## boolean 型选项和带参数选项

boolean 型选项，选项无需配置参数

`program.option('-d, --debug', 'output extra debugging')`

设置参数（使用尖括号声明在该选项后，如--expect <value>）

`program.option('-p, --pizza-type <type>', 'flavour of pizza');`

通过 `program.parse(arguments)`方法处理参数，没有被使用的选项会存放在 `program.args` 数组中。该方法的参数是可选的，默认值为 `process.argv`。

## 选项的默认值

```js
program.option(
  '-c, --cheese <type>',
  'add the specified type of cheese',
  'blue'
);

program.parse();

console.log(`cheese: ${program.opts().cheese}`);
```

## 必填选项

```js
program.requiredOption('-c, --cheese <type>', 'pizza must have cheese');
```

## 版本选项

`.version()`方法可以设置版本，其默认选项为-V 和--version，设置了版本后，命令行会输出当前的版本号。

`program.version('0.0.1');`

## 命令

通过.command()或.addCommand()可以配置命令，有两种实现方式：为命令绑定处理函数，或者将命令单独写成一个可执行文件

.command()的第一个参数为命令名称。命令参数可以跟在名称后面，也可以用.argument()单独指定。参数可为必选的（尖括号表示）、可选的（方括号表示）或变长参数（点号表示，如果使用，只能是最后一个参数）。

```js
program
  .command('clone <source> [destination]')
  .description('clone a repository into a newly created directory')
  .action((source, destination) => {
    console.log(source, destination);
    console.log('clone command called');
  });
```
