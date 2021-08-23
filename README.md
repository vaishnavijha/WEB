# WEB Technologies

Banuprakash C

Full Stack Architect,

Co-founder Lucida Technologies Pvt Ltd.,

Corporate Trainer,

Email: 

banu@lucidatechnologies.com; 

banuprakashc@yahoo.co.in

https://www.linkedin.com/in/banu-prakash-50416019/

GitHub: https://github.com/BanuPrakash/WEB

-------------------------------------------------------------
Softwares Required:
1) Chrome Web browser with following extensions
	1.1) add React Developer tools [ https://chrome.google.com/webstore/search/redux Search : react]
	1.2) add Redux DevTools [ https://chrome.google.com/webstore/search/redux Search : redux]
2) Visual Studio Code [ https://code.visualstudio.com/ ]
3) NodeJS Latest LTS [ https://nodejs.org/en/download/ ]

-------------------------------------------------------

Web application Development:

HTML ==> Document which is Hypermedia
CSS ==> Styling ==> Cascading Style Sheets
JavaScript ==> Dynamic ==> Interactive 

======================================

JavaScript: ==> 
Scripting language which is interpreted / Just In Time on JavaScript engine
loosely typed language ==> all variables are variant data types; at runtime based on literal value
assigned JS engine treats it as a particular type;
	x = "Raj"; // string
	x.toUpperCase();
	x = 52; // number
	x++;

	x = false; // boolean
	if(x) {}

	x = [5,2,611];
	x = null;

	x = function() {

	}

	x();

data types ==> number [ integer / float]; string [ '' or ""]; undefined; null; array; object; boolean; function

-----------

function add(x, y) {
	console.log(x + y);
}


add(4, 5); 
add("Hello", "World");

ret = add(4,5);

console.log(ret); // undefined

----------------

"var" is a keyword to declare a variable in JS

var name ="Smith";

use this in "js" to enforce that implict variables are not allowed

"use strict"; 

--------------
JS engines: V8, SpiderMonkey, Chakra, Nashorn, Continum

=====================================
myFirst.js

var g = 100;

function doTask() {
	var a = 10;
	if( g > 10 ) {
		var b = 20;
		c = 30;
	}
	console.log(g, a, b, c);
}

doTask();
console.log(g, a, b, c); // a and b are not visible

==========================================================================

function add(x, y) {
	return x + y;
}

var result = add(4,5); // 9

=============

function add(x, y) {
	return 
		x + y; // unreachable code
}

var result = add(4,5); // undefined

====================================
semi-colon insertion ==> return;

===========================================

functions are instances of Function which extends Object

function add(x, y) {
	return x + y;
}

same as :

var add = new Function("x", "y", "return x + y");

===========


var data = [6,3,1];

data[10] = 55; // works fine

data.push(55); // prefer

================================


OOP in JS

--------- 

1) Object

var obj = new Object();
// state
obj.id = 10; // instance variable
obj.name = "Peter"; // instance variable

// add behaviour
obj.getName = function() {
	return this.name;
}

obj.getName();

2) Function constructor pattern

function Person(id, name) {
	this.id = id;
	this.name = name;
}

Person(1,"Tim"); // inside the function "this" will be window

var p1 = new Person(1,"Tim");
var p2 = new Person(2, "Kim");

---------------------------------------------

adding behaviour using "prototype"

function Person(id, name) {
	this.id = id;
	this.name = name;
}

// instance methods
Person.prototype.getName = function() {
	return this.name;
}

Person.prototype.getId  = function() {
	return this.id;
}

var p1 = new Person(1,"Tim");
p1.getName(); // inside the function "this" refers to "p1"

p2.getName(); // inside the function "this" refers to "p2"

// class method; static members
Person.equals = function(p1, p2) {
	return p1.id === p2.id;
}

Person.equals(p1,p2); // true or false

getName() and getId() is one copy in heap area

=========================================

// instance methods ==> object owned instance methods

https://addyosmani.com/resources/essentialjsdesignpatterns/book/#constructorpatternjavascript


function Person(id, name) {
	this.id = id;
	this.name = name;

	this.getName = function() {
		return this.name;
	}

	this.getId = function() {
		return this.id;
	}
}

getName and getId are redefined for each of the new objects created using the Person constructor

var p1 = new Person(1,"Tim"); ==> it has its own copy of getName() and getId()
var p2 = new Person(2, "Kim"); ==> it has its own copy of getName() and getId()

========

3) JSON ==> JavaScript Object Notation ==> most popular way of representing the data [ carrier]
{}

var obj = {}; // singleton object

var obj = {
	"id": 1,
	"name": "Raja",
	"employed": true,
	"getName" : function() {
		return this.name;
	},
	"address": {
		"street": "some street",
		"pin": "1234566"
	}
}


JSON object can have any of these as values: number, string, undefined, null, array, function, object

====================================================

[
    {"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"},
    {"id":2,"name":"Onida","price":4444.44,"category" : "tv"},
    {"id":3,"name":"OnePlus 6","price":98444.44,"category" : "mobile"},
    {"id":4,"name":"HDMI connector","price":2444.00,"category" : "computer"},
    {"id":5,"name":"Samsung","price":68000.00,"category" : "tv"}
 ]

=========================

bind, call, apply [ for variable number of arguments ]

===============================================================

JavaScript Stack, event loop, callback queue and Web API

console.log("Hello");

setInterval(function timed() {
	console.log("time!!!")
}, 10);

$("#btn").click(function clicked() {
	console.log("clicked");
});

console.log("Bye");


===============================


OOP ==> tightly coupled to state of object
Account has "balance"; credit() and debit()


Functional Style of Programming
* functions which can be used on any type of objects
* treat functions as first class members [ same as primitive, object]
* High Order Functions 
	==> functions which accept other functions as arguments
	==> function which returns a function

--------------------------------

Example:

var data = [6,3,211,30];

for(var i = 0; i < data.length; i++) {
	console.log(data[i]);
}

for(var i = 0; i < data.length; i++) {
	alert(data[i]);
}


HOF: //OCP
// closed for change; open for extension
function forEach(elems, action) {
	for(var i = 0; i< elems.length; i++) {
		action(elems[i]);
	}
}


forEach(data, console.log);
forEach(data, alert);
forEach(data, writeToFile);

================================

filter, map, reduce


filter ==> subset
map ==> transform the data
reduce ==> aggregate [ sum, count, max, avg, ..] ==> Input is collection; ouput is single value [ number]

========================

* HOF: function return a function


pure function:

function greeting(msg, name) {
	return msg + " " + name;
}

