const crypto = require('crypto')
const assert = require('assert')
const { createRequest } = require('../utils/util')

describe('test searching function', () => {
  it('the name captured should be identical to the one entered', done => {
    const s = '大海'
    const stype = 1
    const limit = 30
    const data =
      's=' + s + '&limit=' + limit + '&type=' + stype + '&offset=0'
    
      createRequest('/api/search/pc/', 'POST', data)
      .then(result => {
        console.log(JSON.parse(result).result.songs[0].mp3Url)
        assert(JSON.parse(result).result.songs[0].name === '大海')
        done()
      })
      .catch(err => {
        done(err)
      })
  })
})