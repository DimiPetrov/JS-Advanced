function notify(message) {
  let notificationDiv = document.getElementById('notification');
  notificationDiv.textContent = message;
  notificationDiv.style.display = 'block';
  notificationDiv.setAttribute('data-notification-set', 'true');

  let dataNotificationAttribute = notificationDiv.getAttribute('data-notification-set');
  if(dataNotificationAttribute === 'true') {
    notificationDiv.addEventListener('click', notifiationDivClichandler);
  }

  function notifiationDivClichandler() {
    let notificationDiv = document.getElementById('notification');
    notificationDiv.style.display = 'none';
  }
}