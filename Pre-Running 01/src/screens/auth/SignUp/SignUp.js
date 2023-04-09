const PassError = document.getElementById("error-password");
const NameError = document.getElementById("error-email");
const EyePos = document.getElementById("eyes")


function check(){
    let PassVal = document.getElementById("pass").value;
    let NameVal = document.getElementById("name").value;
    let PassMes = ""
    let NameMes = ""

    if(NameVal == ""){
        NameMes = `<h5 class="ErrorText">Please type in your username</h5>`
        NameError.innerHTML = NameMes;
        EyePos.style.top = "42%";
        return
    }else{
        NameError.innerHTML ='';
        EyePos.style.top = "37%";
    }

    if(/^.*@gmail.com$/.test(NameVal) == false || /\s/.test(NameVal) == true){
        NameMes = `<h5 class="ErrorText">Email in wrong format!</h5>`
        NameError.innerHTML = NameMes;
        EyePos.style.top = "42%";
        return
    }else{
        NameError.innerHTML = '';
        EyePos.style.top = "37%";
    }

    if(PassVal == ""){
        PassMes = `<h5 class="ErrorText">Please type in your password</h5>`
        PassError.innerHTML = PassMes;
        return
    }else{
        PassError.innerHTML ='';
    }

    if(PassVal <= 6 || /[A-Z]\w*[0-9]\w*/.test(PassVal) == false){
        PassMes = `<h5 class="ErrorText">Password must have more than 6 characters and contain at least 1 capital letter, 1 number and 1 normal letter</h5>`
        PassError.innerHTML = PassMes;
        return
    }else{
        PassError.innerHTML ='';
    }

}

function ShowPass(){
    const InputType = document.querySelector("#pass");
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




