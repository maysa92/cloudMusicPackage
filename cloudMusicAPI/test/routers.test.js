
// test searching
const crypto = require('crypto')
const assert = require('assert')
const { createRequest } = require('../utils/util')

describe('test searching function', function() {
  it('check if the name captured is identical to the one entered', function() {
    const s = '大海'
    const stype = 1
    const data =
      's=' + s  + '&type=' + stype + '&offset=0'
    
  createRequest('/api/search/pc/', 'POST', data)
  try {
  console.log(JSON.parse(result).result.songs[0].mp3Url)
  assert(JSON.parse(result).result.songs[0].name === '大海')
  done()
  }
  catch(err) { done(err) })
  })


//test lyric fetching
//test music url fetching
