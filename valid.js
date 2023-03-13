window.addEventListener("load", init){
}

function init(){
validatePassword();
}

    function validatePassword() {
        var password = document.getElementById("password").value;
        var uppercaseRegex = /[A-Z]/;
        var lowercaseRegex = /[a-z]/;
        var numberRegex = /[0-9]/;
    
        if (password.length < 8) {
          alert("Password must contain at least 8 characters");
          return false;
        }
    
        if (!uppercaseRegex.test(password)) {
          alert("Password must contain at least one uppercase letter");
          return false;
        }
    
        if (!lowercaseRegex.test(password)) {
          alert("Password must contain at least one lowercase letter");
          return false;
        }
    
        if (!numberRegex.test(password)) {
          alert("Password must contain at least one number");
          return false;
        }
    
        return true;
      }
