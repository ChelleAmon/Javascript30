const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();

    const sec = now.getSeconds();
    const secDegrees = ((sec /60) * 360) + 90;
    secondHand.style.transform = `rotate(${secDegrees}deg)`;

    const min = now.getMinutes();
    const minDegrees = ((min / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minDegrees}deg)`;

    const hr = now.getHours();
    const hrDegrees = ((hr / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hrDegrees}deg)`;

    console.log(hr);
}

setInterval(setDate, 1000);
