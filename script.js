let loginform= document.querySelector('.my-form');
loginform.addEventListener('submit',(e)=>{
e.preventDefault();
let email = document.getElementById('email');
let password = document.getElementById('password')
console.log('Email:' ,email.value);
console.log("Password:", password.value);
});