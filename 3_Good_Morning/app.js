const events = require('events')

const eventEmitter = new events.EventEmitter();

eventEmitter.on('alarm', () => {
	console.log('Wake up!!!');
})

eventEmitter.on('alarm', () => {
	console.log('Take a dump');
})

eventEmitter.on('alarm', (item) => {
	console.log(`And for breakfast have ${item}`);
	//eventEmitter.emit('alarm');
})

eventEmitter.emit('alarm', 'Smoothie!!!')