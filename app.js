const emailElement = document.querySelector('#email')
//const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
const password1 = document.querySelector('#password')
const password2 = document.querySelector('#confirm-password')
const validPassword = document.querySelector('.form-container .input-container input')
const errorMsg = document.querySelector('.errorPW')
const btn = document.querySelector('button')
const inputs = document.querySelectorAll('input')
const errors = document.querySelectorAll('.error')

emailElement.addEventListener('input', () => {
    let inputValue = emailElement.value;
    console.log(inputValue)
    if (/@\w*(.com|.ca|.org)/.test(inputValue) === false){
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
        errorMsg.textContent = "* Passwords do not match"
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



btn.addEventListener('click', () => {
    inputs.forEach((input)=>{
        if (input.value === '') {
            input.style.border = '2px solid red';
            input.style.borderRadius = '5px';
            errors.forEach((error)=>{
                error.textContent = 'This is a required field';
                error.style.color = 'red';
                error.style.visibility = 'visible'
            })
        }
    })
})

inputs.addEventListener('input', () =>{
    inputs.forEach((input)=>{
        if(input.value !== '')
            input.style.border = '2px solid green';
            input.style.borderRadius = '5px';
    })
})