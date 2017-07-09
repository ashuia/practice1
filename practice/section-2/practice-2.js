'use strict';

function countSameElements(collection) {
	var result=new Array();
	var n=0;
	var count=1;
	var reg=new Array();
	var key=new String();
	for(var i=0;i<collection.length;i++){
		if(collection[i].length!=1){
			reg=collection[i].split('');
			count+=parseInt(reg[2])-1;
			key=reg[0];
		}
		if(collection[i]==collection[i+1]){			
			count++;
			key=collection[i];
		}
		else{
			result[n]=new Object();
			result[n].key=key;
			result[n].count=count;
			count=1;
			n++;
		}
	}
	return result;
}

