/*
//initialization
rb = RbStyle = function(element){
if(element[0]=="#") return document.getElementById(element.trim().replace("#",""));
else if(element[0]==".") return document.getElementsByClassName(element.trim().replace(".",""));
else return document.getElementsByName(element);
}
*/

appendClass = function(str1, str2){
return str1+" "+str2;
}

document.addEventListener("DOMContentLoaded",function(){
//Modal
for(i=0; i<rb(".modal").length; i++){
rb(".modal")[i].style.left = (document.body.getBoundingClientRect().width/2)-(rb(".modal")[i].getBoundingClientRect().width/2);
}
modal_toggle = rb(".modal-toggle");
for(i=0; i<modal_toggle.length; i++){
rb(modal_toggle[i],"click",function(){
target = this.getAttribute("href");
rb(target).className = rb(target).className.replace("modal-hide","modal-show");
});
}
modal_close = rb(".modal-close");
for(i=0; i<modal_close.length; i++){
rb(modal_close[i],"click",function(){
target = this.getAttribute("href");
rb(target).className = rb(target).className.replace("modal-show","modal-hide");
});
}

//Menubar
//rb(".menubar")[0].style.marginTop = rb(".navbar")[0].getBoundingClientRect().height;
menubar_toggle = rb(".menubar-toggle");
rb(menubar_toggle[0],"click",function(){
if(rb(".menubar")[0].className.match("menubar-open")){
rb(".menubar")[0].className = rb(".menubar")[0].className.replace("menubar-open","menubar-close");
for(i=0; i<rb(".collapsible-content").length; i++){
rb(".collapsible-content")[i].style.marginLeft = "-280px";
}
}else{
rb(".menubar")[0].className = rb(".menubar")[0].className.replace("menubar-close","menubar-open");
for(i=0; i<rb(".collapsible-content").length; i++){
rb(".collapsible-content")[i].style.marginLeft = "0px";
}
}
});

//Collapsible Set
collapsible_toggle = rb(".collapsible-toggle");
for(i=0; i<collapsible_toggle.length; i++){
collapse(collapsible_toggle[i]);
collapse(collapsible_toggle[i]);
rb(collapsible_toggle[i],"click",function(){
if(rb(".menubar")[0].className.match("menubar-open")){
collapse(this);
}
});
}
function collapse(element){
if(element.parentElement.className.match("collapsible-open")){
element.parentElement.className = element.parentElement.className.replace("collapsible-open","collapsible-close");
element.parentElement.style.height = element.offsetHeight;
return true;
}else{
element.parentElement.className = element.parentElement.className.replace("collapsible-close","collapsible-open");
true_height = 0;
for(j=0; j<element.parentElement.children.length; j++){
true_height += element.parentElement.children[j].offsetHeight;
}
element.parentElement.style.height = true_height;
return false;
}
}

//focus
for(i=0; i<rb(".link").length; i++){
if(document.location.href.match(rb(".link")[i].getAttribute("href"))){
rb(".link")[i].className = appendClass(rb(".link")[i].className,"focus");
}
}

});