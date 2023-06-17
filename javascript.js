function showPopUp() {
  var modal = document.querySelector(".modal-box");
  var profile = document.querySelector(" #profile");
  profile.style.borderBottom = "3px solid rgb(252, 35, 140)";
  modal.style.visibility = "visible";
}
function hidePopUp() {
  var modal = document.querySelector(".modal-box");
  var profile = document.querySelector(" #profile");
  modal.style.visibility = "hidden";
  profile.style.border = "none";
  profile.style.borderBottom = "3px solid transparent";
}
