// optless function
function otpless(otplessUser) {
  const token = JSON.stringify(otplessUser);
  console.log(token);
  // stored User details information in localstoarge
  localStorage.setItem("userData", token);
  // if user is there then page redirect to UserDetails page
  window.location.href = "./UserDetails/UserDetails.html";
}
