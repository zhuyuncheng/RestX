# RestX

针对Restful API 快速拼接URL，也支持常规URL的拼接，并且可以发送request请求

## Install

```bash
npm install node-restx
```

## Usage

```js
const RestX = require('node-restx')
let api = new RestX('https://github.com')

let res = api.all('zhuyuncheng')
  .all('RestX')
//  .get(params) // send request
  .url()
console.log(res)  // https://github.com/zhuyuncheng/RestX

let res = api.one('zhuyuncheng', 'RextX', 'find', 'master')
  .url()
console.log(res) // https://github.com/zhuyuncheng/RextX/find/master


let res = api.one('zhuyuncheng', 'RextX')
  .custom('search', {q: 'xxx', unscoped_q: 'xxx'})
  .url()
console.log(res) // https://github.com/zhuyuncheng/RextX/search?q=xxx&unscoped_q=xxx
```

## Todo List

- one(resource, id)：定位集合实体。
- all(resource)：获取指定资源子集合
- custom(name[, isRelative = true])：使用自定义网址定位子资源
- url(recover)：获取url地址, recover是否初始化，默认true
- delete([data[, params[, headers]]])：删除资源。返回响应的promise。
- get([params[, headers]])：获得一个资源。返回实体的承诺。
- patch([data [, params [, headers ]]] )：修补一名成员。返回响应的promise。
- post([data [, params [, headers ]]] )：创建一个成员。返回响应的promise。
- put([data [, params [, headers ]]] )：更新成员。返回响应的promise。
- head([params [, headers ]])：对成员执行HEAD请求。返回响应的promise。
- header(name, value)：添加标题。
- headers()：获取添加到资源的所有标题。

## MIT License

MIT License

Copyright (c) 2019 Zhu Yuncheng

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
