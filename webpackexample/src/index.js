import "./styles.css";
import Person from "./Person";

import {add, sub} from './math';

import _ from 'lodash';

let p1  = new Person(44,"Harry");

console.log("Hello World!!!");

console.log(p1.getName());

console.log(add(4,5));
console.log(sub(24,5));

console.log(_.join(["Hello", " ", "Webpack" ]));