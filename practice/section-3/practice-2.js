'use strict';

function createUpdatedCollection(collectionA, objectB) {
 	for(var i=0;i<collectionA.length;i++)
 	{
 		for(var j=0;j<objectB.value.length;j++)
 		{
 			if(collectionA[i].key==objectB.value[j])
 			{
 				if(collectionA[i].count>=3)
 				{
 					var n=parseInt(collectionA[i].count/3);
 					collectionA[i].count-=n;
 				}
 			}
 		}
 	}
 	return collectionA;
}







