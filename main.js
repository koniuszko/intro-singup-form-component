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

    // let first_nameSuccess = false
    // let last_nameSuccess = false
    // let emailSuccess = false
    // let passwordSuccess = false

    // const first_nameValid = () => {
    //     if () {
    //         first_nameSuccess = true
    //     }
    // }

    // const last_nameValid = () => {
    //     if (last_name.value.length > 0) {
    //         last_nameSuccess = true
    //     }
    // }

    // const emailValid = () => {
    //     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    //         emailSuccess = true
    //     }
    // }

    // const passwordValid = () => {
    //     if (password.value.length > 0) {
    //         passwordSuccess = true
    //     }
    // }



    if (!first_name.value.length > 0) {
        first_nameErrIcon.classList.add('show')
        first_nameErrMessage.classList.add('show')
    } else if (first_name.value.length > 0 && )

}



submit_btn.addEventListener('click', (e) => {
    e.preventDefault()
    formValid()
})