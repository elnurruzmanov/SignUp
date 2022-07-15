"use strict";

const label = document.querySelector(".label");
const form = document.querySelector(".login-form");
const password = document.querySelector(".password");
const email = document.querySelector(".email");
const gender = document.querySelector(".gender");
const errorElement = document.querySelector(".error")

login -
  form.addEventListener("submit", (e) => {
    let messages = [];
    if (name.value === "" || name.value == null) {
      messages.push("Name is required");
    }

    if(password.length<=6){
        messages.push("Password must be longer than 6 characters")
    }
    if(password.length>=20){
        messages.push("Password must be less than 6 characters")
    }

    if(password.value==="password"){
        messages.push("Password cannot be password")
    }

    if (messages.length > 0) {
      e.preventDefault();
      errorElement.innerText = messages.join(", ")
    }
  });