console.log(greeting("Good morning", "Smith"));
console.log(greeting("Good morning", "Smitha"));
console.log(greeting("Good morning", "rita"));

--------
// closure

function greeting(msg) {
	return function (name) {
		return msg + " " + name;		
	}
}

var mg = greeting("Good morning");

console.log(mg("Rita"));
console.log(mg("Ria"));
console.log(mg("Priya"));


var gg = greeting("Hi");
console.log(gg("Ria"));

=========

Cache

getEmployee(3); ==> Make RESTful call to server ==> dB ==> convert to JSON ==> return json

getEmployee(5); ==> Make RESTful call to server ==> dB ==> convert to JSON ==> return json

getEmployee(3); ==> Avoid making API call; get from cache

========================================

JavaScript Module using IIFE signature ()();

var productModule = (function() {
	var total = 100;
	function task() {
		console.log(total)
	}
	function print() {
		task();
		console.log("....");
	}
	return {
		"print": print
	}
})();



var customerModule = (function() {
	var total = 999;
	function sample() {
		console.log(total)
	}
	function print() {
		sample();
		console.log("....");
	}
	return {
		"print": print
	}
})();



===============

ES 2016 / ES 6 version

ECMAScript ==> JavaScript version

ES 5 => almost most of the JS engines support 

https://caniuse.com/

TransCompiler / Transpiler to convert ES6+ to downward compatiblity

* Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript that can be run by older JavaScript engines

* Tracuer

-------

Features of ES2015 / ES6

1) Scope members
1.1) let
1.2) const


var g = 100;
const PI = 3.14159;

function doTask() {
	let a = 10; // same as "var"
	if( g > 10 ) {
		let b = 20; // block scope
		c = 30;
	}
	console.log(g, a, b, c); // b is not visible
}


2) Arrow functions

let add = (x,y) => {
	//code
	return x + y;
}

let add = (x, y) => x + y;


===========

var obj = {
	"name": "Raj",
	"task": function() {
		setTimeout(() => {
			console.log(this);
			console.log(this.name);
	  }, 100);
	}
}

obj.task();
{name: "Raj", task: ƒ}
Raj

=========


 
var obj = {
	"name": "Raj",
	"task": function() {
		setTimeout(function() {
			console.log(this);
			console.log(this.name);
	  }, 100);
	}
}

obj.task();

window
window.name

==============================

Arrow functions do not bind their own this, instead, they inherit the one from the parent scope, which is called "lexical scoping"




const myObject = {
 "data": "Hello",
  myMethod: () => {
    console.log(this);
  }
};

myObject.myMethod() 





const myObject = {
  "data": "Hello",
   myMethod: function() {
    console.log(this);
    console.log(this.data);
  }
};

myObject.myMethod() 


-------------

3) Destructuring array

var colors = ["red", "green", "blue", "orange", "pink"];

ES 5 way:

var r = colors[0];
var g = colors[1];

ES6 way:

var [r,g,b,...others] = colors;

others will be an array od "orange" and "pink"

4) Destructuring object


var p = {"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"}

ES 5 way:
console.log( p.name,  p.price);
or
console.log( p["name",  p["price"]);


ES 6 way: take the members into local variable

var {name, price} = p;
console.log(name, price);

or
var {name:n, price:amount} = p;
console.log(n, amount);

 
5) Clone wiht spread operator

var p = {"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"}

var ref= p; // reference
 
ref.name = "Pixel 2";

p.name will also be "Pixel 2"

CLone:

var clone = {...p}; // copy

clone.name = "Vivo 4"; // p is not getting changed


6) Template String literal [ tick ]

var name = "Harry";

var content = `
			<div>

				Hello ${name},
				Welcome to React
			</div>
		`



7) Promise API ==> Asynchronous code

	returns a future [ resolved output or rejected one]

	Synchronous methods:
	function doTask() {
		// synchronous code
	}

	let result = doTask(); // blocked call
	// lines below are blocked

	function doTask() {
		.. has promise api
	}

	doTask()
		.then( 
				(res) => code, 
				(rej) => code
		).catch(err) { console.log(err)}

	console.log("end!!"); // not blocked

=============

function doTask() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("task completed !!!!");
                }, 1000);
            });
        }

        doTask().then(
            (data) => console.log(data),
            (errInfo) => console.log("Boom :-(", errInfo)
        );

       console.log("end!!!");

=======================

https://cdn1.server/products
https://cdn2.server/products

  function doTask() {
            return new Promise((resolve, reject) => {
                api call to "https://cdn1.server/products" return result if SC is 200
                SC is 404 return reject
            });
        }

=========


8) async and await

9) Generator functions return multiple values over a period of time

function* mySaga() {
	console.log("task 1");
	console.log("task 2");
	console.log("task 3");
	
	yield "first value";

	console.log("task 4");
	console.log("task 5");

	yield 100;

	console.log("task 6");
	yield ":-)";
}


let ref = mySaga();

ref.next();
ref.next();
ref.next();

==============

10) ES 6 module system, class ==> topic along with "webpack"

===================================

11) Default parameters 

let add = (x = 0, y = 0, z = 0) => {
	return x + y + z;
}

add();
add(4);
add(6,7);
add(2,5,1);

===========================================

Bootstrap CSS Library https://getbootstrap.com/
* container
* row
* col-md col-lg
* card
* navbar

=============================

  <script
  src="https://code.jquery.com/jquery-2.2.4.min.js"
  integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
  crossorigin="anonymous"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

  ====================================================

  Day 2

  IIFE ==> Immediately Invoke Function Expression

Engine loads and executes:

  (function() {
  	// code
  })();

 IIFE is genrally used to define a module in JavaScript. Module is a collection of state and behaviours
 without bringing in the concept of object

CartModule ==> cart[], addToCart(), removeFromCart(), getTotal(), checkout(), doTask()

ProductModule ==> products[], getProduct(), getProduct(id), addProduct(), removeProduct(), doTask()

(function() {

})();


var productModule = (function() {
	var data = "some data";

	function someTask() {
		console.log("some task ", data);
		somePrivateTask();
	}

	function somePrivateTask() {
		console.log("some another task ", data);
	}

	return {
		someTask
	}
})();

productModule.someTask(); 

=====

var customerModule = (function() {
	var data = 100;
	function print() {
		console.log("print ", data);
	}

	function someTask() {
		console.log("CM some task ", data);
	}

	function Customer(id, name, age) {
		this.id = id;
		this.name = name;
		this.age = age;
	}

	function Address(street, city) {
		this.street = street;
		this.city = city
	}

	return {
		print,
		Customer,
		Address
	}
})();

