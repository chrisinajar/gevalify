var Event = require('geval/event');

module.exports = Gevalify;

function Gevalify (emitter, eventName) {
  var event = Event();

  emitter.on(eventName, event.broadcast);

  return event.listen;
}
