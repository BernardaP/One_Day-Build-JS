console.log("Sanity Check")

const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  
  const now = new Date();
  //seconds
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds/60) * 360) + 90;
  secondHand.style.transform =`rotate(${secondsDegrees}deg)`;
  // minutes
  const mins = now.getMinutes();
  const minutesDegrees = ((mins/60)*360) + 90;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;
  //hours
  const hours = now.getHours();
  const hoursDegrees = ((hours/12)* 360) +90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

//   console.log(seconds, mins, hours);      
}

setInterval(setDate, 1000);
