var builder = require('../lib/builder');
var assert = require('assert');
var Helpers = require('./helpers/index.js');
var helper = new Helpers();

describe('SQL Builder', function(){
  before(function(done){
    helper.initDb(done);
  });
  it("loads", function(){
    assert(builder);
  });
  describe('loading sql', function(){
    it('returns a sql stirng', function(){
      var sql = builder.readSql();
      console.log(sql);
      assert(sql);
    });
  });
});