customerModule.print();

======================================
Promise ==> Asynchronous == returns resolved data or rejected data [ single time return value]

ES6 Generator: to return multiple values / @ different stages 
Aggregator function ==> combination of relevant tasks to be done. 
Transaction function ==> getbalance, credit, debit, send SMS, ...

// make a call to RESTful Server

function* generatorFn() {
	yield "REQUEST_PENDING"
	// make a call to get movie
	yield movieData;

	// make a call to get actor information
	yield actorInfo;
}


var iter = generatorFn();

iter.next(); // "REQUEST_PENDING"
// i will display HourGlass image

iter.next(); // movieData;


iter.next(); // actorInfo


============

function* someGen() {
	console.log("task 1");
	console.log("task 2");
	yield "first stage";

	console.log("task 3");
	yield 100;
	console.log("task 4");

	yield "Bye!!"
}

var iter = someGen();

iter.next();
iter.next();

===========

TypeScript ==> concept of strongly typed into JS

ES6, ES 7, Dart, TypeScript, CoffeeScript used in development environment ==> transcompiler ==> ES5

Babel for Es6+ to ES5
TSC for Typescript to ES5

data types of Typescript:

1) Number

var data:number = 100;

data = "Tim"; // Error

2) String

var name:string = "Gopal";

3) Boolean

var flag:boolean = true;

4) enum

enum PRIORITY {
	LOW, MED, HIGH
}

let taskPriority:PRIORITY = PRIORITY.HIGH;


5) interface
	5.1) interface as a shape

	interface Person {
		id: number,
		firstName: string,
		address?:string
	}

	function addPerson(p:Person): void {
		//
	}

	addPerson({"id": 12, "firstName": "Yanni"}); // valid

	addPerson({"id": 12, "firstName": "Yanni", "address" : "some street"});

	addPerson({firstName": "Yanni"}); // error

	5.2) interface as a contract, realization relationship

	interface Flyable {
		fly():void;
	}

	class Bird implements Flyable {
		// any code
		fly() : void {
			// code
		}
	}

	class AeroPlane implements Flyable {
		// any code
		fly(): void {
			// code
		}
	}

6) class

	class Person {
		private id:number;
		private name:string;

		constructor(id, name) {
			this.id = id;
			this.name = name;
		}


		getName(): string {
			return this.name;
		}

		getId(): number {
			return this.id;
		}

	}

	let p1 = new Person(44,"Tim");
	p1.getName();
	p1.name; // error

	===

	class Person {
		constructor(private id:number, public name:string) { }
		getName(): string {
			return this.name;
		}

		getId(): number {
			return this.id;
		}
	}

7) Decorators ==> built using HOF [ function returning a function ]

@Component({

})
class MyComponent{

}

=============================================================


Day 2:

Document Object Model ==> W3C

DOM ==> language independent way of representing HTML / XML in the form of object tree
used by the engine to manage

Access elements using DOM:
1) using element ID
	<div id="someId">..</div>

	let elem = document.getElementById("someId");

2) using  tag Name
	let elems = document.getElementsByTagName("div")

3) using querySelector	

	let elem = document.querySelector(id/class/tagname/attribute)

	let elems = document.querySelectorAll(id/class/tagname/attribute)


	let elems = document.querySelectorAll(".hero-item-detail"); // by class

	let elem = document.querySelector("#myheader"); // by id

	let elems = document.querySelectorAll("div")

	let elems = document.querySelectorAll("input[type='text']")

	let elems = document.querySelectorAll("[width='100px']")

	<img src="" width='100px' />

	<input type="text" />

===========

DOM to create element:

createElement("div"); ==> <div></div>

createElement("table"); ==> <table></table>

==============

DOM events:
	
Event Handling: Source generates a event; we need to have listeners listening to event and perform actions based on event

=====================

jQuery == JS Library

$("div") ==> get divs

$("<div>") ==> create div element

=========

AJAX - The XMLHttpRequest Object

jQuery simplifies using XMLHttpRequest Object to make ajax call

============

$.ajax() vs $.getJSON()

==============================

 setInterval(function test() {

 }, 100);

 setInterval( () => {

 }, 100);



 $.getJSON("https://jsonplaceholder.typicode.com/users", function callback(data) {})

 $.getJSON("https://jsonplaceholder.typicode.com/users",  (data) => {})

==========================================


let btn = $("<button/>");
btn.addClass(..)
btn.on("click", () => {});

================================================

Backbone Framework ==> jQuery
Web application develpment is still using jQuery
Most of the frameworks are built on top of this
REACT application ==> can jQuery

==================================================

$("#info").on("click", function() { $(this).fadeOut()});

$("#info").on("click", function() { $(this).fadeOut(1000)});

======================



$(".btn:first").on("click", function () { $(this).parent().parent().fadeOut(2000)})

$(".btn").first().on("click", function () { $(this).parent().parent().fadeOut(2000)})

=============================================================


Node JS

-----------

NodeJs is a platform with V8 engine + built-in modules + libuv libraries 

Why do we need NodeJS?
* platform for developing client side web applications
 1) Environemnt to convert TypeScript/ ES6,7 / Dart / CoffeeScript to ES5
 2) Static code analysis ==> Linting
 3) We need to bundle our code
 	 we develop applications using many files/modules [ 60-100 js files]
 	 4 extra network calls for below scripts:

 	 <script src="a.js"></script>
 	 <script src="b.js"></script>
 	 <script src="c.js"></script>
 	 <script src="d.js"></script>

*  .js ==> add into "bundle.js"

	index.html
	<script src="bundle.js"></script>

4) Testing ==> Unit Testing / E2E Testing

* to build APIs
	1) RESTful Web Services => Express / GraphQL ==> Apollo
	2) Real time streaming of data ==> like OTT Netflix / Amazon Prime [ All are Stream based async code]
	3) Real time application [ Chatbot / Admin Dashboard]

=======
NodeJS is bad for CPU intense operations and RDBMS interaction or blocking API

============================

NodeJS comes with many pre-defined modules: fs, http, crypto, url, repl, cluster,...

Module System: IIFE, CommonJS , AMD , ES6

Node JS uses CommonJS module system; each file it treats as module

math.js

module.exports.add = function() { ...}
module.exports.sub = function() { ...}
let mul = function() { ...}


main.js

let add = require("./math").add;
let sub = require("./math").sub;

==============================

look into "fs", "http"
creating nodejs project, npm

===========

Instead of Web API ==>  Libuv in NodeJS


=================================

