function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

  //Show message that there is an error with the username...
  document.getElementById("usernameError").innerHTML="Bad username.";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
  //Turn the username items red
  document.getElementById("usernameGroup").classList.add("has-error");

  //Show message that there is an error with the password...
  document.getElementById("passwordError").innerHTML="Bad password.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
  var = userEntered
  if (userEntered < 6) {
    alert("Your username must be atleast 6 characters.")
    return false;
  }
    else {
      return true;
    }

  string = password
  if (password == "password") {
    alert("Your password cannot be "password".")
    return false;
  }
    else {
    return true;
    }

}
