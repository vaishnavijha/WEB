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










 



