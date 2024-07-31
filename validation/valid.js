const emailInput = document.getElementById('emailInput');
const emailCheker = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

emailInput.addEventListener('input', () => {
    const isValid = emailCheker.test(emailInput.value);
    if (!isValid) {
        emailInput.setCustomValidity('Введите корректный емайл адрес');
    } else {
        emailInput.setCustomValidity('');
    }
});

function validatePassword() {
    const checkPassword = new RegExp('^[a-zA-Z0-9_.-]*$')
    const password = document.getElementById('inputPassword');
    password.addEventListener("input", () => {
        console.log(checkPassword.exec(password.value));
        if (checkPassword.exec(password.value) == null)
            password.setCustomValidity("Вы ошиблись. Можно вводить a-zA-Z0-9_.-");
        else {
            if (password.value.length >= 5)
                password.setCustomValidity("");
            else
                password.setCustomValidity("Должно  быть больше 5 символов");
        }
    });
}
validatePassword()