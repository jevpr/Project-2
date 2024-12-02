//General Variables
console.log("Hello World!");
const questionContainer = document.getElementById("questionContainer");

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

  // Clear any existing content before adding new questions (optional)
  questionContainer.innerHTML = "";

  for (let i = 1; i <= questionAmount; i++) {
    const questionBox = document.createElement("div");
    questionBox.classList.add("questionBox");
    questionBox.id = i;

    // Create question label input
    const questionLabel = document.createElement("label");
    questionLabel.textContent = `Question ${i}:`;
    questionLabel.classList.add("questionLabel");
    const questionInput = document.createElement("input");
    questionInput.type = "text";
    questionInput.placeholder = `Enter Question ${i}`;
    questionInput.classList.add("questionInput");
    questionInput.id = `Question${i}`;

    //container for buttons
    const buttonContainer = document.createElement("div");
    buttonContainer.classList = "buttonContainer";

    //addAnswerbutton
    const addAnswer = document.createElement("button");
    addAnswer.innerHTML = " + Add Answer +";
    addAnswer.classList.add("addAnswer");

    //deleteAnswerButton
    const deleteAnswer = document.createElement("button");
    deleteAnswer.innerHTML = " - Delete answer -";
    deleteAnswer.classList.add("deleteAnswer");

    let answerCount = 0;

    //function for the addAnswer button
    addAnswer.addEventListener("click", function (event) {
      event.preventDefault();
      answerCount += 1;

      const parentId = this.parentElement.parentElement.id; // Access the parent's id
      console.log("Grandparent ID:", parentId);

      //Div to contain each individual answer and radios
      const answerBox = document.createElement("div");
      answerBox.classList.add("answerBox");

      //Answer Input
      const answerInput = document.createElement("input");
      answerInput.type = "text";
      answerInput.placeholder = `Enter Answer ${answerCount}...`;
      answerInput.classList.add("answerInput");
      answerInput.id = `Q: ${parentId} A: ${answerCount}`;

      //Answer radio right-wrong toggles
      const rightRadio = document.createElement("input");
      rightRadio.type = "radio";
      rightRadio.id = `Q:${parentId}_A:${answerCount}_RightRadio`;
      rightRadio.name = `Q:${parentId}_A:${answerCount}_Right/Wrong`;
      rightRadio.checked = true;
      rightRadio.classList.add("rightRadioClass");

      const wrongRadio = document.createElement("input");
      wrongRadio.type = "radio";
      wrongRadio.id = `Q:${parentId}_A:${answerCount}_WrongRadio`;
      wrongRadio.name = `Q:${parentId}_A:${answerCount}_Right/Wrong`;
      wrongRadio.classList.add("wrongRadioClass");

      //Right-wrong radio labels
      const rightLabel = document.createElement("label");
      rightLabel.innerHTML = "Right";
      rightLabel.for = `Q:${parentId}_A:${answerCount}_RightRadio`;
      rightLabel.classList.add("rightLabelClass");

      const wrongLabel = document.createElement("label");
      wrongLabel.innerHTML = "Wrong";
      wrongLabel.for = `Q:${parentId}_A:${answerCount}_RightRadio`;
      wrongLabel.classList.add("wrongLabelClass");

      questionBox.appendChild(answerBox);
      answerBox.appendChild(answerInput);
      answerBox.appendChild(rightLabel);
      rightLabel.prepend(rightRadio);
      answerBox.appendChild(wrongLabel);
      wrongLabel.prepend(wrongRadio);
    });

    deleteAnswer.addEventListener("click", function (event) {
      event.preventDefault();

      if (answerCount > 0) {
        // Get all elements with class 'answerBox' within questionBox
        const answerBoxes = questionBox.querySelectorAll(".answerBox");

        // Remove the last answerBox
        if (answerBoxes.length > 0) {
          questionBox.removeChild(answerBoxes[answerBoxes.length - 1]); // Remove the last box
        }

        answerCount -= 1; // Decrease the count
      }
    });

    // Append everything to the questionBox
    questionBox.appendChild(questionLabel);
    questionBox.appendChild(questionInput);
    questionBox.appendChild(buttonContainer);

    buttonContainer.appendChild(addAnswer);
    buttonContainer.appendChild(deleteAnswer);

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
    const hideSubmit = document.getElementById(submitTwo);
    hideSubmit.style.display = "none";
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

  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  submitButton.type = "submit";
  submitButton.id = "submitTwo";
  questionContainer.appendChild(submitButton);
  console.log("Function called");
});
