export default function copyToClipboard(text) {
  const elem = document.createElement('textarea');
  document.body.appendChild(elem);
  elem.value = text;
  elem.select();
  elem.setSelectionRange(0, 99999); // For mobile devices.
  document.execCommand('copy');
  document.body.removeChild(elem);
}
