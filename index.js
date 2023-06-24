// starts the clock on load
window.onload = function () {
  startTime();
};

// Declare elements
const addBtnEl = document.getElementById("add-btn");
const listContainerEl = document.getElementById("list-container");
const doneListContainerEl = document.getElementById("done-list-container");
const inputBarEl = document.getElementById("input-bar");
const donelistContainerEl = document.getElementById("done-list-container");

// Handlers
addBtnEl.addEventListener("click", addLiEl);
listContainerEl.addEventListener("click", addBtns);

// Create buttons based on the input "delete", "edit", "mark important", "done" and
// adds event listeners to them
function createBtn(type) {
  if (type === "delete") {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    (deleteBtn.className = "delete-btn"), "hidden";
    deleteBtn.addEventListener("click", deleteLi);
    return deleteBtn;
  }
  if (type === "edit") {
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    (editBtn.className = "edit-btn"), "hidden";
    editBtn.addEventListener("click", editLi);
    return editBtn;
  }
  if (type === "important") {
    const highlightBtn = document.createElement("button");
    (highlightBtn.className = "mark-imp-btn"), "hidden";
    highlightBtn.textContent = "Mark Important";
    highlightBtn.addEventListener("click", highlightLi);
    return highlightBtn;
  }
  if (type === "done") {
    let doneBtn = document.createElement("button");
    (doneBtn.className = "done-btn"), "hidden";
    doneBtn.textContent = "Done";
    doneBtn.addEventListener("click", moveLi);
    return doneBtn;
  }
}

function addLiEl(e) {
  e.preventDefault();

  if (inputBarEl.value === "") {
    return alert("Add a task!");
  }

  let liEl = document.createElement("li");
  listContainerEl.append(liEl);
  liEl.textContent = inputBarEl.value;
  liEl.append(createBtn("delete"));
  liEl.append(createBtn("done"));
  liEl.append(createBtn("important"));
  liEl.append(createBtn("edit"));
  inputBarEl.value = "";
}

doneListContainerEl.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.tagName === "LI") {
    e.target.children[0].classList.toggle("hidden");
    e.target.children[1].classList.toggle("hidden");
  }
});

function deleteLi(e) {
  e.preventDefault();
  e.target.parentElement.remove();
}

function addBtns(e) {
  e.preventDefault();
  if (e.target.tagName === "LI") {
    e.target.children[0].classList.toggle("hidden");
    e.target.children[1].classList.toggle("hidden");
    e.target.children[2].classList.toggle("hidden");
    e.target.children[3].classList.toggle("hidden");
    e.target.classList.toggle("red");
  }
}

function moveLi(e) {
  e.preventDefault();
  let liEl = document.createElement("li");
  donelistContainerEl.append(liEl);
  liEl.textContent = e.target.parentElement.textContent;
  let diff = liEl.textContent.length - 28;
  let str = e.target.parentElement.textContent;
  let str2 = str.slice(0, diff);
  liEl.textContent = str2;
  liEl.appendChild(createBtn("edit"));
  liEl.append(createBtn("delete"));

  e.target.parentElement.remove();
}

function highlightLi() {
  e.preventDefault();
  //todoooooooooooooooooo
}

function editLi() {
  //todoooooooooooooooooo
}

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("clock").innerText = h + ":" + m;
  setTimeout(startTime, 1000);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}
