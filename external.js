
function loginValidation(){
    try {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        
        //Email Validation
        function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
        }

        //Password Validation
        function validatePassword(password) {
        var re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        return re.test(password);
        }

        if (!validateEmail(email)) {
        alert("Invalid email address.");
        }
        else if (!validatePassword(password)){
            alert("Invalid password.");
        }
        else {
            // Submit the form
        }

    } catch (error) {
        alert(error);
    }
}
