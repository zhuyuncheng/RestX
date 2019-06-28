# RestX
针对Restful API 快速拼接URL，也支持常规URL的拼接，并且可以发送request请求

## Install

```bash
npm install restx
```

## Usage

```js
const RestX = require('rextx')
let api = new RestX('https://narwal.jd.com')

// https://narwal.jd.com/narwal/dbName/tableName/schema
api.all('narwal')
  .all('dbName')
  .one('tableName', 'schema')
  // .get(params)  // Send requests
  .url();

// https://narwal.jd.com/narwal?a=1&b=2&b=3&d=d1&d=d2
api.custom('narwal', {a: 1, b: 2, c: 3, d: ['d1', 'd2']})
  .url();
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
