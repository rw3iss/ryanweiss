#! /usr/bin/env node

var knex = require('knex')({
  client: 'pg',
  connection: {
    user: 'postgres',
    password: 'qazokm',
    host: 'localhost',
    port: 5433,
    database: 'tripora',
    ssl: false
  }
});

var args = process.argv.slice(2);
var arg = args[0] || '';
console.log("arg", args, arg);

if(arg == 'install') {
	console.log("installing");
	knex.schema.createTable('users', function (table) {
	  table.increments();
	  table.string('name');
	  table.timestamps();
	})
}

process.exit(1);