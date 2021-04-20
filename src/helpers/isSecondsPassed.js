export default function isSecondsPassed(seconds, oldDate) {
  const today = new Date();
  const todayInMS = today.getTime();
  const oldDateInMS = oldDate.getTime();
  const result = todayInMS - oldDateInMS;
  return Math.round(result / 1000) >= seconds;
}

