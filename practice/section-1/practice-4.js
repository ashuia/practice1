'use strict';

function collectSameElements(collectionA, objectB) {
	var result=[];
	for(var i=0;i<collectionA.length;i++){
		for(var x in collectionA[i]){
			for(var j=0;j<objectB.value.length;j++){
				if(collectionA[i][x]==objectB.value[j])
					result.push(collectionA[i][x]);
			}
		}
	}
  return result;
}
