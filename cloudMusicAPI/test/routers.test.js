
// test the searching function
var assert = require('assert')
var {createRequest} = require('../utils/util')

describe('the searching function', function () {
  var s = '可不可以', stype = 1
  var data = 's=' + s + '&type=' + stype 
  // test if it connects successfully
  it('Response Status Codes should be 200', function (done) {
    createRequest('/api/search/pc/', 'POST', data)
    .then(result => {
      var rscode = JSON.parse(result).code
        console.log('code:' + rscode)
        assert(rscode == 200)
        done()
    })
    .catch(err => {done(err)})
  })
  // test if it catches info correctly
  it('the name captured should be identical to the one entered', function (done) {
    createRequest('/api/search/pc/', 'POST', data)
    .then(result => {
      console.info(JSON.parse(result).result.songs[0].mp3Url)
      assert(JSON.parse(result).result.songs[0].name === '可不可以')
      done()
      })
      .catch(err => {done(err)})
  })
})


// test the lyric fetching function
describe('the lyric fetching function', function () {
  var music_id = 268547
  // test if it fetches info
  it('should not be empty', function (done) {
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
  // test if it fetches the right info
  it('should have lrc', function (done) {
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


