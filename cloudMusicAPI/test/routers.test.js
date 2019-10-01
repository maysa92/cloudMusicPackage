
// test searching
var assert = require('assert')
var {createRequest} = require('../utils/util')

describe('test searching function', function () {
  it('the name captured should be identical to the one entered', function (done) {
    var s = '可不可以', stype = 1
    var data = 's=' + s + '&type=' + stype 
    
  createRequest('/api/search/pc/', 'POST', data)
    .then(result => {
      console.info(JSON.parse(result).result.songs[0].mp3Url)
      assert(JSON.parse(result).result.songs[0].name === '可不可以')
      done()
      })
      .catch(err => {done(err)})
  })
  it('Response Status Codes should be 200', function (done) {
    var s = '可不可以', stype = 1
    var data = 's=' + s + '&type=' + stype 
    
  createRequest('/api/search/pc/', 'POST', data)
    .then(result => {
      var rscode = JSON.parse(result).code
        console.log('code:' + rscode)
        assert(rscode == 200)
        done()
    })
    .catch(err => {done(err)})
  })
})


//test lyric fetching
describe('test lyric fetching', function () {
  it('should not be empty', function (done) {
    var music_id = 268547
    createRequest(
      '/api/song/lyric?os=osx&id=' + music_id + '&lv=-1&kv=-1&tv=-1', 'GET', null
    )
    .then(result => {
      assert.notEqual(result, null)
      done()
    })
    .catch(err => {
      done(err)
    })
  })
  it('should have lrc', function (done) {
    var music_id = 268547
    createRequest(
      '/api/song/lyric?os=osx&id=' + music_id + '&lv=-1&kv=-1&tv=-1','GET', null
    )
      .then(result => {
        assert(typeof JSON.parse(result).lrc !== 'undefined')
        done()
      })
      .catch(err => {
        done(err)
      })
  })
  
})

//test error handling
describe('test error handling', function () {
  it('should return message', function (done) {
      


    
      assert.equal(msg, '出错了！')
      done()
    })
    .catch(err => {
      done(err)
    })
  })