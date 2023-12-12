// Hide the personal information function
function handleSubmit() {
  // Taking the input email with lowercase format
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  // Taking the error email from paragraph
  const errorEmail = document.getElementById("error-email");
  //   Checking the input email is correct or not
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const checkEmail = emailValue.match(regex);
  // Show the personal information
  const sectionPersonal = document.querySelector(".personal-info");
  console.log(sectionPersonal);
  //   Control the submit content
  const submitControl = document.querySelector(".submit-email");
  if (checkEmail) {
    sectionPersonal.style.display = "block";
    submitControl.style.display = "none";
  } else {
    errorEmail.innerHTML = "Vui lòng nhập đúng định dạng Email";
    errorEmail.style.color = "#B04759";
    errorEmail.style.fontWeight = "bold";
  }
}
// Hide the job information function
function handleOnMouseOver(element) {
  // Display the content
  const viewMore = element.querySelector(".control-view");
  viewMore.style.display = "inline-block";
}
// Unhide the job information function
function handleOnMouseOut(element) {
  // Hide the content
  const viewMore = element.querySelector(".control-view");
  if (!viewMore.classList.value.includes("view-less")) {
    viewMore.style.display = "none";
  }
}
// Control the view function
function handleViewMore(element) {
  // Choose the closest father element to show or hide the content
  const selectedElement = element.closest(".job-info-selected");
  // Choose the control view div
  const viewMore = selectedElement.querySelector(".control-view");
  // Choose the content div
  const sectionContent = selectedElement.querySelectorAll(".section-content");
  // Condition for the View button
  if (viewMore.classList.contains("view-more")) {
    sectionContent.forEach((element) => {
      element.style.display = "flex";
    });
    viewMore.classList.remove("view-more");
    viewMore.classList.add("view-less");
    viewMore.innerHTML = "🔺View less";
  } else {
    sectionContent.forEach((element) => {
      element.style.display = "none";
    });
    viewMore.classList.remove("view-less");
    viewMore.classList.add("view-more");
    viewMore.innerHTML = "🔻View more";
  }
}
