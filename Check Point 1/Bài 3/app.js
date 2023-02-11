

let userInfo = {}

function register(){
    var username = document.getElementById("name").value;
    var password = document.getElementById("pass").value;
    var dob = document.getElementById("dob").value;
    var gender = document.getElementById("gen").value;


    if(username != '' && password != '' && dob != ''){
        userInfo = {
            name: username,
            pass: password,
            birth: dob,
            sex: gender
        }

        InfoString = JSON.stringify(userInfo)
        localStorage.setItem('UserStored', InfoString)

        location.replace("./show.html")
    }else{
        alert('missing input')
    }

}

