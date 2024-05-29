// Toggle Password Visibility
const registerEye = document.getElementById('register-eye');
const registerPass = document.getElementById('register-pass');
const registerConfirmEye = document.getElementById('register-confirm-eye');
const registerConfirmPass = document.getElementById('register-confirm-pass');

registerEye.addEventListener('click', () => {
    if (registerPass.type === 'password') {
        registerPass.type = 'text';
        registerEye.classList.replace('ri-eye-off-line', 'ri-eye-line');
    } else {
        registerPass.type = 'password';
        registerEye.classList.replace('ri-eye-line', 'ri-eye-off-line');
    }
});

registerConfirmEye.addEventListener('click', () => {
    if (registerConfirmPass.type === 'password') {
        registerConfirmPass.type = 'text';
        registerConfirmEye.classList.replace('ri-eye-off-line', 'ri-eye-line');
    } else {
        registerConfirmPass.type = 'password';
        registerConfirmEye.classList.replace('ri-eye-line', 'ri-eye-off-line');
    }
});