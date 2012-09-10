/**
 * 
 */

var o = {x:1, y:2, z:3};
var a = new  Array();
var i = 0;
for(a[i++] in o) ;

alert( a.join() );

for(i in a) alert(i);
for(i in a) alert(a[i]);