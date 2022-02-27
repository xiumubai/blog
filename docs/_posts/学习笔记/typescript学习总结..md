---
title: typescript学习总结
date: 2022-02-17 10:58:48
permalink: /pages/d18f9b/
sidebar: auto
categories:
  - 随笔
tags:
  - 
---
[官方文档](https://www.tslang.cn/docs/home.html)
http://ts.xcatliu.com/advanced/generics.html
https://zhongsp.gitbooks.io/typescript-handbook/content/
https://www.typescriptlang.org/zh/play?#code/Q

## any

any 和 unknown 的区别吗？

## 基础类型

- 常用：boolean、number、string、array、enum、any、void
- 不常用：tuple、null、undefined、never

```ts
const count: number = 1;
const tag: boolean = true;
```

## 对象类型

简单理解 interface 和 type 的区别：type 更强大，interface 可以进行声明合并，type 不行；

```ts
interface Person {
  name: string; // 必填
  age: number;
  skinNum?: number; // 非必填
  say(): string; // say函数返回值为string
  [propname: string]: any; // 当前Hero可定义任意字符串类型的key
}
// 继承
interface littleSoldier extends Hero {
  rush(): string;
}

interface AnyType = {
  [key: string]: any;
}

type Person {
  name: string;
  age: number;
  skill: string;
  sex?: string;
}
```

## 数组类型

常见用法就是需要声明数组中的数据类型

### 数组的声明方式

1. 「类型 + 方括号」表示法§，比如`var arr:number[] = [1,2,3]`
2. 「Array + 方括号 + 类型」表示法§，比如`var arr:Array[] = [1,2,3]`

数组的项中不允许出现其他的类型：

```ts
const numberArr: nunber[] = [1, 2, 3, 4, 'b'];
// Type 'string' is not assignable to type 'number'.
```

### 数组泛型表示法

```ts
interface AraryItem {
  id: number;
  name: string;
  age?: number;
}

let arr: AraryItem[] = [
  { id: 1, name: 'jannye', age: 18 },
  { id: 12, name: 'xiumu', age: 19 },
];
let arr2: Array<AraryItem> = [
  { id: 1, name: 'jannye', age: 18 },
  { id: 12, name: 'xiumu', age: 19 },
];
```

## 元组 tuple

### 元祖的作用

数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。
let tom: [string, number];

```ts
let tom: [string, number] = ['Tom', 25];
// or
let tom: [string, number];
tom[0] = 'Tom';
tom[1] = 25;
```

但是当直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项否则会报错

```ts
let tom: [string, number];
tom = ['Tom'];
// Property '1' is missing in type '[string]' but required in type '[string, number]'.
```

### 越界元素

当添加越界元素的时候，它的类型会被限制为元组中每个类型的联合类型：

```ts
let tom: [string, number];
tom = ['Tom', 25];
tom.push('male');
```

## 联合| or 交叉&类型

联合类型：某个变量可能是多个 interface 中的其中一个，用 | 分割
交叉类型：由多个类型组成，用 & 连接

```ts
// anjiao 某胖博主爱好
interface Student {
  name: boolean;
  say: () => {};
}

interface Teacher {
  anjiao: boolean;
  skill: () => {};
}

// 联合类型
function who(name: Student | Teacher) {}
// 交叉类型
// 同名类型会进行合并，同名基础类型属性的合并返回：never
// 同名非基础类型属性可以正常合并
function who(name: Student & Teacher) {}
```

### 访问联合类型的属性或方法

联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：

```ts
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
console.log(myFavoriteNumber.length); // 5
myFavoriteNumber = 7;
console.log(myFavoriteNumber.length); // 编译时报错

// index.ts(5,30): error TS2339: Property 'length' does not exist on type 'number'.
```

上例中，第二行的 myFavoriteNumber 被推断成了 string，访问它的 length 属性不会报错。

而第四行的 myFavoriteNumber 被推断成了 number，访问它的 length 属性时就报错了。

结论：访问的方法或者属性需要是 string 和 number 共有的。

## enum 类型

常数枚举

```ts
enum Days {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}
console.log(Days['Sun'] === 0); // true
console.log(Days[0] === 'Sun'); // true
```

上面的代码编译结果为

```js
'use strict';
var Days;
(function (Days) {
  Days[(Days['Sun'] = 0)] = 'Sun';
  Days[(Days['Mon'] = 1)] = 'Mon';
  Days[(Days['Tue'] = 2)] = 'Tue';
  Days[(Days['Wed'] = 3)] = 'Wed';
  Days[(Days['Thu'] = 4)] = 'Thu';
  Days[(Days['Fri'] = 5)] = 'Fri';
  Days[(Days['Sat'] = 6)] = 'Sat';
})(Days || (Days = {}));
console.log(Days['Sun'] === 0); // true
console.log(Days[0] === 'Sun'); // true
```

手动赋值

我们也可以给枚举项手动赋值：,未手动赋值的枚举项会接着上一个枚举项递增。

```ts
enum Days {
  Sun = 3,
  Mon = 1,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}
console.log(Days['Sun'] === 3); // true
console.log(Days['Wed'] === 3); // true
console.log(Days[3] === 'Sun'); // false
console.log(Days[3] === 'Wed'); // true
```

## 泛型 T（Type）

泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

### 典型的例子：

```ts
function createArray(length: number, value: string): Array<any> {
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr[i] = value;
  }
  return arr;
}
createArray(3, 'x');
```

上面的这段有很明显的一个缺陷，并没有规定函数的返回值类型

下面我们用泛型约束一下

```ts
function createArray<T>(length: number, value: T): Arary<T> {
  let arr = [];
  for(let i = 0; i < length; i++) {
    arr[i] = value;
  }
  retur arr;
}

createArray<string>(3, 'x');
```

### 泛型约束

在函数内部使用泛型变量的时候，我们不知道变量的类型，所以不能随意的操作它的属性。这时候就需要对变量进行泛型的约束。

```ts
function loggingIdentity<T>(arg: T): T {
  console.log(arg.length);
  return arg;
}
loggingIdentity(9);
// index.ts(2,19): error TS2339: Property 'length' does not exist on type 'T'.
```

上面的例子中，number 类型的变量并没有 length，所以会报错；

现在对这个函数传入的变量进行泛型约束，只允许有 lenght 属性的变量传入

```ts
interface LengthSupport {
  length: number;
}
function loggingIdentity<T extends LengthSupport>(arg: T): T {
  console.log(arg.length);
  return arg;
}
loggingIdentity('abc');
```

### 泛型接口

```ts
interface CreateArrayFunc<T> {
  (length: number, value: T): Array<T>;
}
let createArray: CreateArrayFunc<string>;
createArray = function <T>(length: number, value: T): Array<T> {
  let result: T[] = [];

  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
};

createArray(3, 'x');
```

### 泛型参数的默认类型

```ts
function createArray<T = string>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}
```

## 断言

让我们先来看一个例子

```ts
interface Cat {
  name: string;
  run(): void;
}

interface Finsh {
  name: string;
  swim(): void;
}

function getName(animal: Cat | Finsh) {
  if (typeof animal.swim === 'function') {
    return true;
  }
  return false;
}

// Property 'swim' does not exist on type 'Cat | Finsh'.
// Property 'swim' does not exist on type 'Cat'.
```

当我们访问 `swim` 方法的时候，提示我们 `swim` 在 Cat | Finsh 不存在，这就是个很奇怪的现象了，

备注：这个问题跟联合类型有关系

这时候就需要我们用类型断言将`animal` 断言成 `Fish`

```ts
// 断言

interface Cat {
  name: string;
  run(): void;
}

interface Finsh {
  name: string;
  swim(): void;
}

function getName(animal: Cat | Finsh) {
  if (typeof (animal as Finsh).swim === 'function') {
    return true;
  }
  return false;
}
```

### 断言的使用场景

#### 将一个父类断言为更加具体的子类

```ts
class ApiError extends Error {
  code: number = 0;
}

class HttpError extends Error {
  statusCode: number = 200;
}

function isApiError(error: Error) {
  if (typeof (error as ApiError) === 'number') {
    return true;
  }
  return false;
}
```

我们把`error`断言为更为具体的子类`ApiError`

#### 断言为 any 的场景

我们非常确定这段代码不会出错，比如下面这个例子

```ts
window.foo = 1;
// Property 'foo' does not exist on type 'Window & typeof globalThis'.
```

这时候，`window` 就可以断言为 `any`

```ts
(window as any).foo = 1;
```

注意： 将一个变量断言为 any 可以说是解决 TypeScript 中类型问题的最后一个手段。

它极有可能掩盖了真正的类型错误，所以如果不是非常确定，就不要使用 as any。

#### 将 any 断言为一个更为具体的类型

如果我们遇到有历史遗留的 any 类型，它的返回值为 any，那么我们在调用的时候，把它的返回值断言成为一个精确的类型，这样你后面的代码就很降低了维护的成本了。

```ts
function getKey(key: string): any {
  return (window as any).cache[key];
}

interface Cat {
  name: string;
  run(): void;
}

const tom = getKey('tom') as Cat;
tom.run();
```

上面的例子中，我们调用完 getKey 之后，立即将它断言为 Cat 类型。这样的话明确了 tom 的类型，后续对 tom 的访问时就有了代码补全，提高了代码的可维护性。

上面的这段代码还可以使用泛型进行改造

```ts
function getKey<T>(key: string): T {
  return (window as any).cache[key];
}

interface Cat {
  name: string;
  run(): void;
}

const tom = getKey<Cat>('tom');
tom.run();
```

通过给 getKey 函数添加了一个泛型 <T>，我们可以更加规范的实现对 getKey 返回值的约束，这也同时去除掉了代码中的 any，是最优的一个解决方案。

```ts

```

```ts

```

## 声明的合并

### 函数合并

```ts
function reverse(x: string): string;

function reverse(x: number): number;

// 下面是合并以后的写法
function reverse(x: number | string): number | string {
  if (typeof x === 'string') {...}
  else if(typeof x === 'number'){...}
}
```

### 接口的合并

```ts
interface Food {
  name: string;
}

interface Food {
  num: number;
}

interface Food {
  name: string;
  num: number;
}
```

> 注意，合并的属性的类型必须是唯一的,不然会报错的。

类的合并和接口的合并一致
