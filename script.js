// TIME VARIABLES
const days = document.getElementById('days')
const hr = document.getElementById('hours')
const min = document.getElementById('minutes')
const sec = document.getElementById('seconds')

// DATE VARIALES
const month = document.getElementById('month')
const dayOfWeek = document.getElementById('dayOfWeek')
const year = document.getElementById('year')
const day = document.getElementById('day')

// FORM VARIABLES
const formDiv = document.getElementById('form')
const countDownTitleInput = document.querySelector('input[type="text"]')
const countDownDateInput = document.querySelector('input[type="date"]')

const countDownTitle = document.getElementById('countdown-title')

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault()
    formDiv.classList.add('hide')
    const countDate = countDownDateInput.value
    countDownTitle.innerHTML = `${countDownTitleInput.value}<p style="font-size:0.9rem">${new Date(countDate).toLocaleDateString('default', {weekday: 'short'})}, ${new Date(countDate).toLocaleDateString('default', {month: 'short'})} ${new Date(countDate).getUTCDate()} ${new Date(countDate).getFullYear()}</p>`
    countDownTitle.classList.remove('hide')

    // TIME
    function countdown() {
        let currentDate = new Date()
        let mainDate = new Date(countDate)

        const timeDiff = mainDate - currentDate
        const totalSec = timeDiff / 1000

        const day = Math.floor(totalSec / 3600 / 24)
        const hours = Math.floor(totalSec / 3600) % 24;
        const minutes = Math.floor(totalSec / 60) % 60; 
        const seconds = Math.floor(totalSec) % 60;

        days.innerHTML = `${formatTime(day)}`
        hr.innerHTML = `${formatTime(hours)}`
        min.innerHTML = `${formatTime(minutes)}`
        sec.innerText = `${formatTime(seconds)}`
        
    }

    countdown()

    setInterval(countdown, 1000)
})


// DATE
let currentDay = new Date()
dayOfWeek.innerHTML = `${currentDay.toLocaleDateString('default', {weekday: 'short'})},`
month.innerHTML = currentDay.toLocaleDateString('default', {
    month: 'long'
})
year.innerHTML = currentDay.getFullYear()
day.innerHTML = currentDay.getUTCDate()

// FORMATE TIME TO HAVE A ZERO BEFORE TIME IF IT IS LESS THAN 10 e.g 09, 08, 00, etc
function formatTime(time) {
    return time < 10 ? `0${time}` : time
}