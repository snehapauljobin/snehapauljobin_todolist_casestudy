
let firstname=document.getElementById("username1");
let error1=document.getElementById("error1");
let error2=document.getElementById("error2");
let password=document.getElementById("password");



error1.style.fontSize="14px";
error2.style.fontSize="14px";
error3.style.fontSize="14px";
error4.style.fontSize="14px";
error5.style.fontSize="14px";

error1.style.fontStyle="italic";
error2.style.fontStyle="italic";
error3.style.fontStyle="italic";
error4.style.fontStyle="italic";
error5.style.fontStyle="italic";




// -------------------Name-----------------------

function validate(){
  if(firstname.value.trim()==""|| firstname.value==null){
    error1.innerHTML="Please enter the field";
    firstname.style.border="2px solid red";
    return false;
  }
  if(firstname.value=="admin"){
    firstname.style.border="3px solid green";
    error1.innerHTML="Valid";
  }
  else{
    firstname.style.border="2px solid red";
    error1.innerHTML="Invalid";
    return false;
  }

// --------------------Password----------------------


if (password.value.trim()==""|| password.value ==null){

  error3.innerHTML="Please enter the password as admin";
  password.style.border="2px solid red";
  return false;
}
if(password.value=="12345"){
  firstname.style.border="3px solid green";
  error2.innerHTML="Valid";
}
else{
  firstname.style.border="2px solid red";
  error2.innerHTML="Invalid";
  return false;
}
}






































// -----------------------Toggle----------------------

show.onclick=function toggle(){
password.setAttribute("type","text");
show.style.display="none";
hide.style.display="block";
}


hide.onclick= function toggle1(){
  password.setAttribute("type","password");
  hide.style.display="none";
  show.style.display="block";
  }
























 























   
    
    
    
     