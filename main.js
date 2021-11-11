const submit_btn = document.querySelector('.form_submit')
const first_name = document.querySelector('.first_name')
const last_name = document.querySelector('.last_name')
const email = document.querySelector('.email')
const password = document.querySelector('.password')

const first_nameErrIcon = document.querySelector('img.first_name_err')
const last_nameErrIcon = document.querySelector('img.last_name_err')
const emailErrIcon = document.querySelector('img.email_err')
const passwordErrIcon = document.querySelector('img.password_err')

const first_nameErrMessage = document.querySelector('p.first_name_err')
const last_nameErrMessage = document.querySelector('p.last_name_err')
const emailErrMessage = document.querySelector('p.email_err')
const passwordErrMessage = document.querySelector('p.password_err')



const formValid = () => {

    const conditionsArray = {
        first_nameValid: false,
        last_nameValid: false,
        emailValid: false,
        passwordValid: false,
    }

    if (first_name.value.length > 0) {
        first_nameErrIcon.classList.remove('show')
        first_nameErrMessage.classList.remove('show')
        conditionsArray.first_nameValid = true
    } else {
        first_nameErrIcon.classList.add('show')
        first_nameErrMessage.classList.add('show')
        conditionsArray.first_nameValid = false
    }
    if (last_name.value.length > 0) {
        last_nameErrIcon.classList.remove('show')
        last_nameErrMessage.classList.remove('show')
        conditionsArray.last_nameValid = true
    } else {
        last_nameErrIcon.classList.add('show')
        last_nameErrMessage.classList.add('show')
        conditionsArray.last_nameValid = false
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        emailErrIcon.classList.remove('show')
        emailErrMessage.classList.remove('show')
        conditionsArray.emailValid = true
    } else {
        emailErrIcon.classList.add('show')
        emailErrMessage.classList.add('show')
        conditionsArray.emailValid = false
    }
    if (password.value.length > 0) {
        passwordErrIcon.classList.remove('show')
        passwordErrMessage.classList.remove('show')
        conditionsArray.passwordValid = true
    } else {
        passwordErrIcon.classList.add('show')
        passwordErrMessage.classList.add('show')
        conditionsArray.passwordValid = false
    }

    if (conditionsArray.first_nameValid && conditionsArray.last_nameValid && conditionsArray.emailValid && conditionsArray.passwordValid) {
        first_name.value = ""
        last_name.value = ""
        email.value = ""
        password.value = ""
        // send data 
    }
}



submit_btn.addEventListener('click', (e) => {
    e.preventDefault()
    formValid()
})