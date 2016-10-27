/*
* @Author: xsp
* @Date:   2016-10-26 16:17:17
* @Last Modified by:   xsp
* @Last Modified time: 2016-10-26 17:10:09
*/

// import 'babel-polyfill';
// import route from './route';
import $ from 'jquery';

const route = [12,'sadsadasdasdsaas',23];

$('<h1>zxcxzc</h1>').appendTo('body');
const ul = $('<ul></ul>').appendTo('body');
for (const cat of route) {
   $('<li></li>').text(cat).appendTo(ul);
}



