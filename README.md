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

















