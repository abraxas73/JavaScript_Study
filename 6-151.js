/**
 * 
 */

var o = {};
alert( Object.prototype.isPrototypeOf(o) );
alert( Object.isPrototypeOf(o) );
alert( o.isPrototypeOf(Object.prototype) );
alert( Function.prototype.isPrototypeOf(Object) );

alert( Object.constructor );

var undefs = [,,];

alert( undefs.length );