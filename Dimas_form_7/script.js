
const togglePassword = document.querySelector('#toggle-password');
const password = document.querySelector('#password');

password.type = 'password'; 
togglePassword.src = '../asset/view.png'; 

togglePassword.addEventListener('click', function () {

    const type = password.type === 'password' ? 'text' : 'password';
    password.type = type;

    
    const newSrc = password.type === 'password' ? '../asset/view.png' : '../asset/hide.png';
    togglePassword.src = newSrc;
});
