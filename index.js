var uuid = require('node-uuid');
var property = process.argv[2];
console.log(`##teamcity[setParameter name='${property}' value='${uuid.v4()}']`);