Events ==> data, end, err

====================================

NodeJS project

NPM / YARN ==> node package manager
* manage depedencies npmjs.org
* get dependecises
* publish dependencies
* Run scripts

* like PIP or Maven/Gradle

use https://snyk.io/ to check vulnarabilities of modules 


========
1) To initialize a node project
myapp> npm init --y

npm i -D mocha chai request

 "mocha": "^9.0.3",

 Mocha is a unit testing framework for JS / alternatives are "Jasmine" or "Jest"

 Chai ==> assertion library [ https://www.chaijs.com/]

 ==> testing AAA
 Assemble Action Assert

 TCER ==> excel sheet
===

2) github ==> push project minus "node_modules"

Other team members will execute:

$ npm i

  "mocha": "9.0.3", ==> download 9.0.3 version of mocha
  "mocha": "^9.0.3" ==> download 9.0.3 version or higher if available of mocha
  "mocha": "~9.0.3" ==> download 9.0.3 version or any sub-versions higher if available of mocha [ 9.1.4 is ok]

==========

// http://localhost:3000/add?x=20&y=15
// http://localhost:3000/sub?x=20&y=15

/ is pathparameter
	example==> add or sub

?queryparameter
	x and y 

===========

Testing  and WebPack and React Intro

===========================


Day 3

-------

function doTask() {
	loop compute data
	return data;
}

let res = doTask(); // pushed on stack; statemetns below this will have to wait until the function returns

-----


task().then(
	function(data) { ... to handle resolve data},
	function(rejecteddata) { ... to handle rejected data}
).catch( (err) = > ...)



task().then(
	function(data) { ... to handle resolve data}
).catch( (err) = > ...)


task().then(
	function(data) { ... to handle resolve data}
);

fetch(url).then( data => console.log(data));

Any code below the statement is free to execute; not blocked

---------

Alternate ==> async and await ==> to avoid nested callbacks of promise

fetch(url)
	.then(response => response.json())
	.then(jsondata => task3(jsondata))
	.then(associatedData = >..)


async function task() {
	try {
		let res = await fetch(url); // will be blocked until Promise aPI resolves and returns ; res is resolved data
		let computedData = await task2(res); // will be blocked until task2 resolves 
		use computedData;
 	} catch(ex) {
 			// rejected block of code
	}
}

task().then(...)

lines below are free to execute


-------------------------------------------------------

Node.js ==> platform/environment with v8 engine + libuv helper api [thread pool async helpers] + built-in modules

* common built-in modules of node.js ==> fs, http, url, crypto, events, repl, cluster, ...

* fs module allows handleing "filesystem" in "synchronous way", "callback async mode" and "stream based ==> events"


events.EventEmitter

==> event will have a source and many listeners
* Button is an source for "click" event
* drop-down is a source for "change" event

* create a event

const LOGEvent = new EventEmitter();


* Listener 1:

LOGEvent.on("WARN", (msg) => console.log("WARN:" , msg));

LOGEvent.on("DEBUG", (msg) => console.log("DEBUG:" , msg));

LOGEvent.on("INFO", (msg) => console.log("INFO:" , msg));


* Listener 2:

LOGEvent.on("DEBUG", (msg) => alert("DEBUG:" , msg));


* Source 1

LOGEvent.emit("DEBUG", "entered into doTask() function");

* Source 2

LOGEvent.emit("WARN", "Your trial period expires in few days!!");


=================================

Node.js project structure ==> "node_modules", "package.json" 

ab -c 100 -n 1000 http://localhost:3000/

==================================================

ServerSocket ==> listens to incoming requests ==> 3000

every client request ==> Socket ==> any port between 1024 > 65535 

computed data ==> callbackQueue ==> Event loop takes from callback queue ==> stack

==================================================

Testing

Unit Testing Framework: Jasmine, JEST and Mocha
Mocha 

Assertion Libraries: Hamcrest, Chai, JEST, Jasmine
chai

Default: runs all files in "test" folder

mocha file.js


function sample(fn) {
	// code
  
	return fn();
}

=======================



JS Build tools: Grunt, Gulp, Webpack


Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, uglify, compilation, unit testing, and linting


webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling,



minification ==> remove all empty white spaces

function add(x,y) {
	return x + y;
}

==> function add(x,y){return x+y;}

Uglify:

function Product(id, firstName) {...}

==> function P(id,f){..}

===============

Webpack:

Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling

Default bundler comining with Scaffolding code genereators for Angular/ React/ Vue

===========

Webpack Steps:

1) create a folder "webpackexample"
2) in "webpackexample" folder> npm init --y
3) npm i webpack webpack-cli -D
4) npm i webpack-dev-server -D

5) md src
index.js

"scripts" : {
	"dev": "webpack --mode development"
}

npm run dev

[ note: any scripts other than "test" and "start" ==> npm run "nameof script" ;  npm start; npm test;
npm run dev]

creates "dist/main.js"


6) npm i html-webpack-plugin -D

This is a webpack plugin that simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation. 

index.html
<script src="..."> </script>
<script src="..."> </script>
<script src="..."> </script>


bundle.js
vendors.js
chunk-34342224.js

--

7) create src/index.html

8) customize in "webpack.config.js"
Usually your projects will need to extend this functionality, for this you can create a webpack.config.js file in the root folder and webpack will automatically use it.


const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    plugins: [
      new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "src", "index.html")
      })
    ]
  }


 npm run prod
 or
 npm run dev

 in "dist/index.html" ==> scripts are included by "html-webpack-plugin"

 ===================

9) npm i css-loader style-loader -D
	
	css-loader can load css which are included as module

	import "./style.scss";

	require("styles.css")

	css-loader ==> sass-loader

	style.scss
	$body-color: red;
	body {
  	color: $body-color;
	}

	style-loader ==> Automatically injects styles into the DOM using one <style></style>


	html

	<style>
			body {
				background-color: 'red'
			}

	</style>

	<link rel="stylesheet" href="style.css" > leads to extra network call



REGEX:  https://javascript.info/regular-expressions

 test: /\.css$/, ==> any file ending with "css"

 $ ==> endswith
 ^ ==> beginsWith
 


 10) ES 6 in my code:

 npm i @babel/core babel-loader @babel/preset-env -D

babel.config.json:
{
    "presets": ["@babel/preset-env"]
}

or

{
  "presets": ["@babel/preset-react"]
}


