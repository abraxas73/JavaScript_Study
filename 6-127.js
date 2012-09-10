/**
 * 
 */



outerloop:
	for(var i=0;i < 10; i++) {
		innerloop:
			for(var j=0;j<10;j++) {
				if( j > 3) break;
				if( i==2) break innerloop;
				if( i==4) break outerloop;
				document.write("i =" + i + " j =" + j + "<br />");
			}
	}
	document.write("FINAL i =" + i + " j = " + j + "<br />");
	