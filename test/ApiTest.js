const RestX = require('../src/api/restx')


describe('test.api', async () => {
  let api = null
  before(() => {
    api = new RestX('http://narwal.jd.com')
  })

  it('test.api.custom', () => {
    let res = api.all('narwal')
      .all('db')
      .one('tables', 'schema')
      .custom({ a: 1, b: 2 })
      .url()
    console.log(res)
  })

  it('test.api.one', () => {
    let res = api.all('narwal')
      .all('db')
      .one('tables')
      .url()
    console.log(res)
  })
})

