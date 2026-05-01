import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyCVxIpw5QZugmO6ahrGm9mhzR3qO-6uwLI",
  authDomain: "task-app-3ee4a.firebaseapp.com",
  projectId: "task-app-3ee4aD",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



// ================= SIGNUP =================
document.getElementById("signupBtn")?.addEventListener("click", () => {

  let email = document.getElementById("signupEmail").value;
  let pass = document.getElementById("signupPassword").value;

  createUserWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {

    sendEmailVerification(userCredential.user);

    alert("Verification email sent!");
    window.location.href = "index.html";

  })
  .catch(err => alert(err.message));
});



// ================= LOGIN =================
document.getElementById("loginBtn")?.addEventListener("click", () => {

  let email = document.getElementById("loginEmail").value;
  let pass = document.getElementById("loginPassword").value;

  signInWithEmailAndPassword(auth, email, pass)
  .then((user) => {

    if (user.user.emailVerified) {
      alert("Login Success!");
      window.location.href = "dashboard.html";
    } else {
      alert("Please verify your email first!");
    }

  })
  .catch(err => alert(err.message));
});



// ================= NAVIGATION =================
window.goSignup = () => {
  window.location.href = "signup.html";
};

window.goLogin = () => {
  window.location.href = "index.html";
};

window.goForgot = () => {
  window.location.href = "forgot.html";
};
function logout() {
  hideAll();
  document.getElementById('login').classList.remove('hidden');
  document.getElementById('header').innerText = "Login";
}

function forgotPassword() {
  hideAll();
  document.getElementById('reset').classList.remove('hidden');
  document.getElementById('header').innerText = "Reset Password";
}



// ================= PASSWORD TOGGLE =================
window.togglePassword = function(id, icon) {
  let input = document.getElementById(id);

  if (input.type === "password") {
    input.type = "text";
    icon.innerHTML = "🙈";
  } else {
    input.type = "password";
    icon.innerHTML = "👁";
  }
};