ES 6 Module System:
export default class Person {

use it:

import Person from "./Person";

===

export const add = (x, y) => x + y;

export const sub = (x, y) => x - y;

use it: 
import {add, sub} from './math';


-------------

webpack.config.js
babel.config.json
Person.js
math.js
index.js

// output in browser console ==> dist/index.html

npm run dev
npm run prod

---------------
const data =[  
   {  
      "name":"Baked Salmon",
      "ingredients":[  
         {  
            "name":"Salmon",
            "amount":1,
            "measurement":"l lb"
         },
         {  
            "name":"Pine Nuts",
            "amount":1,
            "measurement":"cup"
         },
         {  
            "name":"Butter Lettuce",
            "amount":2,
            "measurement":"cups"
         },
         {  
            "name":"Yellow Squash",
            "amount":1,
            "measurement":"med"
         },
         {  
            "name":"Olive Oil",
            "amount":0.5,
            "measurement":"cup"
         },
         {  
            "name":"Garlic",
            "amount":3,
            "measurement":"cloves"
         }
      ],
      "steps":[  
         "Preheat the oven to 350 degrees.",
         "Spread the olive oil around a glass baking dish.",
         "Add the salmon, garlic, and pine nuts to the dish.",
         "Bake for 15 minutes.",
         "Add the yellow squash and put back in the oven for 30 mins.",
         "Remove from oven and let cool for 15 minutes. Add the lettuce and serve."
      ]
   },
   {  
      "name":"Fish Tacos",
      "ingredients":[  
         {  
            "name":"Whitefish",
            "amount":1,
            "measurement":"l lb"
         },
         {  
            "name":"Cheese",
            "amount":1,
            "measurement":"cup"
         },
         {  
            "name":"Iceberg Lettuce",
            "amount":2,
            "measurement":"cups"
         },
         {  
            "name":"Tomatoes",
            "amount":2,
            "measurement":"large"
         },
         {  
            "name":"Tortillas",
            "amount":3,
            "measurement":"med"
         }
      ],
      "steps":[  
         "Cook the fish on the grill until hot.",
         "Place the fish on the 3 tortillas.",
         "Top them with lettuce, tomatoes, and cheese."
      ]
   }
];

==========


Webpack ==> Module bundler

-------


webpack.config.js

entry,
output
module rules to use different loaders like "babel", "typescript", "sass-loader", "css-loader"
BABEL ==> ES6+ and REACT
plugins

===
Optimization:
https://webpack.js.org/plugins/split-chunks-plugin/


AMD ==> Asynchronous Module Definition

webpack.config.js

 optimization : {
        splitChunks: {chunks: "all", name :"vendor"}
 },


Create a seperate chunk for files imported from "node_module";

any module above 30kb it starts creating seperate chunk

import React from 'react';

also helps in Lazy loading of modules [ load only if required]

=======================

Core Web Vital ==> FCP

=======================================================================================


npm i lodash

index.js

import _ from 'lodash';

console.log(_.join(["Hello", " ", "Webpack" ]));



npm start

http://localhost:9000

==============================

https://createapp.dev/

set up "typescript"; download-project
extract the "zip"; within the folder ==> npm install


use this to write simple "ts" examples and test it out

Example:

Product.ts
export default interface Product {
	id:number,
	name:string,
	qty?:number
}


Sample.ts

import Product from './Product';

export default addProduct = function(p:Product) {
	console.log(p.name, p.id);
}


/src/index.ts

import {addProduct} from './Sample';

addProduct({"id": 1, "name": "iPhone"});

==========================================================

splitChunks: {chunks: "all", name :"vendor"}

define(['jquery'] , function ($) {
    return function () {};
});

 
=================
import 'acomponent'; // eagerly loaded

lazy(() => import('./OtherComponent'));

if i use "OtherComponent" then only OtherComponent will be loaded into browser

if(condition){ 
	use OtherComponent
}

==================

React Library:

View Library => front-end JavaScript library for building user interfaces or UI components.


===========
website:

Client Side Rendering:
Templates like jQuery templates, underscore templates, Mustache, Handlebars,...

HTML

HTML + JS ==> DHTML

HTML + JS + CSS ==> DHTML with styling

HTML +JS + CSS + XMLHttpRequest [AJAX] ==> Partial page reload

HTML +JS + CSS + XMLHttpRequest [AJAX] + templates ==> simplfied DOM creation

<div class="card">
	<div class="card-header">
			{{customer.firstName}} 			{{customer.lastName}}
	</div>
	<div class="card-body">
			<img src={{customer.avatar}} />
	</div>
</div>

=======
Web application:
RWD ==> Responsive Web Design ==> Bootstrap, Bulma , Zurb

Single Page Application ==> SPA 

* will have a single "index.html"
* many templates; templates per view ==> mobile, tv, cart, customer, payments
* index.html has a placeholder where these templates has to rendered based on user request
* Application started to have many modules and dependency between modules ==> Dependency Injection
* Optimize rendering of pages; avoid direct DOM handling
* Routes
	Different URIs should display different views:

	http://amazon.com/mobiles
	http://amazon.com/mobiles/iPhone12
	http://amazon.com/mobiles/Pixel2
	http://amazon.com/tvs/smart
	http://amazon.com/tvs/samusng
	http://amazon.com/orders/banu@gmail.com/

 Why Routers
 	1) SEO
 	2) Bookmark ==> send this mark to your friends
 	3) History API [ https://developer.mozilla.org/en-US/docs/Web/API/History_API ]
 		Navigate between views
 	4) Secure your routes	
 			below link is accessable after login
 			http://amazon.com/orders/banu@gmail.com/
* Data binding

=================

JS Framework or library
* Angular [ Google ] ==> Complete solution for web application development ==> MVC pattern [ Model View Controller]
* React [ Facebook ] ==> just View Library; dependens on 3rd party libaries for anything other than view

============================

React

https://codepen.io/	

HTML:
<div id="root"></div>

JS ==> Pen Settings:
1) JavaScript Preprocessor ==> Babel [ Babel includes JSX processing. ]

2) Add external libraries:
	2.1) react
	https://cdnjs.cloudflare.com/ajax/libs/react/17.0.2/umd/react.production.min.js
	
	2.2) react-dom
	https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js

3) Editor Behaviour:
	Auto Save: off
	Auto Preview: off

React elements:

let Welcome = React.createElement("h1", {style:{'color':'red'}}, "Welcome to React development");

console.log(Welcome);
ReactDOM.render(Welcome, document.getElementById("root"))

<div id="root">
	<h1 style="...">Welcome to React development</h1>
</div>	

================

* createElement
* functional components
* class components

======================

function Welcome() {
  return <div>
          <h1>
             Welcome to React Development 
          </h1>
        </div>
}

