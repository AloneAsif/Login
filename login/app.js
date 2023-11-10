
const firebaseConfig = {
  apiKey: "AIzaSyAOh2GS2KEYi54iD13mb7iaBZHy7xowBBw",
  authDomain: "auth-107f7.firebaseapp.com",
  projectId: "auth-107f7",
  storageBucket: "auth-107f7.appspot.com",
  messagingSenderId: "551122411161",
  appId: "1:551122411161:web:80385453e142631261e208"
};

// Initialize Firebase
var firebase = firebase.initializeApp(firebaseConfig);

function getValue(){
    var Email = document.getElementById("Email");
    var password = document.getElementById("password");

    firebase.auth().createUserWithEmailAndPassword(Email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
   console.log(errorMessage)
  });

}


//  Sign up button 

var sign = document.getElementById('signUp');

function signUp(){
    window.location.href  = 'index02.html'
}

function getValue3(){
    window.location.href  = 'index.html'


}

function getValue2(){
    var Email1 = document.getElementById('Email1');
    var password1 = document.getElementById('password1');

    firebase.auth().createUserWithEmailAndPassword(Email1.value, password1.value)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      console.log(user)
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
    });
}

// Forget password

function forgotPassword(){
  var Email1 = document.getElementById('Email1');


  firebase.auth().sendPasswordResetEmail(Email1.value)
  .then(() => {
    alert("Your message for reset password send....")
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });
}

//  Gmail login

function googleLogin(){

  

  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user)
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}