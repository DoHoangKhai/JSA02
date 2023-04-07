function check(){
    let FirstName = document.getElementById("firstname").value;
    let LastName = document.getElementById("lastname").value;
    let Email = document.getElementById("email").value;
    let Password = document.getElementById("password").value;
    let ConPassword = document.getElementById("conpassword").value;
    const pattern = /[A-Z]\w*[0-9]\w*/;

    if(FirstName == '' || LastName == '' || Email == '' || Password == '' || ConPassword == ''){
        alert("Missing inputs")
        return
    }

    if(/\s/.test(Email) == true){
        alert("Email must not have any spaces")
        return
    }

    if(Email.includes("@") == false || Email.includes(".") == false){
        alert("Email in the wrong format")
        return
    }

    if(Password.length <= 6){
        alert("Password must have more than 6 characters");
        return
    }

    if(pattern.test(Password) == false){
        alert("Password must contain at least 1 capital letter, 1 number and 1 normal letter");
        return
    }

    if(Password != ConPassword){
        alert("Password confirmation failed, please type again");
        return
    }

    alert("SignUp successful")
    localStorage.setItem('email', Email)
    localStorage.setItem('password', Password)
}

function ShowPass(){
    const InputType = document.querySelector("#password");
    const Eye = document.querySelector("#eyes");

    const eyeclose = document.createElement("img");
    eyeclose.src = "../../../../assets/icon/Stroke\ 9.svg";

    if(InputType.getAttribute("type") == "password"){
        InputType.setAttribute("type", "text");
        Eye.appendChild(eyeclose);
    }else{
        InputType.setAttribute("type", "password");
        Eye.innerHTML = ' '
    }
}

function ShowConPass(){
    const InputType = document.querySelector("#conpassword");
    const Eye = document.querySelector("#coneyes");

    const eyeclose = document.createElement("img");
    eyeclose.src = "../../../../assets/icon/Stroke\ 9.svg";

    if(InputType.getAttribute("type") == "password"){
        InputType.setAttribute("type", "text");
        Eye.appendChild(eyeclose);
    }else{
        InputType.setAttribute("type", "password");
        Eye.innerHTML = ' '
    }
}
