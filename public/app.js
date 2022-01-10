//global variable
console.log(firebase)

const auth = firebase.auth();

const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');
const userDetails = document.getElementById('userDetails');
const whenSignedOut = document.getElementById('whenSignedOut');
const whenSignedIn = document.getElementById('whenSignedIn');
const authHeading = document.getElementById('authHeading');

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
        authHeading.hidden = true;
        userDetails.innerHTML = `<div>
                                    <h3>Hello ${user.displayName}! with User UID - ${user.uid}</h3>
                                    <h6>Your email id ${user.email}</h6>
                                </div>`;
    } else {
        // signed out
        whenSignedIn.hidden = true;
        authHeading.hidden = false;
        whenSignedOut.hidden = false;
        userDetails.innerHTML = '';
    }
});