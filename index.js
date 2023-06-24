window.onload = function () {
    startTime();
  };

const addBtnEl = document.getElementById("add-btn");
addBtnEl.addEventListener("click", addLiEl);
const listContainerEl = document.getElementById("list-container");
const inputBarEl = document.getElementById("input-bar");
const donelistContainerEl = document.getElementById("done-list-container");

function addLiEl (e) {
    e.preventDefault();
    if (inputBarEl.value === "") {
        return alert("Add a task!");
    }
    let liEl = document.createElement("li");
    listContainerEl.append(liEl);
    liEl.textContent=inputBarEl.value;
    let deleteBtn = document.createElement("button")
deleteBtn.textContent = "Delete";
deleteBtn.className = "delete-btn", "hidden";
liEl.append(deleteBtn)
deleteBtn.addEventListener("click", deleteLi);
let doneBtn = document.createElement("button");
doneBtn.className = "done-btn", "hidden";
liEl.append(doneBtn)
doneBtn.textContent = "Done";
doneBtn.addEventListener("click", moveToDone);
let markImpBtn = document.createElement("button");
markImpBtn.className = "mark-imp-btn", "hidden";
liEl.append(markImpBtn)
markImpBtn.textContent = "Mark Important";
markImpBtn.addEventListener("click", markImp);
const editBtn = document.createElement("button");
editBtn.textContent = "Edit"
editBtn.className = "edit-btn", "hidden"
liEl.append(editBtn);
editBtn.addEventListener("click", editTask)

inputBarEl.value = "";
}

listContainerEl.addEventListener("click", addBtns);




function deleteLi (e) {
    e.preventDefault();
    e.target.parentElement.remove();
}
function addBtns (e) {
    e.preventDefault();
    if (e.target.tagName === "LI") {
e.target.children[0].classList.toggle("hidden")
e.target.children[1].classList.toggle("hidden")
e.target.children[2].classList.toggle("hidden")
e.target.children[3].classList.toggle("hidden")
e.target.classList.toggle("red");
}}

function moveToDone (e) {
    e.preventDefault();
let liEl = document.createElement("li");
donelistContainerEl.append(liEl);
liEl.textContent = e.target.parentElement.textContent;
let diff = liEl.textContent.length - 28
let str = e.target.parentElement.textContent
let str2 = str.slice(0,diff )
liEl.textContent=str2;
const checkBox = document.createElement("img")
checkBox.className = "checkbox"
checkBox.src = "images/Bokehlicia-Captiva-Checkbox.256.png";
liEl.appendChild(checkBox)
e.target.parentElement.remove()
}

function markImp () {
    e.preventDefault();

    
  //todoooooooooooooooooo

}

function editTask(){
    //todoooooooooooooooooo
}

function startTime () {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerText =  h + ":" + m;
    setTimeout(startTime, 1000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }