function validation() {
  if (document.formfill.Username.value == "") {
    document.getElementById("result").innerHTML = "Enter Username*";
  } else if (document.formfill.Username.value.length < 6) {
    document.getElementById("result").innerHTML = "Enter Atleast six letter";
    return false;
  } else if (document.formfill.Email.value == "") {
    document.getElementById("result").innerHTML = "Enter your Email*";
    return false;
  } else if (document.formfill.Password.value == "") {
    document.getElementById("result").innerHTML = "Enter your password*";
    return false;
  }
  else if (document.formfill.cPassword.value < 6) {
    document.getElementById("result").innerHTML = "Password must be 6-digit";
    return false;
  }
  else if (document.formfill.cPassword.value == "") {
    document.getElementById("result").innerHTML = "Enter Confirm password";
    return false;
  }
  else if (
    document.formfill.cPassword.value !== document.formfill.Password.value) {
    document.getElementById("result").innerHTML = "password doesn't matched";
    return false;
  }
  else if (
    document.formfill.Password.value == document.formfill.cPassword.value) {
    popup.classList.add("open-slide")
    return false;
  }

}
var popup = document.getElementById('popup');
function CloseSlide(){
  popup.classList.remove("open-slide")
  }

   