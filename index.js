"use strict";

// sample data - expanded Star Wars characters with varied ages
const users = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

// broken test data for exercise 6

// 1. Print out the names of each character in the console, then render them in the HTML list with id "names-list"
const namesList = document.getElementById("names-list");
let charNames = "";
users.forEach(user => {
  charNames +=`<li id="success">${user.name}</li>`;
});
namesList.innerHTML = charNames;


// 2. Print out the names of characters whose age is less than 40 in the console, then render them in the HTML list with id "young-characters-list"
const youngCharsList = document.getElementById("young-characters-list");
let youngCharNames = "";
users.forEach(user => {
if(user.age < 40){
  youngCharNames += `<li id="success">${user.name}</li>`
}
});

youngCharsList.innerHTML = youngCharNames;


// 3. Create a reusable function that takes any array and uses logic to render a list of character names in the HTML. Use this function to populate the list with id "function-list"

//UPDATE: change code to incorporate class learnings—used map to return array

const addListItem = (item) => {
  if(!item) return "<li>ITEM NOT FOUND</li>";

  return `<li id="success">${item.name}</li>`
}

function displayNames(arrayList, output){
const namesList = document.getElementById(output);
namesList.innerHTML = arrayList.map(item => addListItem(item)).join("");
}
displayNames(users, "function-list");


// 4. Create a function that takes an array and an age threshold parameter. The function should only display characters whose age is below the given number. Render results in the list with id "age-filter-list"

//UPDATE: changed code to incorporate class learnings—used filter of list to narrow instead of looping through whole list with if statement for age parameter.

function displayNameWithAgeParam(arrayList, output, age){
  const youngCharsList = document.getElementById(output);
  const youngChars = arrayList.filter((item) => item.age < age);
  let youngCharNames = "";
  youngChars.forEach(user => {
    youngCharNames += `<li id="success">${user.name}</li>`
  });

  youngCharsList.innerHTML = youngCharNames;
}
displayNameWithAgeParam(users, "age-filter-list", 40);


// 5. Add error handling to your functions that will log an error message using console.error() if any object doesn't have a "name" property. Display any error messages in the div with id "error-messages"

//UPDATE: changed code to incorporate class learnings—replaced innerHTML with creating element and appending textContent. practiced using constant functions and using functions within it.

function validateListItem(item, idx){
  if(!item) throw new error (`Item not found at position: ${idx+1}`);

  if(item.name){
    return item.name
  }
  else{
    console.log(`item name does not exist at position: ${idx+1}`);
    throw new Error(`item name does not exist at position: ${idx+1}`)
  }
}

const displayNamesWithValidation = (list, successOutput, failOutput) => {
  const successOutputElement = document.getElementById(successOutput);
  const failOutputElement = document.getElementById(failOutput);
  list.forEach((item, idx) => {
    const listItem = document.createElement("li");
    try{
    listItem.id = "success";
    listItem.textContent = validateListItem(item, idx);
    successOutputElement.appendChild(listItem);
    }
    catch (error){
    listItem.id = "";
    listItem.textContent = error.message;
    failOutputElement.appendChild(listItem);
    }
  });
}
displayNamesWithValidation(users, "error-handling-list","error-messages");


// 6. Test your error handling by creating a second array that's intentionally broken (missing name properties) and passing it to your functions. Verify that your error handling works correctly and displays errors in the div with id "broken-array-errors"

const siths = [
  { id: 1, name: "Darth Maul", age: 203 },
  { id: 2, age: 1 },
  { id: 3, name: "Darth Sidious", age: 305 },
  { id: 4, name: "Darth Tyranus", age: 203 },
  { id: 5, name: "Darth Plagueis", age: 507 },
  { id: 6, name: "Kylo Ren", age: 25 },
  { id: 7, name: "Asajj Ventress", age: 302 },
  { id: 8, age: 2 },
  { id: 9, name: "Savage Opress", age: 234 },
];

displayNamesWithValidation(siths,"broken-array-list","broken-array-errors");