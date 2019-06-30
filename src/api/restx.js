const qs = require('querystring')
const _ = require('lodash')

const RequestTools = require('../request')

module.exports = class RestX {
  constructor(baseUrl) {
    if (!baseUrl || baseUrl.length == 0) {
      throw new Error('Unknown base url.')
    }
    this.baseUrl = baseUrl
    this.uri = baseUrl
    // todo 暂时只是默认的浏览器支持的request
    this.request = new RequestTools.BrowserRequest()
  }

  /**
   * 自定义资源
   * 
   * @param {*} path 
   * @param {*} obj 
   * @param {*} sep 
   * @param {*} eq 
   */
  custom(path, obj, sep = '&', eq = '=') {
    console.log(typeof (path))
    if (typeof (path) === 'string') {
      this.uri += `/${path}`
    } else {
      obj = path;
    }

    if (util.isNotEmpty(obj)) {
      this.uri += `?${qs.stringify(obj, sep, eq)}`
    }
    return this
  }

  /**
   * 获取一个资源
   */
  one(resource, ...subResource) {
    this.uri += `/${resource}`
    if (subResource != undefined && subResource.length != 0) {
      for (let sub of subResource) {
        this.uri += `/${sub}`
      }
    }
    return this
  }

  /**
   * 获取所有资源
   */
  all(resource) {
    this.uri += `/${resource}`
    return this
  }

  /**
   * 获取
   * 
   */
  url(recover = true) {
    let _url = this.uri.toString();
    this.uri = recover ? this.baseUrl : this.uri;
    return _url;
  }

  /**
   * TODO 发送get请求
   * todo: 加入params
   */
  async get(headers) {
    return await this.request.get(this.url(), headers)
  }

  /**
   * TODO 发送post请求
   */
  async post(params, headers) {
    return await this.request.post(this.url(), params, headers)
  }

  /**
   * TODO 发送put请求
   */
  async put() {
    return await this.request.put(this.url(), params, headers)
  }

  /**
   * TODO 发送delete请求
   */
  async delete() {
    return await this.request.delete(this.url(), params, headers)
  }

  /**
   * TODO 发送patch请求
   */
  async patch() {
    return await this.request.patch(this.url(), params, headers)
  }
}

const util = {
  isEmpty: function (obj) {
    return obj == undefined || _.keys(obj).length == 0
  },
  isNotEmpty: function (obj) {
    return !this.isEmpty(obj)
  }
}