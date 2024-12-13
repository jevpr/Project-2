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
      'Please reload the homepage <span class="underline"><a href="index.html">here</a></span>.';
    updatedAbout.style.display = "block";
    const hideSubmit = document.getElementById(submitTwo);
    hideSubmit.style.display = "none";
  }

  console.log("Data loaded");
}

/*Retrieves the Data from Session Storage and uses it to create
the quiz builder*/
function loadEmptyQuestions() {
  //retrieves number of Questions from session storage
  const questionAmount = parseInt(
    window.sessionStorage.getItem("questionAmount")
  );

  /*

  // If the question amount is invalid or not set, we exit.
  if (isNaN(questionAmount) || questionAmount <= 0) {
    console.error("Invalid question amount");
    return; 
  }

  // Clear any existing content before adding new questions (optional)
  questionContainer.innerHTML = "";*/

  /* A for loop which cycles through questionAmount, 
  and creates a question input for each one*/
  for (let i = 1; i <= questionAmount; i++) {
    const questionBox = document.createElement("div");
    questionBox.classList.add("questionBox");
    questionBox.id = i;

    // Create question label & input
    const questionLabel = document.createElement("label");
    questionLabel.textContent = `Question ${i}:`;
    questionLabel.classList.add("questionLabel");
    const questionInput = document.createElement("input");
    questionInput.type = "text";
    questionInput.placeholder = `Enter Question ${i}`;
    questionInput.classList.add("questionInput");
    questionInput.setAttribute("required", "");
    questionInput.id = `Question${i}`;

    //container for 'add / delete answer' buttons
    const buttonContainer = document.createElement("div");
    buttonContainer.classList = "buttonContainer";

    //addAnswerbutton
    const addAnswer = document.createElement("button");
    addAnswer.innerHTML = "Add Answer";
    addAnswer.classList.add("addAnswer");

    //deleteAnswerButton
    const deleteAnswer = document.createElement("button");
    deleteAnswer.innerHTML = "Delete answer";
    deleteAnswer.classList.add("deleteAnswer");

    //Establishes number of answers
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
      answerInput.id = `Q${parentId}A${answerCount}`;
      answerInput.setAttribute("required", "");

      //Answer radio right-wrong toggles
      const rightRadio = document.createElement("input");
      rightRadio.type = "radio";
      rightRadio.id = `Q${parentId}A${answerCount}_RightRadio`;
      rightRadio.name = `Q${parentId}A${answerCount}_Right/Wrong`;
      rightRadio.checked = true;
      rightRadio.classList.add("rightRadioClass");

      const wrongRadio = document.createElement("input");
      wrongRadio.type = "radio";
      wrongRadio.id = `Q${parentId}A${answerCount}_WrongRadio`;
      wrongRadio.name = `Q${parentId}A${answerCount}_Right/Wrong`;
      wrongRadio.classList.add("wrongRadioClass");

      //Right-wrong radio labels
      const rightLabel = document.createElement("label");
      rightLabel.innerHTML = "Right";
      rightLabel.for = `Q${parentId}A${answerCount}_RightRadio`;
      rightLabel.classList.add("rightLabelClass");

      const wrongLabel = document.createElement("label");
      wrongLabel.innerHTML = "Wrong";
      wrongLabel.for = `Q${parentId}A${answerCount}_WrongRadio`;
      wrongLabel.classList.add("wrongLabelClass");

      const rightWrongContainer = document.createElement("div");
      rightWrongContainer.classList.add("rightWrongContainer");

      questionBox.appendChild(answerBox);
      answerBox.appendChild(answerInput);
      answerBox.appendChild(rightWrongContainer);
      rightWrongContainer.appendChild(rightRadio);
      rightWrongContainer.appendChild(rightLabel);
      rightWrongContainer.appendChild(wrongRadio);
      rightWrongContainer.appendChild(wrongLabel);
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

  //Appends the submit button
  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  submitButton.type = "submit";
  submitButton.id = "submitTwo";
  questionContainer.appendChild(submitButton);

  //Controls the actions for the submit button on the 2nd page
  submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    const allInputs = questionContainer.querySelectorAll(
      ".questionInput, .answerInput"
    );

    // Check if any input is empty
    for (const input of allInputs) {
      if (!input.value.trim()) {
        alert("Please fill in all question and answer boxes!");
        return; // Stop further execution if a field is empty
      }
    }

    //accesses all question containers:
    const questions = questionContainer.querySelectorAll(".questionBox");

    for (let question of questions) {
      const answerInputs = question.querySelectorAll(".answerInput");

      // Checks if there is at least one non-empty answer
      const hasValidAnswer = Array.from(answerInputs).some((input) =>
        input.value.trim()
      );

      if (!hasValidAnswer) {
        alert("Each question must have at least one answer");
        return; // Stop further execution if a question has no valid answer
      }
    }

    const questionArray = [];

    // Looping through each question container
    questions.forEach((question) => {
      const questionObject = {};
      questionObject.questionNumber = question.id;

      const questionText = question.querySelector(".questionInput").value;
      questionObject.questionText = questionText;

      questionObject.answers = [];
      // Cycle through the answer boxes, and pull ids and values
      const answerBoxes = question.querySelectorAll(".answerBox");
      answerBoxes.forEach((answerBox) => {
        const inputs = answerBox.querySelectorAll(".answerInput");
        inputs.forEach((input) => {
          const answerNumber = input.id;
          const answerText = input.value;
          const answer = [answerNumber, answerText];

          const rightWrongContainer = answerBox.querySelector(
            ".rightWrongContainer"
          );
          const radios = rightWrongContainer.querySelectorAll(
            "input[type='radio']"
          );
          let rightWrong = null;
          radios.forEach((radio) => {
            if (radio.checked) {
              rightWrong = radio.id;
            }
          });

          answer.push(rightWrong);

          //Add to question object
          questionObject.answers.push(answer);
        });
      });
      questionArray.push(questionObject);
    });
    console.log(questionArray);
    window.sessionStorage.setItem("questions", JSON.stringify(questionArray));

    window.location.href = "step-three.html";
  });
}

/*
questionObject {
questionNumber: 1, 
answers: [[answer1, right], [answer2, wrong], [answer3, wrong]],
}*/

function loadQuiz() {
  const questionString = window.sessionStorage.getItem("questions");
  const quizArray = JSON.parse(questionString);
  console.log(quizArray);
  const quiz = document.getElementById("quiz");

  quizArray.forEach((question) => {
    const fieldset = document.createElement("fieldset");
    const questionHeader = document.createElement("h2");
    questionHeader.innerHTML =
      "Question " + question.questionNumber + ". " + question.questionText;
    fieldset.appendChild(questionHeader);

    const hasMultipleCorrect =
      question.answers.filter((answer) => answer[2].includes("Right")).length >
      1;
    if (hasMultipleCorrect) {
      const note = document.createElement("p");
      note.innerHTML = "This question has multiple right answers";
      note.classList.add("italic");
      fieldset.appendChild(note);
    }

    question.answers.forEach((answer) => {
      const div = document.createElement("div");
      const input = document.createElement("input");
      const label = document.createElement("label");

      const isCheckbox = hasMultipleCorrect;
      const inputType = isCheckbox ? "checkbox" : "radio";

      input.type = inputType;
      input.name = `Q${question.questionNumber}`;
      input.id = `Q${question.questionNumber}A${answer[0][3]}`;
      if (answer[2].includes("Right"))
        input.setAttribute("data-correct", "true");

      label.setAttribute("for", input.id);
      label.textContent = answer[1];

      div.appendChild(input);
      div.appendChild(label);
      fieldset.appendChild(div);
    });

    quiz.appendChild(fieldset);
  });

  const submitThree = document.createElement("button");
  submitThree.id = "submit-three";
  submitThree.textContent = "Submit your answers!";
  quiz.appendChild(submitThree);

  function captureQuizData(event) {
    //This function needs to capture the users inputs and save them as a property of question objects
    event.preventDefault();

    const fieldsets = document.querySelectorAll("#quiz fieldset");
    let quizData = JSON.parse(sessionStorage.getItem("questions"));

    let totalCorrect = 0;
    let totalPossible = 0;

    fieldsets.forEach((fieldset, questionIndex) => {
      const questionInputs = fieldset.querySelectorAll("input");
      const userAnswers = [];

      questionInputs.forEach((input) => {
        if (input.checked) {
          userAnswers.push(input.id);
        }

        if (input.dataset.correct === "true") {
          totalPossible++;
        }
      });

      quizData[questionIndex].userAnswers = userAnswers;

      const correctAnswers = Array.from(questionInputs)
        .filter((input) => input.dataset.correct === "true")
        .map((input) => input.id);
      totalCorrect += userAnswers.filter((answer) =>
        correctAnswers.includes(answer)
      ).length;
    });

    sessionStorage.setItem("questions", JSON.stringify(quizData));

    const percentageScore = Math.round((totalCorrect / totalPossible) * 100);
    sessionStorage.setItem("percentage", percentageScore);
    sessionStorage.setItem("totalCorrect", totalCorrect);
    sessionStorage.setItem("totalPossible", totalPossible);
    window.location.href = "step-four.html";
  }
  submitThree.addEventListener("click", captureQuizData);
}

