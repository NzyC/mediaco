const realTimeElem = document.getElementById("real_time")

function getCurrentTime() {
  const date = new Date();
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';

  // Convert hours from 24-hour to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  // Format minutes and seconds to ensure two digits
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

  realTimeElem.innerHTML = `${hours}:${formattedMinutes}${ampm}`;

  window.requestAnimationFrame(getCurrentTime)
}

window.requestAnimationFrame(getCurrentTime)