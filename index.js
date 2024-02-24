const daysElem = document.getElementById('days')
const hoursElem = document.getElementById('hours')
const minutesElem = document.getElementById('minutes')
const secondsElem = document.getElementById('seconds')

// Set the date we're counting down to
const countDownDate = new Date('Sep 7, 2024 23:59:59').getTime()

// Update the count down every 1 second
const x = setInterval(function () {
    // Get today's date and time
    const now = new Date().getTime()

    // Find the distance between now and the countdown date
    const distance = countDownDate - now

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    // Output the result to the respective elements
    daysElem.innerText = days
    hoursElem.innerText = hours
    minutesElem.innerText = minutes
    secondsElem.innerText = seconds

    // If the count down is finished, stop the interval
    if (distance < 0) {
        clearInterval(x)
        daysElem.innerText = 0
        hoursElem.innerText = 0
        minutesElem.innerText = 0
        secondsElem.innerText = 0
    }
}, 1000)
