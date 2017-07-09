'use strict';

function createUpdatedCollection(collectionA, objectB) {
 	var result=new Array();
	var n=0;
	var count=1;
	for(var i=0;i<collectionA.length;i++){
		if(collectionA[i]==collectionA[i+1])
			count++;
		else{
			result[n]=new Object();
			result[n].key=collectionA[i];
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
