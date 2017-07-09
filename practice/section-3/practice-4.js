'use strict';

function createUpdatedCollection(collectionA, objectB) {
	var result=new Array();
	var n=0;
	var count=1;
	var reg=new Array();
	var key=new String();
	for(var i=0;i<collectionA.length;i++){
		if(collectionA[i].length!=1){
			reg=collectionA[i].split('');
			count+=parseInt(reg[2])-1;
			key=reg[0];
		}
		if(collectionA[i]==collectionA[i+1]){			
			count++;
			key=collectionA[i];
		}
		else{
			result[n]=new Object();
			result[n].key=key;
			result[n].count=count;
			count=1;
			n++;
		}
	}
	for(var i=0;i<result.length;i++)
 	{
 		for(var j=0;j<objectB.value.length;j++)
 		{
 			if(result[i].key==objectB.value[j])
 			{
 				if(result[i].count>=3)
 				{
 					var n=parseInt(result[i].count/3);
 					result[i].count-=n;
 				}
 			}
 		}
 	}
 	return result;
}
