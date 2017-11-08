document.addEventListener("DOMContentLoaded", ready);
function ready() {
  var login = document.getElementById("login");
  login.addEventListener("submit", function(e) {
    e.preventDefault();
    var email = document.getElementById("email");
    var result = '' + email.value;
    console.log(result);
    var patt = /\w+@\w+\.\w{2,3}\b/i;
    var validateResult = patt.test(result);
    //validateResult = validateResult.match (/\w+\@\w{2,9}\.\w{2,3}/);
    console.log(validateResult);
    var pass = document.getElementById("password");
    pass = pass.value;
    console.log(pass);
    var validPass = pass.match (/[\wа-я]{8,16}/i);
    console.log(validPass);
    if(validateResult == false || validPass == null) {
      var error = document.querySelector(".error");
      error.style.display = 'block';
      function dismiss() {
        error.style.display = 'none';
      }
      setTimeout(dismiss, 5000);
    }
    window.location.href = login.action;
  });
}
