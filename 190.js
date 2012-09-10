/**
 * 
 */
function makefunc(x) {
	return function() { return x; }
}

var a = [makefunc(0), makefunc(1), makefunc(2) ];

alert( a[0]() );
alert( a[1]() );
alert( a[2]() );