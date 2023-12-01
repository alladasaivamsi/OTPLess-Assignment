// Access all the information from the UserDetails.html file
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userMobileNumber = document.getElementById("userMobileNumber");
const userWhatAppNumber = document.getElementById("userWhatAppNumber");
const userTimeStamp = document.getElementById("userTimeStamp");
const userTimeZone = document.getElementById("userTimeZone");
const userToken = document.getElementById("userToken");
const logOutBtn = document.getElementById("logOutBtn");

// showUserDetails function
function showUserDetails() {
  // To get the all the information from the localStorage which is stored as a userData
  const userDetails = JSON.parse(localStorage.getItem("userData"));
  // if user successfully autheticated and iterate all the inforamtion from the localstorage and display on the web browser
  if (userDetails) {
    userName.innerText = userDetails.email.name;
    userEmail.innerText = userDetails.email.email;
    userMobileNumber.innerText = userDetails.mobile.number;
    userWhatAppNumber.innerText = userDetails.waNumber;
    userTimeStamp.innerText = userDetails.timestamp;
    userTimeZone.innerText = userDetails.timezone;
    userToken.innerText = userDetails.token;
  }
  // if user not successfully autheticated (authetication failure) then there is no information in the localstorage
  else {
    window.location.href = "../index.html";
  }
}

showUserDetails();

// when clicking on the logOut Button and its redirect to the otpless logIn page and removes all the information from the localstorage which is already stored as "clickData"
logOutBtn.addEventListener("click", () => {
  localStorage.removeItem("userData");
  showUserDetails();
});

// when the page reloads, the page is not redirect to otpless logIn page when we are in userDetails Page
window.onload = () => {
  showUserDetails();
};
