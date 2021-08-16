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






 



