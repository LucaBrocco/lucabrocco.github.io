<script type="module">
  // Import the functions you need from the Firebase SDK
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
  import { getFirestore, collection, addDoc, getDocs, orderBy, query } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-firestore.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-analytics.js";

  // Your web app's Firebase configuration
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

  // Initialize Firestore
  const db = getFirestore(app);

  // Get the HTML elements
  const postForm = document.getElementById('post-form');
  const postText = document.getElementById('post-text');
  const postsList = document.getElementById('posts-list');

  // Event listener for form submission
  postForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the form from submitting in the default way
    
    const message = postText.value.trim();
    
    if (message) {
      // Save the new post to Firestore
      await addDoc(collection(db, 'posts'), {
        text: message,
        timestamp: new Date(),
      });
      
      // Clear the form and refresh the posts list
      postText.value = '';
      loadPosts();
    }
  });

  // Function to load posts from Firestore
  async function loadPosts() {
    const postsRef = collection(db, 'posts');
    const q = query(postsRef, orderBy('timestamp', 'desc'));
    const snapshot = await getDocs(q);

    postsList.innerHTML = ''; // Clear the current list

    snapshot.forEach(doc => {
      const post = doc.data();
      const postItem = document.createElement('li');
      postItem.innerHTML = `<p>${post.text}</p>`;
      postsList.appendChild(postItem);
    });
  }

  // Initial load of posts when the page is loaded
  loadPosts();
</script>

