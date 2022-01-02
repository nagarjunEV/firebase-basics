

//global variable
console.log(firebase)

const auth = firebase.auth();

const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');
const userDetails = document.getElementById('userDetails');
const whenSignedOut = document.getElementById('whenSignedOut');
const whenSignedIn = document.getElementById('whenSignedIn');

const provider = new firebase.auth.GoogleAuthProvider();

signInBtn.onclick = () => {
    auth.signInWithPopup(provider);
}

signOutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged(user => {
    if (user) {
        // signed in
        whenSignedIn.hidden = false;
        whenSignedOut.hidden = true;
        userDetails.innerHTML = `<h3>Hello ${user.displayName}! with User UID - ${user.uid}</h3>`;
    } else {
        // signed out
        whenSignedIn.hidden = true;
        whenSignedOut.hidden = false;
        userDetails.innerHTML = '';
    }
});