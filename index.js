var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passwordInput");
var messageDiv = document.getElementsByClassName("messagebox")[0]
var loginbutton = document.getElementById("btn")


var ValidEmail = "test@example.com"
var validpassword= "524524"

function launch(){
    var Enteremail = emailInput.value;
    var enterpassword = passwordInput.value
    if(Enteremail === ValidEmail && enterpassword === validpassword){
    //    alert ("★彡[S𝓾cc𝑒ѕѕ𝓯𝓾ľ]彡★");
       messageDiv.textContent ="Wellcome To My Website"
       
      
    }else{
        messageDiv.textContent = alert ("☹-Invalid Email or Password-☹ ")
    }
}
loginbutton.addEventListener("click",launch)

