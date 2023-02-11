var na = document.getElementById('iden')
var pa = document.getElementById('code')
var da = document.getElementById('born')
var ge = document.getElementById('gend')

window.addEventListener('load', function(){
    UserOut = localStorage.getItem('UserStored')
    UserDis = JSON.parse(UserOut)

    na.innerHTML = UserDis.name;
    pa.innerHTML = UserDis.pass;
    da.innerHTML = UserDis.birth;
    ge.innerHTML = UserDis.sex;
})



