// you can find out exapmles of uase commander here https://github.com/tj/commander.js/blob/master/examples/deploy

var program = require('commander');

program
  .command('build')
  .description('Build the SQL files for our project')
  .action(function(){
    console.log('Building now........');
  });

program
  .command('install [env]')
  .description('Build the SQL files for our project')
  .action(function(env){
    var target = env || "development";
    console.log('installing into...', target);
  });

program.parse(process.argv);
