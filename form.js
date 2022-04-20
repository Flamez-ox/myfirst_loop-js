

function formvalid() {
    var first_name =        document.forms["myForm"]["first_name"].value
    var name1 =/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
    var email1 = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    var password1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
    var phone1 =  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
     var countrycode1 = /^(\+?\d{1,3}|\d{1,4})$/
    var last_name =         document.forms["myForm"]["last_name"].value
    var email =             document.forms["myForm"]["email"].value
    var password =          document.forms["myForm"]["password"].value
    var confirmpw =          document.forms["myForm"]["confirmpw"].value
    var countrycode =       document.forms["myForm"]["countrycode"].value
    var phone =          document.forms["myForm"]["phone"].value    
    

if (first_name == "") {
    alert("Fill in the Fist Name")
     document.forms["myForm"]["first_name"].focus();
     return  false
}

if (first_name.length > 10) {
    alert("First name field cannot be more than 10 character!")
    document.forms["myForm"]["first_name"].focus();
    return  false
}
if (!first_name.match(name1)) {
    alert("Invalid Character in First name field")
    document.forms["myForm"]["first_name"].focus();
    return  false
}
if (last_name == "") {
    alert("Fill in the Last name")
     document.forms["myForm"]["last_name"].focus();
     return  false
}
if (last_name.length > 10) {
    alert("Last name field cannot be more than 10 character!")
    document.forms["myForm"]["last_name"].focus();
    return  false
}
if (!last_name.match(name1)) {
    alert("Invalid Character in Last name field")
    document.forms["myForm"]["last_name"].focus();
    return  false
}
if (email == "") {
    alert("Fill in your email")
     document.forms["myForm"]["email"].focus();
     return  false
}

if (!email.match(email1)) {
    alert("Invalid Character in email field")
    document.forms["myForm"]["email"].focus();
    return  false
}

if (password == "") {
    alert("Fill in your password")
     document.forms["myForm"]["password"].focus();
     return  false
}
if (!password.match(password1)) {
    alert("password should contain 8 characters with at least one digit, one Uppercase & Lowercase!")
    document.forms["myForm"]["password"].focus();
    return  false
}
if (confirmpw == "") {
    alert("Re-enter password")
     document.forms["myForm"]["confirmpw"].focus();
     return  false
}
if (confirmpw !== password) {
    alert("Password not match")
     document.forms["myForm"]["confirmpw"].focus();
     return  false
}

if (countrycode == "") {
    alert(" Put in your Country code")
     document.forms["myForm"]["countrycode"].focus();
     return  false
}

if (!countrycode.match(countrycode1)) {
    alert("input your Countrycode")
    document.forms["myForm"]["phone"].focus();
    return  false
}

if (phone == "") {
    alert(" Put in your phone number")
     document.forms["myForm"]["phone"].focus();
     return  false
}

if (!phone.match(phone1)) {
    alert("input your number XXX-XXX-XXXX!")
    document.forms["myForm"]["phone"].focus();
    return  false
}







}