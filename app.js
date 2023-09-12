const emailElement = document.querySelector('#email')
const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
const password1 = document.querySelector('#password')
const password2 = document.querySelector('#confirm-password')
const validPassword = document.querySelector('.form-container .input-container input')
const errorMsg = document.querySelector('.errorPW')

emailElement.addEventListener('input', () => {
    let inputValue = emailElement.value;
    console.log(inputValue)
    if (/@\w*(.com|.ca|.org)/.test(inputValue) === false){          // regular expressions are cool
        emailElement.style.border = '2px solid red';
        emailElement.style.borderRadius = '5px';
    } else {
        emailElement.style.border = '2px solid green';
        emailElement.style.borderRadius = '5px'
    }
})


const checkPasswords = () => {
    let password1Value = password1.value;
    let password2Value = password2.value;
    
    if(!password2Value){
        //password1.style.border = '2px solid green';
        //password1.style.borderRadius = '5px';
    } else if (password1Value != password2Value) {
        password1.style.border = '2px solid red';
        password2.style.border = '2px solid red';
        password1.style.borderRadius = '5px';
        password2.style.borderRadius = '5px';
        errorMsg.textContent = "Passwords do not match"
        errorMsg.style.visibility = 'visible'
        errorMsg.style.color = 'red'
    } else {
        password1.style.border = '2px solid green';
        password2.style.border = '2px solid green';
        password1.style.borderRadius = '5px';
        password2.style.borderRadius = '5px';
        errorMsg.textContent = "Passwords match"
        errorMsg.style.visibility = 'visible'
        errorMsg.style.color = 'green'
    }
}

password1.addEventListener('input', checkPasswords)
password2.addEventListener('input', checkPasswords)