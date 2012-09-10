/**
 * 
 */

var s = "These are the times that try people's souls.";
var last_word = s.substring(s.lastIndexOf(" ") + 1, s.length);

alert( typeof(s) );
alert( typeof(last_word) );

alert( typeof(s.substring(s.lastIndexOf(" ") + 1, s.length)) );

alert( typeof( new String('test')));