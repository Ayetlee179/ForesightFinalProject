function validateLogIn() {
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="hancelet" && password=="123") {
        location.replace("/index.html");
    }
    else {
        document.getElementById("demo").innerHTML = "Please enter your Username or Password";
      }      
}