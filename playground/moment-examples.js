var moment = require('moment');

console.log(moment().format());

var now = moment();
var timestamp = now.unix();

console.log('Current timestamp: ' + timestamp);

var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('MMM D, YY @ H:mm a'));
console.log('current moment', currentMoment.format('MMMM Do, YYYY @ H:mm A'));
