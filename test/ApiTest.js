const RestX = require('..')


describe('test.api', async () => {
  let api = null
  before(() => {
    api = new RestX('https://github.com/')
  })

  it('test.api.all', () => {
    let res = api.all('zhuyuncheng')
      .all('RestX')
      .url()
    console.log(res)
  })

  it('test.api.one', () => {
    let res = api.one('zhuyuncheng', 'RextX', 'find', 'master')
      .url()
    console.log(res)
  })

  it('test.api.custom', () => {
    let res = api.one('zhuyuncheng', 'RextX')
      .custom('search', {q: 'xxx', unscoped_q: 'xxx'})
      .url()
    console.log(res)
  })
})