function loadResults() {
  const title = document.getElementById("updatedTitle");
  const quizTitle = sessionStorage.getItem("quizTitle");
  title.innerHTML = `Here are your results for "${quizTitle}":`;

  const scorePara = document.getElementById("scorePara");
  const score = sessionStorage.getItem("totalCorrect");
  const totalPossible = sessionStorage.getItem("totalPossible");
  scorePara.innerHTML = `You scored a total of <span class="underline"><b>${score}</b> out of <b>${totalPossible}</b></span> possible right answers.`;

  const percentagePara = document.getElementById("percentagePara");
  const percentage = sessionStorage.getItem("percentage");
  percentagePara.innerHTML = `Your percentage was: <b>${percentage}%</b>.`;
}
//This function needs to load the objects with their guesses,
//calculate the final score, + percentage,
// then display the questions as they were answered

function loadScoreBreakdown() {
  const scoreBreakdown = document.getElementById("scoreBreakdown");
  const questions = JSON.parse(sessionStorage.getItem("questions"));

  for (let question of questions) {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("questionBreakdown");

    const questionTitle = document.createElement("h2");
    questionTitle.innerHTML =
      question.questionNumber + ". " + question.questionText;
    questionDiv.appendChild(questionTitle);

    const questionAnswers = question.answers;
    const userAnswers = question.userAnswers;

    for (let answer of questionAnswers) {
      const answerPara = document.createElement("p");
      answerPara.id = answer[2];
      answerPara.innerHTML = answer[1];

      if (answerPara.id.includes("Wrong")) {
        answerPara.classList.add("wrongAnswer");
      }

      if (answerPara.id.includes("Right")) {
        answerPara.classList.add("rightAnswer");
      }

      for (let answer of userAnswers) {
        if (answerPara.id.includes(answer)) {
          answerPara.classList.add("userSelected");
        }
      }

      questionDiv.appendChild(answerPara);
    }

    scoreBreakdown.appendChild(questionDiv);
  }
}

/*<p class="score"></p>
            <p class="percentage"></p>*/

//Calls the function which will populate the form on step-two
document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname;

  if (path.includes("step-two.html")) {
    console.log("step-two");
    loadData();
    loadEmptyQuestions();

    console.log("Function called step-two");
  }

  if (path.includes("step-three.html")) {
    loadData();
    loadQuiz();
    //line for loading quiz

    console.log("Function called step-three");
  }

  if (path.includes("step-four.html")) {
    loadResults();
    loadScoreBreakdown();
  }
});

/*I think you will need to change the above so 
that it specifies /step-two.html being loaded. 
Work for tomorrow, begin working on the 'submit' 
button. I think for the sake of this project, 
we will have at least one answer that's correct. 

If a user creates a question with no right answers, the 
following alert will pop up: 
'Answer [x] has no right answer. Please select a right 
answer, or use 'None of the above' as your right 
answer.
*/
