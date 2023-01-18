function msg(){
  setTimeout(function(){
    alert("welcome to my website")
  },2000);
}
function msg1(){
  setInterval(function() {
alert("welcome to my blog")    
  },5000);
}
function getcube(){  
  var number=document.getElementById("number").value;  
  alert(number*number*number);  
  }  
 
  function fun() {  
    var btn = document.createElement("button");  
    btn.innerHTML = "Click me";  
    document.body.appendChild(btn);  
}  