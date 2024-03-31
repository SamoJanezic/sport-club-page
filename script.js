const DaysToCountDown = ["March 31, 2024 22:30:00", "April 2, 2024 00:00:00"];

// const countDownToDate = new Date("April 1, 2024 00:00:00").getTime();

setInterval(function() {
    let now = new Date().getTime();
    let distance = new Date(DaysToCountDown[0]) - now;
    let days = addLeadingZero(Math.floor(distance / (1000 * 60 * 60 * 24)))
    let hours = addLeadingZero(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    let minutes = addLeadingZero(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    let seconds = addLeadingZero(Math.floor((distance % (1000 * 60)) / 1000));
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    if (distance < 0) {
        DaysToCountDown.shift();
    }
}, 1000);


function addLeadingZero(number) {
    if(number < 10)
        return "0" + number;
    else
        return number;
}