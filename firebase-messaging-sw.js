// firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDOImaiQRMjC_8vYfdr--Nxov2U5LsFFjQ",
  authDomain: "go-ridor.firebaseapp.com",
  projectId: "go-ridor",
  storageBucket: "go-ridor.firebasestorage.app",
  messagingSenderId: "448436270670",
  appId: "1:448436270670:web:05dc50030f935c583ab51f"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("[firebase-messaging-sw.js] Received background message:", payload);
  const { title, body } = payload.notification;
  self.registration.showNotification(title, { body });
});
