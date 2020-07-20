import {setName, getName} from "./services/localStorageAPI.js"

const nameDisplay = document.getElementById("name-display");
const form = document.querySelector("form");
const input = document.querySelector("input");
const prevName = getName();
nameDisplay.textContent = prevName;

function submit(event) {
    event.preventDefault();
    nameDisplay.textContent = input.value;
    setName(input.value);
}



form.addEventListener("submit",event => submit(event));

