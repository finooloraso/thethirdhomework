var getElementsByClassName=function(name)
	{
	var x=document.getElementsByTagName("*");
	var result=[];
	var re=new RegExp("\\b"+name+"\\b","i");
		for(var i=0;i<x.length;i++)
		{
			if(re.test(x[i].className))
			{
				result.push(x[i]);
			}
		}
		return result;
	}