console.log(Welcome)
ReactDOM.render(<Welcome/>, document.getElementById("root"))

React.createElement("div", null, React.createElement("h1", null, "Welcome to React Development"));

Welcome is a functional component: is using JSX ==> JavaScript + XML

Babel ==> knows JSX

====================
* props
* parent passes dato to child
Pass data to Functional components

function Welcome(props) {
  return <div>
       		<h1>
          		{props.msg} at {props.where}
         </h1>
    </div>
}
console.log(Welcome)
// console.log(Welcome())
ReactDOM.render(<Welcome msg="Welcome to React dev" where="Virtual"/>, document.getElementById("root"))

Interpolation:
	{props.msg} at {props.where}

=======================


Day 4

math.js

export  const add = ..
export  const sub = ..
export  const multiply = ..


other.js

import {add,sub} from './math'; // destructuring

===

export default const add = ...

other.js
import  add  from './math'; // optimized ==> just load add / imports

import * as math from './math'

	math.add()
	math.sub()

React

* React.createElement() ==> Virtual DOM ==> JSON object in memory

React Renderer ==> react-dom ==> Reconcillation ==> VDOM ==> DOM; react-native, react-360, ..


=================

React 17 ==> Concurrency ==> Fiber [ Thread] 
https://raphamorim.io/understanding-react-fiber-incremental-rendering-feature/

==========================


fs.readFile("a.txt", (err,body) {

});

========================================================

class Product {
	construtor(id, name) {
		this.id = id;
		this.name = name;
	}

	getName() {
		return this.name;
	}
}

class Mobile extends Product {
	constructor(id, name, connectivity) {
		super(id,name);
		this.connectivity = connectivity;
	}

	getConnectivity() {
		return this.connectivity;
	}
}

let m = new Mobile(3,"Pixel", "4G");

m.getName();
m.getConnctivity();

======================================================


* React functional components

function Product() {
	return JSX
}

* props ==> properties ==> data passed from parent to child

function Product(props) {
	return <h1>
				{props.name} costs {props.price}
		</h1>
}

<Product name="iPhone" price="89000" /> ==> internally creates React.createElement

ReactDOM.render<Product name="iPhone" price="89000" />, document.getElementById("root"));

============

function Product({name, price}) {
	return <h1>
				{name} costs {price}
		</h1>
}

================================================


<div class="card">
	<p>Hello</p>
	<h1>df</h1>
</div>

const products = [{"name":"iPhone", "price": 73442 }, {"name":"Sony", "price" : 98000}];

function ProductRow(props) {
  return <h3>
      {props.product.name}, {props.product.price}
   </h3>
}

function ProductList(props) {
  return <div>
      {
      props.products.map(p => <ProductRow product={p} />)
    }
    </div>
}

ReactDOM.render(<ProductList products = {products} />, document.getElementById("root"));


=========================

npx create-react-app customerapp

npm ==> node package manager ==> installs node modules in "node_modules" folder

npm i -g ==> installs node modules in global folder =="users/AppData/Roaming/npm/"

npx ==> load module in memory and execute

create-react-app ==> creating a scaffolding code for react application

==> dependencies are downloaded, package.json is configured, internally it uses "webpack", default component

If not with "create-react-app"
* npm init --y
* npm i all dependecies
* configure webpack.config.json ==> to use babel and babel-react present
* ...

=======================

* React.createElement
* React functional components
* React class components ==> state and behaviour 
 ===> Button ==> state => color, caption, size; behaviour ==> click, mousemove, mousehover

// inherit from Component
class Welcome extends React.Component {
	// instance variables
	// methods 

	constructor(props) {
		super(props)
	}

	render() {
			let {msg, where} = this.props;
			return (
					<div>
							<h1> {msg} @ {where}
					</div>
			)
	}
}

ReactDOM.render(<Welcome msg="Welcome to React dev" where="Virtual"/>, document.getElementById("root"))


what is returned from render() gets converted to React.createElement() same as what's returned from a function


Note:
returned JSX from render() or function() should have a root element

below code fails:
return <h1>
				</h1>
				<div>
				</div>

https://reactjs.org/docs/faq-functions.html

===========================================

1)  "start": "react-scripts start",
* BABEL compilation, JSX ==> JS
* Bundle ==> bundle.js, vendor.js, ..
starts webpack-dev-server in "watch" mode
* deploys or loads these files on server

2) npm run eject
	==> breaks down into webpack.config.js ==> .babelrc


3) npm build
	bundle files are deployed on servers like Apache/Jetty/Tomcat/GlassFish/IIS/..


==============================================

In React we use className for css "class"

class Welcome extends Component {}

=============


export default class CustomerRow extends Component {
    render() {
        let {id,firstName, lastName} = this.props.customer;
        return (
            <div className="row">
                    {firstName} &nbsp; {lastName}  &nbsp;
                    <button type="button" onClick={this.deleteRow.bind(this, id)}>Delete</button>
            </div>
        )
    }

    deleteRow(id) {
        console.log("Customer row delete", id);
    }
}

1)  PREFER:

<button type="button" onClick={this.deleteRow.bind(this, id)}>Delete</button>

2)  AVOID:

<button type="button" onClick={() => this.deleteRow(id)}>Delete</button>

==========================================================================================

Component has props ==> currentProps and prevProps are same

State and Props

props ==> way to pass data from parent to child
state ==> internal represention of a particular component

==============================================

Testing

-------
E2E testing ==> Selenium / Cypress

Unit Testing ==> JEST / Jasmine / Mocha

RTL ==> React Testing Library is a Wrapper on top of JEST ==> additional assertion apis to testing components


getByXXX() ==> returns null if not found
queryByXXX() ==> throws exception if not found

findByXXX() ==> Promise API ==> Component gets created evnetually based on side effect ==> API ==> getting creating asyc

document.querySelector(...)


<button .. />
<input type="text" />

getByRoleName("button");
getByRoleName("text");


Welcome to React

getByText(/welcome to react/i); // h1 or div or any other DOM element which has the content

 <input type="text" placeholder="search by name" />

getByPlaceHolderText("search by name");


<div data-testid="1"></div>

getByTestId(1);

===========================

npm test

npm test -- --coverage

=================================

styled-components, font-awesome, bootstrap, react-router-dom, react context

================================================


$ npx create-react-app phoneapp
phoneapp> npm i bootstrap styled-components react-router-dom


=====================

Task: Recipes application
1) recipes.json
2) Web assignments.pdf

======================

<a href="#" onClick={}>
	<img src="" />
</a>

==========


