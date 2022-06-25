export const formatMinutes = (valueInMinutes) => {
  if (!parseInt(valueInMinutes)) {
    return '00:05:00';
  } else {
    const minutesInteger = parseInt(valueInMinutes);
    let hours = Math.floor(minutesInteger / 60);
    let minutes = Math.floor((minutesInteger - (hours * 3600) / 60));
    let seconds = Math.floor((minutesInteger * 60) - (hours * 3600) - (minutes * 60));
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    return hours + ':' + minutes + ':' + seconds;
  }
};
