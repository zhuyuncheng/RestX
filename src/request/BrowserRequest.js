const _ = require('lodash')

module.exports = class BrowserRequest {
  constructor() {
    if (window.XMLHttpRequest) { // Mozilla, Safari...
      this.xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // IE
      try {
        this.xhr = new ActiveXObject('Msxml2.XMLHTTP');
      } catch (e) {
        try {
          this.xhr = new ActiveXObject('Microsoft.XMLHTTP');
        } catch (e) {
          console.error('Incompatible Browser. ==> ', e)
        }
      }
    }

    if (!this.xhr) {
      throw new Error('Unknown Requester.')
    }
  }

  async get(url, headers) {
    return await this.baseRequest(methods.GET, url, null, headers)
  }

  async post(url, params, headers) {
    return await this.baseRequest(methods.POST, url, params, headers)
  }

  async delete(url, params, headers) {
    return await this.baseRequest(methods.DELETE, url, params, headers)
  }

  async put(url, params, headers) {
    return await this.baseRequest(methods.PUT, url, params, headers);
  }

  async patch(url, params, headers) {
    return await this.baseRequest(methods.PATCH, url, params, headers);
  }

  async baseRequest(method, url, params, headers) {
    return new Promise((resolve, reject) => {
      this.xhr.open(method, url, true)
      this.xhr.onreadystatechange = () => {
        if (this.xhr.readyState === 4) {
          if ((this.xhr.status >= 200 && this.xhr.status < 300) || this.xhr.status == 304) {
            let response
            try {
              response = this.xhr.getResponseHeader('content-type').match(/application\/json/)
                ? JSON.parse(this.xhr.responseText)
                : this.xhr.responseText
            } catch (e) {
              reject(e)
            }
            if (response) {
              resolve(response, this.xhr.status, this.xhr)
            }
          } else {
            reject(this.xhr)
          }
        }
      }
      let finalHeaders = _.merge(headers, defaultHeaders)
      for (let key in finalHeaders) {
        this.xhr.setRequestHeader(key.toString(), finalHeaders[key])
      }
      this.xhr.send(params || null);
    })
  }
}

const methods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH'
}
const defaultHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}
