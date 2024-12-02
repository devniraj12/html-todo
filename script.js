/*
*   Copyright (c) 2024 SMARTz Developer
*   All rights reserved.
*/

const addBtn = document.querySelector("#addBtn");
const input = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");


const addTask = () => {
    if (input.value === '') {
        alert("You must write something!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        /////
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        saveTask();
    }
    input.value = '';

}

addBtn.addEventListener("click", addTask);

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    saveTask();
}, false);

const saveTask = () => {
    localStorage.setItem("data", listContainer.innerHTML);
}
const displayTask = () => {
    listContainer.innerHTML = localStorage.getItem("data");
}

displayTask();