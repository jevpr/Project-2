//General Variables
console.log("Hello World!");

//Stores the input from the form and redirects
function saveDataAndRedirect(event) {
  event.preventDefault();
  const quizTitle = document.getElementById("quizTitle").value;
  const about = document.getElementById("about").value;
  const questionAmount = document.getElementById("questionAmount").value;
  window.sessionStorage.setItem("quizTitle", quizTitle);
  window.sessionStorage.setItem("about", about);
  window.sessionStorage.setItem("questionAmount", questionAmount);
  window.location.href = "step-two.html";
  console.log("data saved");
}

//Loads your inputs and inserts into HTML
function loadData() {
  const updatedTitle = document.getElementById("updatedTitle");
  const updatedAbout = document.getElementById("updatedAbout");

  const quizTitle = window.sessionStorage.getItem("quizTitle");
  const about = window.sessionStorage.getItem("about");

  if (quizTitle && about) {
    updatedTitle.innerHTML = quizTitle;
    updatedAbout.innerHTML = about;
  } else if (quizTitle && !about) {
    updatedTitle.innerHTML = quizTitle;
    updatedAbout.style.display = "none";
  } else {
    updatedTitle.innerHTML = "Oops! Something has gone wrong.";
    updatedAbout.innerHTML =
      'Please reload the homepage <a href="index.html">here</a>.';
    updatedAbout.style.display = "block";
  }

  console.log("Data loaded");
}

//Calls the function which will populate the form on step-two
/*For now, the function is called when DOMcontent loads. 
However, if you want to load specifically on /step-two, swap in 
the code that's in the comment below*/
document.addEventListener("DOMContentLoaded", function () {
  /*if (window.location.pathname === "/step-two.html") {
    loadData();
    console.log("Function called");
  }*/
  loadData();
  console.log("Function called");
});