<form onSubmit={this.handleSubmit}>
	<input type="text" name="firstName" id="fn"/>
	<input type="text" name="lastName" id="ln" />
	<button type="submit">Get Data</button>
</form>

handleSubmit(evt) {
	evt.target.elements.firstName.value;
}

==========================================================

E2E Testing:

npm i cypress -D


package.json:


  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "cypress" : "cypress open",
    "cypress-test": "cypress run"
  }

 
npm run cypress

===========

.test.js [ Unit testing]
.spec.js [ E2E] or delete.e2e.js

========================


npx create-react-app phoneapp

phoneapp>npm i bootstrap styled-components react-router-dom

 
--------------------------------------------

Component Life Cycle

<A>
	<B/>
	<C/>
</A>

B and C are accessed using {this.props.children}

<A>
	<D/>
</A>

D is accessed using {this.props.children}

=============

download "share.zip" from github


Phoneapp:

1) copy "img" folder into "public"

2) copy "data.js" into src folder

3) overwrite "App.css"


Components:
1) Navbar
2) ProductList
3) Product
4) Cart
5) CartList
6) Details
7) Default




React Fragment:


function App() {
  return (
    <div>

    </div>   
  );
}

or

function App() {
  return (
    <React.Fragment>

    </React.Fragment>   
  );
}

or

function App() {
  return (
    <>

    </>   
  );
}

=========================


1) "public/index.html" ==> add links to fontawesome and google fonts
2) Replace "Navbar.js" with the one in "share.zip"
3) place "Button.js" in "components" folder


==========

Styled Components:

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

render(
  <div>
    <Button>Normal</Button>
    <Button primary>Primary</Button>
  </div>
);

==============

Server side Routing
<a href="/cart">Products</a>

Client Side Routing: ==> Router configuration switch ==> Route
<Link to="/cart" className="ml-auto">   


=========================================================


 <Button onClick={() => productContext.increment(id) >+</Button>

 ============

 CartList ==> increment and decrement

 Context.js

 increment =(id) => {
 	get product  from cart whose based on id 
 	imcrement count
 	change total
 	update cart state
 }

 same for decrement

 ===============

 Recap:
 	1) styled-component ==> Button
 	2) font-awesome for icons
 	3) Bootstrap ==> RWD ==> container, rom, card, card-img-top, col-md col-lg, my-2 , navbar

 	4) React Router ==> npm i react-router-dom
 	BrowserRouter as Router, Link, Switch, Route
 	Different URLs different views are renderd in SPA

 	5) React Context
 			5.1) global data for tree of components
 			5.2) Provider places data/functions into Context
 			5.3) Consumer access them
 			5.4) for Functional components new addition 
 					let someContext = React.useContext(NameOfContext); // Hook

 					somContext is the consumer; no need for
 					<ProductConsumer>
 						 {
 						 	value => ...
 						 }
 					</ProductConsumer>
 	===========================================

 	https://github.com/typicode/json-server
 	Get a full fake REST API with zero coding in less than 30 seconds

 	db.json

 	{
  "posts": [
   					 { "id": 1, "title": "json-server", "author": "typicode" }
 			 ],
  	"comments": [
    			{ "id": 1, "body": "some comment", "postId": 1 }
  		],
 		 "profile": { "name": "typicode" }
}

CRUD operations ==> CREATE  READ UPDATE DELETE

http://server:port/posts
http://server:port/comments
http://server:port/profile

create "data.json" with endpoints

Fake RESTApi

npx json-server --watch data.json --port 1234

Browser:
http://localhost:1234/products
http://localhost:1234/customers
http://localhost:1234/orders
http://localhost:1234/products/3
http://localhost:1234/products?company=apple


productapp> npm i axios

====================================================

React Reference:

class App extends React.Component {
  emailRef = React.createRef(); // reference
  
  render() {
    return (
      <>
        <input type="text" ref={this.emailRef}  />
        <button onClick={() => this.doTask()}>Click</button>
       </>
    )
  }
  
  doTask() {
  	  console.log(this.emailRef.current.value);
  }
} 

ReactDOM.render(<App/>, document.getElementById("root"));

===================================================

Re-Render issues
Suspense and Lazy
React Hooks [ useContext()]
Redux

============================

Day 6



class App extends React.Component {

	state = {
		firstName: "",
		lastName : ""
	}''

  setFirstName(evt)  {
  	this.setState({
  		firstName: evt.target.value
  	})
  };


  setLastName(evt)  {
  	this.setState({
  		lastName: evt.target.value
  	})
  };

  render() {
    return (
      <>
        FirstName : <input type="text"  onChange={(evt) => this.setFirstName(evt)} /> <br />
        LastName : <input type="text"  onChange={(evt) => this.setLastName(evt)} />

        <button onClick={() => this.doTask()}>Click</button>
       </>
    )
  }
  
  doTask() {
  	 console.log(this.state)
  }
} 

============

forwardRef ==> create a pointer and pass it to Child component; Child would have assigned the pointer to element
Parent we can access child 

========================

<div class="row">
	<div class="col-md-4">
		<Menu />
	</div>
	<div class="col-md-8">
			<Restuarant />
	</div>
</div>

==============================


state = {
	"names" : [],
	"email" : ""
}


this.setState( {
	"email" : "me@gmail.com"
});

let localnames = [...this.state.name];
// make changes to localnames
this.setState({
	names: localnames
});

==============================================

Avoid Re-render of Child

class Child extends React.Component {
	render() {
    	console.log("re-render child component.");
  	return (
    		<div>
	      		<p>child component { this.props.name }</p>
    		</div>
  	);
    }
};

class Parent extends React.Component {
  state = {
  count: 0,
  name : 'Peter'
 };
  
  increment() {
  	this.setState({
  		count: this.state.count + 1
	  });
 }
 
  render() {
  	console.log("re-render parent component");
  	return (
    	<>
      		<p>Count: {this.state.count}</p>
      		<button onClick={() => this.increment()}>Increment</button>
 	     	<Child name={this.state.name}/>
    	</>
  	);
  }
}

ReactDOM.render(<Parent />, document.getElementById('root'));

===============

shouldComponentUpdate(nextProps, nextState)

class Child extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return JSON.stringify(this.props) !== JSON.stringify(nextProps);
  }
	render() {
    	console.log("re-render child component.");
  	return (
    		<div>
	      		<p>child component { this.props.name }</p>
    		</div>
  	);
    }
};

class Parent extends React.Component {
  state = {
  count: 0,
  name : 'Peter'
 };
  
  increment() {
  	this.setState({
  		count: this.state.count + 1
	  });
 }
 
