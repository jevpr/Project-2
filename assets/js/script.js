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

function loadEmptyQuestions() {
  const questionAmount = parseInt(
    window.sessionStorage.getItem("questionAmount")
  );
  if (isNaN(questionAmount) || questionAmount <= 0) {
    console.error("Invalid question amount");
    return; // If the question amount is invalid or not set, we exit.
  }

  const questionContainer = document.getElementById("questionContainer");

  // Clear any existing content before adding new questions (optional)
  questionContainer.innerHTML = "";

  for (let i = 1; i <= questionAmount; i++) {
    const questionBox = document.createElement("div");
    questionBox.classList.add("questionBox");

    // Create question and answers dynamically for better separation of concerns
    const questionLabel = document.createElement("label");
    questionLabel.textContent = `Question ${i}:`;
    questionLabel.classList.add("questionLabel");
    const questionInput = document.createElement("input");
    questionInput.type = "text";
    questionInput.placeholder = `Enter Question ${i}`;
    questionInput.classList.add("questionInput");
    questionInput.id = `Question${i}`;

    const answerLabel1 = document.createElement("label");
    answerLabel1.textContent = `Answer 1:`;
    answerLabel1.classList.add("answerLabel");
    const answerInput1 = document.createElement("input");
    answerInput1.type = "text";
    answerInput1.classList.add("answerInput");
    questionInput.id = `Question${i}.1`;

    const answerLabel2 = document.createElement("label");
    answerLabel2.textContent = `Answer 2:`;
    answerLabel2.classList.add("answerLabel");
    const answerInput2 = document.createElement("input");
    answerInput2.type = "text";
    answerInput2.classList.add("answerInput");
    questionInput.id = `Question${i}.2`;

    // Append everything to the questionBox
    questionBox.appendChild(questionLabel);
    questionBox.appendChild(questionInput);
    questionBox.appendChild(answerLabel1);
    questionBox.appendChild(answerInput1);
    questionBox.appendChild(answerLabel2);
    questionBox.appendChild(answerInput2);

    // Append the question box to the container
    questionContainer.appendChild(questionBox);
  }
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
  loadEmptyQuestions();
  console.log("Function called");
});
