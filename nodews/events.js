let EventEmitter = require('events').EventEmitter;

const eventEmitter = new EventEmitter();

// listener
eventEmitter.on("task", (data) => {
    console.log("1:", data);
});

// listener
eventEmitter.on("task", (data) => {
    console.log("2:", data);
});


eventEmitter.emit("task", "sample data");
eventEmitter.emit("task", "working!!!");