var test = require('tape');
var gevalify = require('./index');
var partial = require('ap').partial;

test('gevalify', function (t) {
  t.plan(3);
  t.equal(typeof gevalify, 'function', 'module exposes function');

  var emitter = new (require('events'))();
  var dataEvent = gevalify(emitter, 'data');

  t.equal(typeof dataEvent, 'function', 'returns a function');

  var itWorked = 'it worked!';
  var removeListener = dataEvent(partial(t.equal, itWorked));

  emitter.emit('data', itWorked);
  removeListener();
  emitter.emit('data', itWorked);
});
