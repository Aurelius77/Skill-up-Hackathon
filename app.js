const bell = document.querySelector('.notif')
const alertModal = document.querySelector('.alert')
const menuBtn = document.querySelector('.name-cont')
const menu = document.querySelector('.menu')
const trialCard = document.querySelector('.trial')
const mobileTrialCard = document.querySelector('.mobile-trial')
const show = document.querySelector('.show')
const closeSteps = document.querySelector('.close')
const steps = document.querySelector('.steps')
const checked = document.querySelectorAll('.checked')
const unchecked = document.querySelectorAll('.unchecked')
const progress = document.querySelector('.progress-bar')

let completed = 0


let isStepOpen = false
let displayAlert = false
let displayMenu = false

/*PROGRESS BARS*/

unchecked.forEach((btn, index) => {
    btn.addEventListener('click', () => {

        completed += 1
        progress.style.width = `${completed * 20}%`
        document.querySelector('.progress-text').innerHTML = completed + ' /5 completed'
        unchecked[index].style.display = 'none';
        checked[index].style.display = 'block';
    })
})

checked.forEach((btn, index) => {
    btn.addEventListener('click', () => {

        completed -= 1
        progress.style.width = `${completed * 20}%`
        document.querySelector('.progress-text').innerHTML = completed + ' /5 completed'
        unchecked[index].style.display = 'block';
        checked[index].style.display = 'none';
    })
})

/*CLOSE STEPS CONTAINER*/

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


/*delete the trial modal*/
document.querySelectorAll('.delete').forEach((btn) => {
    btn.addEventListener('click', () => {
        trialCard.style.display = 'none'
        mobileTrialCard.style.display = 'none'
    })
})


/*TOGGLE THE MENU*/
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


/*TOGGLE THE ALERTS*/
bell.addEventListener('click', () => {
    displayAlert = !displayAlert

    if (displayAlert) {
        alertModal.style.display = 'block'
    }
    else {
        alertModal.style.display = 'none'
    }

})

const stepBox = document.querySelectorAll('.step');

stepBox.forEach((step) => {
    let isStepOpen = false;

    step.addEventListener('click', () => {
        const info = step.querySelector('.info');

        const allOtherInfos = document.querySelectorAll('.info:not(.info-' + step.id + ')');
        allOtherInfos.forEach((otherInfo) => {
            otherInfo.classList.remove('open');
        });

        if (isStepOpen) {
            info.classList.remove('open');
        } else {
            info.classList.add('open');
        }

        isStepOpen = !isStepOpen;

        if (!isStepOpen) {
            const nextStep = step.nextElementSibling;
            if (nextStep) {
                const nextInfo = nextStep.querySelector('.info');
                nextInfo.classList.add('open');
                isStepOpen = true;
            }
        }
    });
});


