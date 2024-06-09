var formLogin = document.getElementById("formLogin");
var emailInput = document.getElementById("Email")
var passwordInput =document.getElementById("password")
var alertEmailLogin = document.getElementById("alertEmailLogin")
var users=[];
if(localStorage.getItem("users")!=null){
    users=JSON.parse(localStorage.getItem("users"));
}


formLogin.addEventListener("submit",function(evenInfo){
    evenInfo.preventDefault();
    login();
})

function login(){
    var userData={
        email:emailInput.value,
        password:passwordInput.value,
    }
    if(isUserEmailUsed(userData) == true){
        alertEmailLogin.classList.replace("d-block","d-none")
        window.location.href="secand.html"
    }    
    else{
        alertEmailLogin.classList.replace("d-none","d-block")
    }
}

function isUserEmailUsed(userData){
    for(var i=0;i<users.length;i++){
        if(users[i].email.toLowerCase()== userData.email.toLowerCase()&&users[i].password== userData.password){
            localStorage.setItem("userName",users[i].name)

            return true;
        }
     
    }
}  

