---
title: 金三银四进大厂 ｜一文搞懂Promise面试题（二）
date: 2022-02-17 10:58:48
permalink: /pages/752686/
sidebar: auto
categories:
  - 随笔
tags:
  - 
---
我正在参与[掘金创作者训练营第 4 期](https://juejin.cn/post/7064192649523101726 'https://juejin.cn/post/7064192649523101726')，点击了解活动详情，一起学习吧！

## 前言

上一篇文章我们已经对 Promise、 setTimeout、then、catch、finally 等相关的面试题，这一篇文章继续带领大家学习 ⬇️ 下面的知识。

**💡 过阅读本篇文章你可以学到：**

- ✅ Promise 中的 all 和 race
- ✅ async/await 的几道题
- ✅ 几道大厂的面试题

## 1.Promise 中的 all 和 race

在做题之前，先了解一下 all 和 race 是干嘛用的呢？

🏷️ .all()的作用是接收一组异步任务，然后并行执行异步任务，并且在所有异步操作执行完后才执行回调。

🏷️ .race()的作用也是接收一组异步任务，然后并行执行异步任务，只保留取第一个执行完成的异步操作的结果，其他的方法仍在执行，不过执行结果会被抛弃。

### 题 1-1

我们知道如果直接在脚本文件中定义一个 Promise，它构造函数的第一个参数是会立即执行的，就像这样：

```js
const p1 = new Promise((r) => console.log('立即打印'));
```

控制台中会立即打印出 “立即打印”。

因此为了控制它什么时候执行，我们可以用一个函数包裹着它，在需要它执行的时候，调用这个函数就可以了：

```js
function runP1() {
  const p1 = newPromise((r) => console.log('立即打印'));
  return p1;
}

runP1(); // 调用此函数时才执行
```

OK 👌， 让我们回归正题。

现在来构建这么一个函数：

```js
function runAsync (x) {
	const p = newPromise(r => setTimeout(() => r(x, console.log(x)), 1000))
	return p
}
```

该函数传入一个值x，然后间隔一秒后打印出这个x。

如果我用.all()来执行它会怎样呢？

```js
function runAsync (x) {
	const p = new Promise(r => setTimeout(() => r(x, console.log(x)), 1000))
	return p
}
Promise.all([runAsync(1), runAsync(2), runAsync(3)])
  .then(res =>console.log(res))
```

先来想想此段代码在浏览器中会如何执行？

没错，当你打开页面的时候，在间隔一秒后，控制台会同时打印出1, 2, 3，还有一个数组[1, 2, 3]。

```
1
2
3
[1, 2, 3]
```

所以你现在能理解这句话的意思了吗：有了all，你就可以并行执行多个异步操作，并且在一个回调中处理所有的返回数据。

.all()后面的.then()里的回调函数接收的就是所有异步操作的结果。

而且这个结果中数组的顺序和Promise.all()接收到的数组顺序一致！！！

> **使用场景** 有一个场景是很适合用这个的，一些游戏类的素材比较多的应用，打开网页时，预先加载需要用到的各种资源如图片、flash以及各种静态文件。所有的都加载完后，我们再进行页面的初始化。

### 题 1-2


我新增了一个runReject函数，它用来在1000 * x秒后reject一个错误。

同时.catch()函数能够捕获到.all()里最先的那个异常，并且只执行一次。

想想这道题会怎样执行呢 🤔️？

**题目**：

```js
function runAsync (x) {
  const p = new Promise(r => setTimeout(() => r(x, console.log(x)), 1000))
  return p
}
function runReject (x) {
  const p = new Promise((res, rej) => setTimeout(() => rej(`Error: ${x}`, console.log(x)), 1000 * x))
  return p
}
Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
  .then(res =>console.log(res))
  .catch(err =>console.log(err))

```

**执行结果**：

```js
1
3
// 2s后输出
2
Error: 2
// 4s后输出
4
```

.catch是会捕获最先的那个异常，在这道题目中最先的异常就是runReject(2)的结果。

另外，如果一组异步操作中有一个异常都不会进入.then()的第一个回调函数参数中。

注意，为什么不说是不进入.then()中呢 🤔️？

哈哈，大家别忘了.then()方法的第二个参数也是可以捕获错误的：


```js
Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
  .then(res =>console.log(res),
  err => console.log(err))
```

### 题 1-3

接下来让我们看看.race。

**题目**：

```js
function runAsync (x) {
  const p = newPromise(r => setTimeout(() => r(x, console.log(x)), 1000))
  return p
}
Promise.race([runAsync(1), runAsync(2), runAsync(3)])
  .then(res =>console.log('result: ', res))
  .catch(err =>console.log(err))
```

**执行结果**：

```js
1
'result: ' 1
2
3
```

> **使用场景** 这个race有什么用呢？使用场景还是很多的，比如我们可以用race给某个异步请求设置超时时间，并且在超时后执行相应的操作

### 题 1-4

**题目**：
```js
function runAsync(x) {
  const p = new Promise(r =>
    setTimeout(() => r(x, console.log(x)), 1000)
  );
  return p;
}
function runReject(x) {
  const p = new Promise((res, rej) =>
    setTimeout(() => rej(`Error: ${x}`, console.log(x)), 1000 * x)
  );
  return p;
}
Promise.race([runReject(0), runAsync(1), runAsync(2), runAsync(3)])
  .then(res =>console.log("result: ", res))
  .catch(err =>console.log(err));
```

**过程分析**：
遇到错误的话，也是一样的，在这道题中，runReject(0)最先执行完，所以进入了catch()中：

**执行结果**：

```
0
'Error: 0'
1
2
3
```

> **总结**
> - Promise.all()的作用是接收一组异步任务，然后并行执行异步任务，并且在所有异步操作执行完后才执行回调。
> - .race()的作用也是接收一组异步任务，然后并行执行异步任务，只保留取第一个执行完成的异步操作的结果，其他的方法仍在执行，不过执行结果会被抛弃。
> - Promise.all().then()结果中数组的顺序和Promise.all()接收到的数组顺序一致。

## 2.async await 处理错误

### 题目2-1

**题目**：
```js
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2");
}
async1();
console.log('start')
```

**过程分析**：

- 首先一进来是创建了两个函数的，我们先不看函数的创建位置，而是看它的调用位置
- 发现async1函数被调用了，然后去看看调用的内容
- 执行函数中的同步代码async1 start，之后碰到了await，它会阻塞async1后面代码的执行，因此会先去执行async2中的同步代码async2，然后跳出async1
- 跳出async1函数后，执行同步代码start
- 在一轮宏任务全部执行完之后，再来执行刚刚await后面的内容async1 end。

**执行结果**：

```
'async1 start'
'async2'
'start'
'async1 end'
```

### 题目2-2

现在将async结合定时器看看。

**题目**：
```js
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  setTimeout(() => {
    console.log('timer')
  }, 0)
  console.log("async2");
}
async1();
console.log("start")
```

**过程分析**：

定时器始终还是最后执行的，它被放到下一条宏任务的延迟队列中。

**执行结果**：

```
'async1 start'
'async2'
'start'
'async1 end'
'timer'
```

### 题目2-3

这里我们多加几个定时器看看

**题目**：

```js
asyncfunction async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
  setTimeout(() => {
    console.log('timer1')
  }, 0)
}
asyncfunction async2() {
  setTimeout(() => {
    console.log('timer2')
  }, 0)
  console.log("async2");
}
async1();
setTimeout(() => {
  console.log('timer3')
}, 0)
console.log("start")
```

**过程分析**：

定时器谁先执行，你只需要关注谁先被调用的以及延迟时间是多少，这道题中延迟时间都是0，所以只要关注谁先被调用的。。

**执行结果**：

```
'async1 start'
'async2'
'start'
'async1 end'
'timer2'
'timer3'
'timer1'
```

### 题目2-4

**题目**：
```js
async function async1 () {
  console.log('async1 start');
  await new Promise(resolve => {
    console.log('promise1')
  })
  console.log('async1 success');
  return'async1 end'
}
console.log('srcipt start')
async1().then(res =>console.log(res))
console.log('srcipt end')
```

**过程分析**：
在async1中await后面的Promise是没有返回值的，也就是它的状态始终是pending状态，因此相当于一直在await，await，await却始终没有响应...

所以在await之后的内容是不会执行的，也包括async1后面的 .then。

**执行结果**：

```
'script start'
'async1 start'
'promise1'
'script end'
```

### 题目2-5

**题目**：
```js
```

**过程分析**：

**执行结果**：

```
```

### 题目2-6

我们再来看一道头条曾经的面试题：

**题目**：
```js
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

console.log("script start");

setTimeout(function() {
  console.log("setTimeout");
}, 0);

async1();

new Promise(function(resolve) {
  console.log("promise1");
  resolve();
}).then(function() {
  console.log("promise2");
});
console.log('script end')
```

**过程分析**：

**执行结果**：

```
'script start'
'async1 start'
'async2'
'promise1'
'script end'
'async1 end'
'promise2'
'setTimeout'
```

(这道题最后async1 end和promise2的顺序其实在网上饱受争议，我这里使用浏览器Chrome V80，Node v12.16.1的执行结果都是上面这个答案)

### 题目2-7

在async中，如果 await后面的内容是一个异常或者错误的话，会怎样呢？

**题目**：
```js
async function async1 () {
  await async2();
  console.log('async1');
  return'async1 success'
}
async function async2 () {
  returnnewPromise((resolve, reject) => {
    console.log('async2')
    reject('error')
  })
}
async1().then(res =>console.log(res))
```

**过程分析**：

await后面跟着的是一个状态为rejected的promise。

如果在async函数中抛出了错误，则终止错误结果，不会继续向下执行。

**执行结果**：

```
'async2'
Uncaught (in promise) error
```

### 题目2-8


如果想要使得错误的地方不影响async函数后续的执行的话，可以使用try catch

**题目**：
```js
async function async1 () {
  try {
    awaitPromise.reject('error!!!')
  } catch(e) {
    console.log(e)
  }
  console.log('async1');
  return Promise.resolve('async1 success')
}
async1().then(res =>console.log(res))
console.log('script start')
```

**执行结果**：

```
'script start'
'error!!!'
'async1'
'async1 success'
```

## 3.综合题目


### 题目3-1


**题目**：
```js
const first = () =>(new Promise((resolve, reject) => {
    console.log(3);
    let p = new Promise((resolve, reject) => {
        console.log(7);
        setTimeout(() => {
            console.log(5);
            resolve(6);
          	console.log(p)
        }, 0)
        resolve(1);
    });
    resolve(2);
    p.then((arg) => {
        console.log(arg);
    });

}));

first().then((arg) => {
    console.log(arg);
});
console.log(4);
```

**过程分析**：

- 第一段代码定义的是一个函数，所以我们得看看它是在哪执行的，发现它在4之前，所以可以来看看first函数里面的内容了。(这一步有点类似于题目1.5)
- 函数first返回的是一个new Promise()，因此先执行里面的同步代码3
- 接着又遇到了一个new Promise()，直接执行里面的同步代码7
- 执行完7之后，在p中，遇到了一个定时器，先将它放到下一个宏任务队列里不管它，接着向下走
- 碰到了resolve(1)，这里就把p的状态改为了resolved，且返回值为1，不过这里也先不执行
- 跳出p，碰到了resolve(2)，这里的resolve(2)，表示的是把first函数返回的那个Promise的状态改了，也先不管它。
- 然后碰到了p.then，将它加入本次循环的微任务列表，等待执行
- 跳出first函数，遇到了first().then()，将它加入本次循环的微任务列表(p.then的后面执行)
- 然后执行同步代码4
- 本轮的同步代码全部执行完毕，查找微任务列表，发现p.then和first().then()，依次执行，打印出1和2
- 本轮任务执行完毕了，发现还有一个定时器没有跑完，接着执行这个定时器里的内容，执行同步代码5
- 然后又遇到了一个resolve(6)，它是放在p里的，但是p的状态在之前已经发生过改变了，因此这里就不会再改变，也就是说resolve(6)相- 当于没任何用处，因此打印出来的p为Promise{<resolved>: 1}。(这一步类似于题目3.1)

**执行结果**：

```
3
7
4
1
2
5
Promise{<resolved>: 1}
```


### 题目3-2


**题目**：
```js
const async1 = async () => {
  console.log('async1');
  setTimeout(() => {
    console.log('timer1')
  }, 2000)
  await new Promise(resolve => {
    console.log('promise1')
  })
  console.log('async1 end')
  return'async1 success'
}
console.log('script start');
async1().then(res =>console.log(res));
console.log('script end');
Promise.resolve(1)
  .then(2)
  .then(Promise.resolve(3))
  .catch(4)
  .then(res =>console.log(res))
setTimeout(() => {
  console.log('timer2')
}, 1000)
```

**过程分析**：

注意的知识点：

async函数中await的new Promise要是没有返回值的话则不执行后面的内容(类似题5.5)
.then函数中的参数期待的是函数，如果不是函数的话会发生穿透(类似题3.8 )
注意定时器的延迟时间

**执行结果**：

```
'script start'
'async1'
'promise1'
'script end'
1
'timer2'
'timer1'
```
## 4.几道大厂的面试题

### 题目4-1


**题目**： 使用Promise实现每隔1秒输出1,2,3

```js
const arr = [1, 2, 3]
arr.reduce((p, x) => {
  return p.then(() => {
    returnnewPromise(r => {
      setTimeout(() => r(console.log(x)), 1000)
    })
  })
}, Promise.resolve())
```
### 题目4-2 

**题目**： 实现mergePromise函数
```js
const time = (timer) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, timer)
  })
}
const ajax1 = () => time(2000).then(() => {
  console.log(1);
  return1
})
const ajax2 = () => time(1000).then(() => {
  console.log(2);
  return2
})
const ajax3 = () => time(1000).then(() => {
  console.log(3);
  return3
})

function merge Promise () {
  // 在这里写代码
}

merge Promise([ajax1, ajax2, ajax3]).then(data => {
  console.log("done");
  console.log(data); // data 为 [1, 2, 3]
});

// 要求分别输出
// 1
// 2
// 3
// done
// [1, 2, 3]
```

**解题思路**：

这道题有点类似于Promise.all()，不过.all()不需要管执行顺序，只需要并发执行就行了。但是这里需要等上一个执行完毕之后才能执行下一个。

解题思路：

定义一个数组data用于保存所有异步操作的结果
初始化一个const promise = Promise.resolve()，然后循环遍历数组，在promise后面添加执行ajax任务，同时要将添加的结果重新赋值到promise上。

**答案**：

```js
function mergePromise (ajaxArray) {
  // 存放每个ajax的结果
  const data = [];
  let promise = Promise.resolve();
  ajaxArray.forEach(ajax => {
  	// 第一次的then为了用来调用ajax
  	// 第二次的then是为了获取ajax的结果
    promise = promise.then(ajax).then(res => {
      data.push(res);
      return data; // 把每次的结果返回
    })
  })
  // 最后得到的promise它的值就是data
  return promise;
}

```



### 题目4-3


**题目**：封装一个异步加载图片的方法

```js
function loadImg(url) {
  returnnewPromise((resolve, reject) => {
    const img = new Image();
    img.onload = function() {
      console.log("一张图片加载完成");
      resolve(img);
    };
    img.onerror = function() {
    	reject(newError('Could not load image at' + url));
    };
    img.src = url;
  });

```

### 题目4-4


**题目**：限制异步操作的并发个数并尽可能快的完成全部

有8个图片资源的url，已经存储在数组urls中。

urls类似于`['https://image1.png', 'https://image2.png', ....]`

而且已经有一个函数`function loadImg`，输入一个url链接，返回一个Promise，该Promise在图片下载完成的时候resolve，下载失败则reject。

但有一个要求，任何时刻同时下载的链接数量不可以超过3个。

请写一段代码实现这个需求，要求尽可能快速地将所有图片下载完成。

```js
var urls = [
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting1.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting2.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting3.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting4.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting5.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn6.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn7.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn8.png",
];
function loadImg(url) {
  retur nnew Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function() {
      console.log("一张图片加载完成");
      resolve(img);
    };
    img.onerror = function() {
    	reject(newError('Could not load image at' + url));
    };
    img.src = url;
  });
```

**解题思路**

既然题目的要求是保证每次并发请求的数量为3，那么我们可以先请求urls中的前面三个(下标为0,1,2)，并且请求的时候使用Promise.race()来同时请求，三个中有一个先完成了(例如下标为1的图片)，我们就把这个当前数组中已经完成的那一项(第1项)换成还没有请求的那一项(urls中下标为3)。

直到urls已经遍历完了，然后将最后三个没有完成的请求(也就是状态没有改变的Promise)用Promise.all()来加载它们。


**答案**

```js
function limitLoad(urls, handler, limit) {
  let sequence = [].concat(urls); // 复制urls
  // 这一步是为了初始化 promises 这个"容器"
  let promises = sequence.splice(0, limit).map((url, index) => {
    return handler(url).then(() => {
      // 返回下标是为了知道数组中是哪一项最先完成
      return index;
    });
  });
  // 注意这里要将整个变量过程返回，这样得到的就是一个Promise，可以在外面链式调用
  return sequence
    .reduce((pCollect, url) => {
      return pCollect
        .then(() => {
          return Promise.race(promises); // 返回已经完成的下标
        })
        .then(fastestIndex => { // 获取到已经完成的下标
        	// 将"容器"内已经完成的那一项替换
          promises[fastestIndex] = handler(url).then(
            () => {
              return fastestIndex; // 要继续将这个下标返回，以便下一次变量
            }
          );
        })
        .catch(err => {
          console.error(err);
        });
    }, Promise.resolve()) // 初始化传入
    .then(() => { // 最后三个用.all来调用
      returnPromise.all(promises);
    });
}
limitLoad(urls, loadImg, 3)
  .then(res => {
    console.log("图片全部加载完毕");
    console.log(res);
  })
  .catch(err => {
    console.error(err);
  });
```

## 写在最后

> 朽木不雕难成才，知耻后勇凌云志。
> 我是**朽木白**，一个热爱分享的程序猿。如果觉得本文还不错，记得**点赞 ➕ 关注**，说不定哪天就用得上！您的鼓励是我坚持下去的最大动力 ❤️❤️❤️。


原文：https://mp.weixin.qq.com/s?__biz=MzU5NDM5MDg1Mw==&mid=2247484225&idx=1&sn=b1d26191a41b9a3961f6798d1218fd79&chksm=fe00b96bc977307d2eab27dbd25bf6d27194d7fcdd9d9515822639b0206ad6ca1f946a0de7a9&token=1408690735&lang=zh_CN#rd

原文：https://juejin.cn/post/6844904077537574919
