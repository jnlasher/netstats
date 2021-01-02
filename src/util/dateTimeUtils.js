export function secondsToTime(s) {
  const days = Math.floor(s / (24 * 60 * 60));
  s %= 24 * 60 * 60;
  const hours = Math.floor(s / (60 * 60));
  s %= 60 * 60;
  const minutes = Math.floor(s / 60);
  s %= 60;
  const seconds = s;
  return days + ':' + hours + ':' + minutes + ':' + seconds;
}

const timeStrings = ['days', 'hours', 'mintues', 'seconds'];

export function timesToLongString(s) {
  const rc = [];
  const timesArr = s.split(':');
  for (let i = 0; i < timesArr.length; i++) {
    rc.push(timesArr[i]);
    rc.push(timeStrings[i]);
  }
  return rc.join(' ');
}
