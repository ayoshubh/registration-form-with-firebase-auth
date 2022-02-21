  // Import the functions you need from the SDKs you need
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDlmokse-C9wnF8hZeQ0rvbgLAfOCFzNmw",
    authDomain: "fetch-data-aa1d6.firebaseapp.com",
    databaseURL: "https://fetch-data-aa1d6-default-rtdb.firebaseio.com",
    projectId: "fetch-data-aa1d6",
    storageBucket: "fetch-data-aa1d6.appspot.com",
    messagingSenderId: "726799531147",
    appId: "1:726799531147:web:ccff8df3413fc74309e88e"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(); 
    let register_btn = document.getElementById("register_btn");
    register_btn.addEventListener("click", function () {
        let email = document.getElementById("email");
        let password = document.getElementById("password");
        createUserWithEmailAndPassword(auth, email.value, password.value)
        .then ( (userCredential) => {
           // Signed in
            const user = userCredential.user;
           // ...
           alert("User registered")
           console.log("User Logged in", user)
           email.value = "";
           password.value = "";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage= error.message;
            console.log("error Message", errorMessage)
            //
          });
      });

      let login_btn = document.getElementById("login_btn");
        login_btn.addEventListener ("click", function () {
         let login_email = document.getElementById("login_email");
         let login_password = document.getElementById("login_password");
         signInWithEmailAndPassword(auth, login_email.value, login_password.value)
        .then((userCredential) => {
        // signed in
        
        const user = userCredential.user;
        alert("User Logged in")
        console.log("User =>", user)
        window.location = "http://www.google.com";
        })
        .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       console.log("Error", errorMessage)
    });
});