const events = require("node:events");
const util = require('util');
var Person = function(name) {
    this.name = name;
}

util.inherits(Person, events)

// class Person extends events.EventEmitter{
//     constructor(name){
//         super();
//         this.name = name;
//     }
// }

var thuta = new Person("thuta");
var lara = new Person("lara");

var people = [thuta, lara];
people.forEach((p) => {
    p.on("speak", function ($message) {
        console.log(p.name + ' said ' + $message)
    })
})

thuta.emit("speak", "Hello Motherfucker")