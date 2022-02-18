// setting up variables
let theInput = document.querySelector(".add-task input");
let addButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");

// foucs on input field
window.onload = function () {
  theInput.focus();
};

// adding the tasks
addButton.onclick = function () {
  //if the input is empty
  if (theInput.value === "") {
  } else {
    let noTasksMsg = document.querySelector(".no-tasks-message");
    if (document.body.contains(document.querySelector(".no-tasks-message"))) {
      // remove the no tasks message
      noTasksMsg.remove();
    }

    //creat span element
    let mainSpan = document.createElement("span");

    //creat delete button
    let deleteSpan = document.createElement("span");

    //creat text span
    let text = document.createTextNode(theInput.value);

    //creat text delete
    let deletetext = document.createTextNode("Delete");

    //add text to span
    mainSpan.appendChild(text);

    // add class to the new span
    mainSpan.className = "task-box";

    // add text to delete button
    deleteSpan.appendChild(deletetext);

    // add class to delete button
    deleteSpan.className = "delete";

    //add delete button to main span
    mainSpan.appendChild(deleteSpan);

    //add task to the container
    tasksContainer.appendChild(mainSpan);
    //check input is empty
    theInput.value = "";
    // focus to the input field
    theInput.focus();
    //calculate tasks
    calculateTasks();
  }
};

document.addEventListener("click", function (e) {
  if (e.target.className === "delete") {
    // remove the task
    e.target.parentNode.remove();

    //check number of tasks inside the container
    if (tasksContainer.childElementCount === 0) {
      creatNoTasks();
    }
  }
  // finished task
  if (e.target.classList.contains("task-box")) {
    // toggle class finished
    e.target.classList.toggle("finished");
  }
  calculateTasks();
});

// function to creat no tasks messgage
function creatNoTasks() {
  //creat message span element
  let msElement = document.createElement("span");

  //creat message span text
  let msText = document.createTextNode("No Tasks To Show");

  // add text to span element
  msElement.appendChild(msText);

  // add class to span message
  msElement.className = "no-tasks-message";

  // append span element to tasks container
  tasksContainer.appendChild(msElement);
}

//function to calculate tasks count
function calculateTasks() {
  //calculate all tasks
  tasksCount.innerHTML = document.querySelectorAll(
    ".tasks-content .task-box"
  ).length;
  //calculate all completed tasks
  tasksCompleted.innerHTML = document.querySelectorAll(
    ".tasks-content .finished"
  ).length;
}
