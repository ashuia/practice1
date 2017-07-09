'use strict';

function countSameElements(collection) 
{
	var result=[{}];
	var n=0;
	var count=1;
	var reg=new Boolean();
	for(var i=0;i<collection.length;i++)
	{
		if(collection[i].length!=1)
		{
			for(var j=0;j<result.length;j++)
			{
				if(collection[i][0]==result[j].name)
				{
					result[j].summary+=parseInt(collection[i].match(/\d+/g));
					reg=false;
				}

			}
			if(reg)
			{
				result[n]=new Object();
				result[n].name=collection[i][0];
				result[n].summary=parseInt(collection[i].match(/\d+/g));
				count=1;
				n++;
			}
			reg=true;
		}
		else
		{	
			for(var j=0;j<result.length;j++)
			{
				if(collection[i]==result[j].name)
				{			
					result[j].summary++;
					reg=false;
				}
			}
			if(reg)
			{
				if(collection[i]==collection[i+1])
				{			
					count++;
				}
				else
				{
					result[n]=new Object();
					result[n].name=collection[i];
					result[n].summary=count;
					count=1;
					n++;
				}
			}
			reg=true;
		}

	}
	return result;
}

