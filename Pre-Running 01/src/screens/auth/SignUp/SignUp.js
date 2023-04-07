const PassError = document.getElementById("error-password");
const NameError = document.getElementById("error-email");

function check(){
    let PassVal = document.getElementById("pass").value;
    let NameVal = document.getElementById("name").value;
    let PassMes = ""
    let NameMes = ""


    if(PassVal == ""){
        PassMes = `<h5 class="ErrorText">Please type in your password</h5>`
        PassError.innerHTML = PassMes;
    }

    if(NameVal == ""){
        NameMes = `<h5 class="ErrorText">Please type in your username</h5>`
        NameError.innerHTML = NameMes;
    }
}