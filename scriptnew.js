
let firstname=document.getElementById("username1");
let error1=document.getElementById("error1");
let error2=document.getElementById("error2");
let password=document.getElementById("password");



error1.style.fontSize="14px";
error2.style.fontSize="14px";


error1.style.fontStyle="italic";
error2.style.fontStyle="italic";


// -------------------Name-----------------------

function validate(callback){
  if(firstname.value.trim()==""|| firstname.value==null){
    error1.innerHTML="Please enter the Username as admin";
    firstname.style.border="1px solid rgb(31, 184, 245)";
    return false;
  }

  if(firstname.value=="admin"){
    firstname.style.border="none";
    error1.innerHTML="Valid";
  }
  else{
    firstname.style.border="1px solid rgb(31, 184, 245)";
    error1.innerHTML="Please enter the Username as admin";
    return false;
  }

// --------------------Password----------------------


if (password.value.trim()==""|| password.value ==null){

  error2.innerHTML="Please enter the password as 12345";
  password.style.border="1px solid rgb(31, 184, 245)";
  return false;
}
if(password.value=="12345"){
  password.style.border="none";
  error2.innerHTML="Valid";
  callback();
  return true;
}
else{
  password.style.border="1px solid rgb(31, 184, 245)";
  error2.innerHTML="Invalid";
  return false;
}

}
function display(){


    window.open("sidenav.html");
       
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
























 























   
    
    
    
     