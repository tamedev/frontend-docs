

function getOutOfMyTool() {
  var myelement = document.getElementById('body');
  myelement.innerHTML =
    '<div>' +
      '<form onsubmit="authUser(); return false;">' +
        '<input id="email" type="text" placeholder="email" required />' +
        '<input id="password" type="password" placeholder="password" required />' +
        '<button type="submit">sign in</button>' +
      '</form>' +
    '</div>';
}

function authUser() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function() {
      location.reload();
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      // ...
    });
}

function checkFirebaseAuth() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('user is signed in');
    } else {
      console.log('Not signed in');
      getOutOfMyTool();
    }
  });
}

window.onload = checkFirebaseAuth;
