/**
 * 
 */
uniqueID = (function() {
	var id = 0;
	return function() { return id++; };
})();