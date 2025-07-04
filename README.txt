
# 🚀 Firebase Setup Guide for Your Website

This guide will help you set up Firebase Authentication for your website.

---

## ✅ Step 1: Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **Add Project**
3. Name your project and follow the on-screen steps

---

## ✅ Step 2: Enable Email/Password Authentication
1. In Firebase Console, go to **Authentication**
2. Click **Sign-in method**
3. Enable **Email/Password** login
4. (Optional) Enable **Email verification** under templates

---

## ✅ Step 3: Add Web App to Firebase
1. In your Firebase project, click the **Web icon (</>)**
2. Register your web app (any name)
3. Copy the Firebase configuration (apiKey, authDomain, etc.)

---

## ✅ Step 4: Add Firebase SDK to Your Website
In your `index.html` and other pages, paste the following before `</body>`:

```
<script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js"></script>
<script>
  const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  firebase.initializeApp(firebaseConfig);
</script>
```

Replace all values with your Firebase config from Step 3.

---

## ✅ Step 5: Hosting (Optional)
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Run `firebase login`
3. Initialize project: `firebase init` → choose Hosting
4. Deploy: `firebase deploy`

---

Enjoy your secure website! 🔐
