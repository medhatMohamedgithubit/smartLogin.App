var smartLogin = document.getElementById("smartLogin");
var nameInput = document.getElementById("text")
var emailInput = document.getElementById("Email")
var passwordInput =document.getElementById("password")
var alertName = document.getElementById("alertName")
var alertEmail = document.getElementById("alertEmail")
var alertpassword = document.getElementById("alertPass")
var alertFind = document.getElementById("alertFind")
var alertCanUse =document.getElementById("alertCanUse")
var singUp = document.getElementById("singUp")
var contant = document.getElementById("contant")
var login = document.getElementById("login")
var sing = document.getElementById("sing")
var singIn = document.getElementById("singIn")
var singUp = document.getElementById("singUP")
var users=[];   
if(localStorage.getItem("users")!=null){
    users=JSON.parse(localStorage.getItem("users"));
}


smartLogin.addEventListener("submit",function(evenInfo){
    evenInfo.preventDefault();
    
    if(checkInputValid()){
        addUser()
    }
    
})
function addUser(){
    var user= {
           name:nameInput.value,
           email:emailInput.value,
           password:passwordInput.value,
       }
       if(isFoundUser(user) == true){
           alertFind.classList.replace('d-none','d-block')
       }
       else{
        alertFind.classList.replace('d-block','d-none');
        alertCanUse.classList.replace('d-none','d-block');
        window.location.href= "login.html";
           users.push(user)
           localStorage.setItem("users",JSON.stringify(users))
       }
    
   }
   
   function isFoundUser(user){
       for(var i=0;i<users.length;i++){
           if(users[i].email.toLowerCase()== user.email.toLowerCase()){
               return true;
           }
        
       }
   }   

function validate(regex,element,alert){
    var valid = regex;
  
    if(valid.test(element.value)){
        element.classList.remove("is-invalid")
        element.classList.add("is-valid")
         alert.classList.replace("d-block","d-none")
        return true;
    }
    else{
        element.classList.add("is-invalid")
        alert.classList.replace("d-none","d-block")
        return false;
    }
};
function checkInputValid(){
    if(validate(/^[a-zA-Z0-9$_]{3,}$/,nameInput,alertName)&&
    validate(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,emailInput,alertEmail)&&
    validate(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,passwordInput,alertpassword) ==true
){
    return true
    }else{
        return false
    }
}

