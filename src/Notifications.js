// src/Notifications.js
function Notifications({ notifications }) {
  if (notifications <= 0) {
    // Rien à afficher
    return null;
  }

  return <p>Vous avez des notifications.</p>;
}

export default Notifications;
