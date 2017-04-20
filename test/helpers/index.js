var Massive = require('massive');
var fs = require('fs');
var path = require('path');

var db = Massive.loadSync({ db : 'rocket-auth' });

module.exports = function(){
  var builder = require('../../lib/builder');
  var sql = builder.readSql();

  this.initDb = function(next){
    db.run(sql, function(err, result){
      if (err) {
        next(err, null);
      } else {
        next(null, result);
      };
    });
  };
};
