const First = document.getElementById("error-firstname");
const Last = document.getElementById("error-lastname");
const Mail = document.getElementById("error-email");
const Pass = document.getElementById("error-password");
const ConPass = document.getElementById("error-conpassword");
const EyePos = document.getElementById("eyes")
const ConEyePos = document.getElementById("coneyes")


function check(){
    let FirstName = document.getElementById("firstname").value;
    let LastName = document.getElementById("lastname").value;
    let Email = document.getElementById("email").value;
    let Password = document.getElementById("password").value;
    let ConPassword = document.getElementById("conpassword").value;
    let ErrorText = ""

    if(FirstName == ''){
        ErrorText = `<h5>Missing Input</h5>`
        First.innerHTML = ErrorText
        EyePos.style.top = '65%'
        ConEyePos.style.top = '76%'
        return
    }else{
        First.innerHTML = ''
        EyePos.style.top = '60%'
        ConEyePos.style.top = '71%'
    }

    if(LastName == ''){
        ErrorText = `<h5>Missing Input</h5>`
        Last.innerHTML = ErrorText
        EyePos.style.top = '65%'
        ConEyePos.style.top = '76%'
        return
    }else{
        Last.innerHTML = ''
        EyePos.style.top = '60%'
        ConEyePos.style.top = '71%'
    }

    if(Email == ''){
        ErrorText = `<h5>Missing Input</h5>`
        Mail.innerHTML = ErrorText
        EyePos.style.top = '65%'
        ConEyePos.style.top = '76%'
        return
    }else{
        Mail.innerHTML = ''
        EyePos.style.top = '60%'
        ConEyePos.style.top = '71%'
    }

    if(Password == ''){
        ErrorText = `<h5>Missing Input</h5>`
        Pass.innerHTML = ErrorText
        ConEyePos.style.top = '76%'
        return
    }else{
        Pass.innerHTML = ''
        EyePos.style.top = '60%'
        ConEyePos.style.top = '71%'
    }
    
    if(ConPassword == ''){
        ErrorText = `<h5>Missing Input</h5>`
        ConPass.innerHTML = ErrorText
        return
    }else{
        ConPass.innerHTML = ''
    }

    if(/\s/.test(Email) == true || /^.*@gmail.com$/.test(Email) == false){
        ErrorText = `<h5>Email in the wrong format!</h5>`
        Mail.innerHTML = ErrorText
        EyePos.style.top = '65%'
        ConEyePos.style.top = '76%'
        return
    }else{
        ConPass.innerHTML = ''
        EyePos.style.top = '60%'
        ConEyePos.style.top = '71%'
    }

    if(/[A-Z]\w*[0-9]\w*/.test(Password) == false || Password.length <= 6){
        ErrorText = `<h5>Password must contain more than 6 characters and at least 1 capital letter, 1 number and 1 normal letter`
        Pass.innerHTML = ErrorText
        ConEyePos.style.top = '79.5%'
        return
    }else{
        Pass.innerHTML = ''
        ConEyePos.style.top = '71%'
    }

    if(Password != ConPassword){
        ErrorText = `<h5>Password confirmation failed, please type again</h5>`
        ConPass.innerHTML = ErrorText
        return
    }else{
        Pass.innerHTML = ''
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
