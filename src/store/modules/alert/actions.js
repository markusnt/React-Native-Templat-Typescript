export function alertData(title, message, buttons) {
  return {
    type: '@alert/ALERT_DATA',
    payload: { title, message, buttons },
  };
}
