var messageDiv = document.getElementsByClassName("messagebox");
// var loginbutton = document.getElementById("btn")

// var ValidEmail = "test@example.com"
// var validpassword= "524524"

function func() {
  var emailInput = document.getElementById("emailInput").value;
  var passwordInput = document.getElementById("passwordInput").value;
  // var Enteremail = emailInput.value;
  // var enterpassword = passwordInput.value

  if (emailInput == "test@example.com" && passwordInput == "123456") {
    window.location.assign("wellcome.html");
    alert("★彡[S𝓾cc𝑒ѕѕ𝓯𝓾ľ]彡★");
  } else {
    messageDiv.textContent = alert("☹-Invalid Email or Password-☹ ");
    return;
  }
}
// loginbutton.addEventListener("click",launch)
