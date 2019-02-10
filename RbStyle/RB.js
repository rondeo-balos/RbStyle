rb = function(element,param,context){
if(element[0]=="."){
return document.getElementsByClassName(element.replace(".",""));
}else{
if(element[0]=="#") element = document.getElementById(element.replace("#",""));
if(param=="click") element.onclick = context;
if(param=="append") element.innerHTML += context;
if(param=="clear") element.innerHTML = "";
return element;
}
}