const addBtnEl = document.getElementById("add-btn");
addBtnEl.addEventListener("click", addLiEl);
const listContainerEl = document.getElementById("list-container");
const inputBarEl = document.getElementById("input-bar");
const donelistContainerEl = document.getElementById("done-list-container");
let toggled = false;
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
    inputBarEl.value = "";
}

listContainerEl.addEventListener("click", addBtns);
function toggle(e) {
   
    if(e.target.tagName === "LI") {
        e.target.style.textDecoration = "line-through";
        e.target.style.color = "#ABCAAA";
        console.log()
    }
 
  
}

function deleteLi (e) {
    e.preventDefault();
    e.target.parentElement.remove();
}
function addBtns (e) {
    if (e.target.tagName === "LI") {
    e.preventDefault();

e.target.children[0].classList.toggle("hidden")
console.log(e.target.children[1])
e.target.children[1].classList.toggle("hidden")
}}

function moveToDone (e) {
    e.preventDefault();
let liEl = document.createElement("li");
donelistContainerEl.append(liEl);
liEl.textContent = e.target.parentElement.textContent;
e.target.parentElement.remove()

}