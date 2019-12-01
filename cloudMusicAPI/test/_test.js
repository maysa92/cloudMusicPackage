
// test the song searching 
var assert = require('assert')
var crypto = require('crypto')
var {createRequest} = require('../utils/util')


describe('the song searching', function () {
  var s = '可不可以', stype = 1
  var data = 's=' + s + '&type=' + stype 
  // test if it connects successfully
  it('Response Status Codes should be 200', function (done) {
    createRequest('/api/search/pc/', 'POST', data)
    .then(result => {
      var rscode = JSON.parse(result).code
        assert(rscode == 200)
        done()
    })
    .catch(err => {done(err)})
  })
  // test if it catches info correctly
  it('the name captured should be identical to the one entered', function (done) {
    createRequest('/api/search/pc/', 'POST', data)
    .then(result => {
      var obj = JSON.parse(result).result.songs[0]
      assert(obj.name === '可不可以')
      done()
      })
      .catch(err => {done(err)})
  })
})


// test the lyrics fetching 
describe('the lyrics fetching', function () {
  var music_id = 268547
  // test if it fetches info
  it('should not be empty', function (done) {
    createRequest(
      '/api/song/lyric?os=osx&id=' + music_id + '&lv=-1&kv=-1&tv=-1', 'GET', null
    )
    .then(result => {
      var obj = JSON.parse(result).lrc
      assert.notEqual(obj, null)
      done()
    })
    .catch(err => {
      done(err)
    })
  })
  // test if it fetches the right info
  it('should have "lrc"', function (done) {
    createRequest(
      '/api/song/lyric?os=osx&id=' + music_id + '&lv=-1&kv=-1&tv=-1','GET', null
    )
      .then(result => {
        var obj = JSON.parse(result).lrc
        assert(typeof obj !== 'undefined')
        done()
      })
      .catch(err => {
        done(err)
      })
  })
  
})


