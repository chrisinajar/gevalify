# gevalify [![Build Status](https://travis-ci.org/chrisinajar/gevalify.svg?branch=master)](https://travis-ci.org/chrisinajar/gevalify) [![Dependency Status](https://david-dm.org/chrisinajar/gevalify.svg)](https://david-dm.org/chrisinajar/gevalify) [![devDependency Status](https://david-dm.org/chrisinajar/gevalify/dev-status.svg)](https://david-dm.org/chrisinajar/gevalify#info=devDependencies)
Turn an event on an EventEmitter into a [geval](https://npmjs.org/geval) event. This allows easy exposure of read-only events and seamless interaction with API's who expect geval style events.

## Installation

`npm install gevalify`

## Usage

```js
var Gevalify = require('gevalify');

var event = Gevalify(emitter, 'data');

// do stuff with event, probably expose publicly
var removeListener = event(handler);
```

# API
#### `Gevalify(emitter, eventName)` -> `listener`
Return a [geval](https://npmjs.org/geval) listener for the **emitter**'s **eventName** event.

##### emitter

*Required*  
Type: `EventEmitter`  

The event emitter to use for the event.

##### eventName

*Required*  
Type: `string`  

The string name of the event to listen on.

# Contributing

`npm run test`

# License
MIT
