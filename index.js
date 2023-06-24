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
let markImpBtn = document.createElement("button");
markImpBtn.className = "mark-imp-btn", "hidden";
liEl.append(markImpBtn)
markImpBtn.textContent = "Mark Important";
markImpBtn.addEventListener("click", markImp);
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
e.target.children[1].classList.toggle("hidden")
e.target.children[2].classList.toggle("hidden")
}}

function moveToDone (e) {
    e.preventDefault();
let liEl = document.createElement("li");
donelistContainerEl.append(liEl);
liEl.textContent = e.target.parentElement.textContent;
let diff = liEl.textContent.length - 24
console.log(diff)
let str = e.target.parentElement.textContent;
let str2 = str.slice(0,diff )
liEl.textContent=str2;


e.target.parentElement.remove()

}
function markImp () {

}