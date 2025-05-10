// Firebase config
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAgvx2ETTN__Vwyrr0SLZlMvI7wf5AcJ9g",
    authDomain: "my-website-a33ec.firebaseapp.com",
    projectId: "my-website-a33ec",
    storageBucket: "my-website-a33ec.firebasestorage.app",
    messagingSenderId: "504420669059",
    appId: "1:504420669059:web:01141f0eef5fc16866adb6",
    measurementId: "G-F87YLP7NEV"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const form = document.getElementById('post-form');
const textarea = document.getElementById('post-text');
const postsList = document.getElementById('posts-list');

// Submit post
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const text = textarea.value.trim();
  if (text) {
    await db.collection('posts').add({ text, created: new Date() });
    textarea.value = '';
    loadPosts();
  }
});

// Load posts
async function loadPosts() {
  postsList.innerHTML = '';
  const snapshot = await db.collection('posts').orderBy('created', 'desc').get();
  snapshot.forEach(doc => {
    const li = document.createElement('li');
    li.textContent = doc.data().text;
    postsList.appendChild(li);
  });
}

loadPosts();