  render() {
  	console.log("re-render parent component");
  	return (
    	<>
      		<p>Count: {this.state.count}</p>
      		<button onClick={() => this.increment()}>Increment</button>
 	     	<Child name={this.state.name}/>
    	</>
  	);
  }
}

ReactDOM.render(<Parent />, document.getElementById('root'));

=====================

Functional Components doesn't have Component life-cyle methods

function Child(props) {
   	console.log("re-render child component.");
  	return (
    		<div>
	      		<p>child component { props.name }</p>
    		</div>
  	);
}

Solution: Memoize the Functional Components

const MemoChild = React.memo(Child); // memoize current props and state; 

// High Order Component

function MemoChild(props) {
	if nextProps && props also nextState && currentState are same return;
	return Child(props);
}

==========================================
Whenever a state or props changes; the component re-renders and it in turn triggers child re-rendering.

To prevent Child component from re-rendering; re-render only if props passed to child gets changed 
* In class Component ==> shouldComponentUpdate(nextProps, nextState) ==> boolean
* In functional components use HOC React.memo(); usage
const MemoChild = React.memo(Child);

==================

ErrorBoundary

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false,
			error: null,
			errorInfo: null
		}
	}

	componentDidCatch(error, errorInfo) {
		this.setState({
			  	hasError: true,
			  	error,
			  	errorInfo
			})
	}

	render() {
		if(this.state.hasError) {
			return <h1> Something went wrong !!! {this.state.errorInfo} </h1>
		}
		return this.props.children;
	}

}



function App() {
	return <ErrorBoundary>
						<A/>
						<B/>
						<C/>
						<ErrorBoundary>
								<D/>
								<E/>
						</ErrorBoundary>
		</ErrorBoundary>
}

=========================================================

React Hooks React 16.6
Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class
 
1) useContext() ==> use this instead of <ContextConsumer> { value ==> ...} </ContextConsumer>

2) useState() is a hook to introduce the concept of state varaibles in functional components

import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


=====================

3) useReducer
		==> if state is complex [ nested objects] / conditionally mutate the state

		let initialState = {count : 0};

		let countReducer = (state, action) => {
			switch(action.type) {
				case "INCREMENT" : return {count: state.count + action.payload};
				case "DECREMENT" : return {count: state.count - 1};
				default: return state;
			}
		}

		function App() {
			let [state, dispatch] = React.useReducer(countReducer, initialState);

			function handleIncrement() {
				let action = {"type" : "INCREMENT", payload : 10};
				dispatch(action);
			}

			return (
		    <div>
		      <p>YCount {state.count} t</p>
		      <button onClick={handleIncrement}>
		        Click me
		      </button>
		    </div>
  	);

	}

==============

let initialState = {cart: [], total: 0};

	let cartReducer = (state, action) => {
			switch(action.type) {
				case "ADD_TO_CART" : return {cart: state.cart.push(action.payload) };
				case "REMOVE_FROM_CART" : return {cart: state.cart.filter(p => p.id !== action.id)};
				case "CLEAR_CART": return { cart: []};
				default: return state;
			}
		}


==========


4) useEffect

==> to simulate the concept of Component Lifecycle methods in Functional Component

componentDidMount() and componentDidUpdate() ===> make API calls in class component

https://codepen.io/banuprakash/pen/gOgBPBQ


function App() {
	let [count, setCount] = React.useState(0);
	let [user, setUser] = React.useState("");

	// componentDidUpdate
	React.useEffect(() => {
		console.log("called effect 1 ", count)
	}); 

	// componentDidMount
	React.useEffect(() => {
		console.log("called effect 2", count)
	}, []); 

	// called only on user change
	React.useEffect(() => {
		console.log("called effect 3", count)
	}, [user]); 

	 function handleIncrement() {
	 	 setCount(count + 1);
	 }

	return (
		<>
			Count {count} <br />
			<button onClick={handleIncrement}> Click </button> <br />
		</>
	)
}
ReactDOM.render(<App/>, document.getElementById("app"));

===============

5) React.useCallback ==> memoize function


function Title() {
  console.log('Rendering Title')
  return (
    <h2>
      Example: Title
    </h2>
  )
};

const MemoTitle = React.memo(Title);

function Button({ handleClick, children }) {
  console.log('Rendering button - ', children)
  return (
    <button onClick={handleClick}>
      {children}
    </button>
  )
}

const MemoButton = React.memo(Button);

function Count({ text, count }) {
	console.log(`Rendering ${text}`)
	return <div>{text} - {count}</div>
}

const MemoCount = React.memo(Count);

function ParentComponent() {
	const [age, setAge] = React.useState(25)
	const [salary, setSalary] = React.useState(50000)

	 const incrementAge = () => {
		setAge(age + 1)
	};

	const incrementSalary = () => {
   		setSalary(salary + 1000)
	}
  
	return (
		<div>
			<MemoTitle />
			<MemoCount text="Age" count={age} />
			<MemoButton handleClick={incrementAge}>Increment Age</MemoButton>
			<MemoCount text="Salary" count={salary} />
			<MemoButton handleClick={incrementSalary}>Increment Salary</MemoButton>
		</div>
	)
}

ReactDOM.render(<ParentComponent/>, document.getElementById("root"));

Memoize Button is not preventing from re-rendering

===


function Title() {
  console.log('Rendering Title')
  return (
    <h2>
      Example: Title
    </h2>
  )
};

const MemoTitle = React.memo(Title);

function Button({ handleClick, children }) {
  console.log('Rendering button - ', children)
  return (
    <button onClick={handleClick}>
      {children}
    </button>
  )
}

const MemoButton = React.memo(Button);

function Count({ text, count }) {
	console.log(`Rendering ${text}`)
	return <div>{text} - {count}</div>
}

const MemoCount = React.memo(Count);

function ParentComponent() {
	const [age, setAge] = React.useState(25)
	const [salary, setSalary] = React.useState(50000)

	 const incrementAge = React.useCallback(() => {
		setAge(age + 1)
	}, [age]);

	const incrementSalary = React.useCallback(() => {
   		setSalary(salary + 1000)
	}, [salary]);
  
	return (
		<div>
			<MemoTitle />
			<MemoCount text="Age" count={age} />
			<MemoButton handleClick={incrementAge}>Increment Age</MemoButton>
			<MemoCount text="Salary" count={salary} />
			<MemoButton handleClick={incrementSalary}>Increment Salary</MemoButton>
		</div>
	)
}

ReactDOM.render(<ParentComponent/>, document.getElementById("root"));