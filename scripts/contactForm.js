
function isInputNumber(evt) {
    var ch = String.fromCharCode(evt.which);
    if (!(/[0-9]/.test(ch))) {
        evt.preventDefault();
    }
}
function inputValidate() {
    var x = document.forms["contactUs"]["name"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    var y = document.forms["contactUs"]["email"].value;
    if (y == "") {
        alert("Enter a valid email address");
        return false;
    }
    var z = document.forms["contactUs"]["phone"].value;
    if (z == "") {
        alert("Please Enter a Valad Phone Number");
        return false;
    }
    var a = inputValidate;
    if ( a == "true") {
        alert("Your info has been sumbitted. Thank you!");
        return false;
    }
}

