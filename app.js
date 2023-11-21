const bell = document.querySelector('.notif')
const alertModal = document.querySelector('.alert')
const menuBtn = document.querySelector('.name-cont')
const menu = document.querySelector('.menu')
const trialCard = document.querySelector('.trial')
const mobileTrialCard = document.querySelector('.mobile-trial')
const show = document.querySelector('.show')
const closeSteps = document.querySelector('.close')
const steps = document.querySelector('.steps')


let displayAlert = false
let displayMenu = false

closeSteps.addEventListener('click', () => {
    steps.style.display = 'none'
    closeSteps.style.display = 'none'
    show.style.display = 'block'
})

show.addEventListener('click', () => {
    steps.style.display = 'flex'
    show.style.display = 'none'
    closeSteps.style.display = 'block'
})

document.querySelectorAll('.delete').forEach((btn) => {
    btn.addEventListener('click', () => {
        trialCard.style.display = 'none'
        mobileTrialCard.style.display = 'none'
    })
})

menuBtn.addEventListener('click', () => {
    displayMenu = !displayMenu
    console.log(displayMenu)
    if (displayMenu) {
        menu.style.display = 'flex'
    }
    else {
        menu.style.display = 'none'
    }

})


bell.addEventListener('click', () => {
    displayAlert = !displayAlert

    if (displayAlert) {
        alertModal.style.display = 'block'
    }
    else {
        alertModal.style.display = 'none'
    }

})

