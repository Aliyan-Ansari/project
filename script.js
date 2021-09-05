function signup(){
let id = new Date().getTime();
let userName = document.getElementById('fullName').value;
let email = document.getElementById('email').value;
let pass = document.getElementById('password').value;
let signupData = {
    id : id ,
    username : userName,
    email : email , 
    password :  pass
}
let userData = [];
userData.push(signupData);
    localStorage.setItem(id,JSON.stringify(userData));
    window.location.replace("login.html");
    // let data = JSON.parse(localStorage.getItem(""))
    // console.log(data);
    // console.log(signupData);
}