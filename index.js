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
  charNames +=`<li>${user.name}</li>`;
});
namesList.innerHTML = charNames;


// 2. Print out the names of characters whose age is less than 40 in the console, then render them in the HTML list with id "young-characters-list"
const youngCharsList = document.getElementById("young-characters-list");
let youngCharNames = "";
users.forEach(user => {
if(user.age < 40){
  youngCharNames += `<li>${user.name}</li>`
}
});

youngCharsList.innerHTML = youngCharNames;


// 3. Create a reusable function that takes any array and uses logic to render a list of character names in the HTML. Use this function to populate the list with id "function-list"
function displayNames(arrayList, output){
const namesList = document.getElementById(output);
let charNames = "";
arrayList.forEach(item => {
  charNames +=`<li>${item.name}</li>`;
});
namesList.innerHTML = charNames;
}
displayNames(users, "function-list");


// 4. Create a function that takes an array and an age threshold parameter. The function should only display characters whose age is below the given number. Render results in the list with id "age-filter-list"
function displayNameWithAgeParam(arrayList, output, age){
  const youngCharsList = document.getElementById(output);
let youngCharNames = "";
arrayList.forEach(user => {
if(user.age < age){
  youngCharNames += `<li>${user.name}</li>`
}
});

youngCharsList.innerHTML = youngCharNames;
}
displayNameWithAgeParam(users, "age-filter-list", 40);


// 5. Add error handling to your functions that will log an error message using console.error() if any object doesn't have a "name" property. Display any error messages in the div with id "error-messages"
function displayNameWithErrorHandling(usersList, resultBoxID, errorBoxID, age){
  const resultBox = document.getElementById(resultBoxID);
  const errorBox = document.getElementById(errorBoxID);
  let charList = "";
  let errorList = "";

  usersList.forEach((user, index) => {
  try{
    if(user.age < age && user.name){
      charList += `<li>${user.name}</li>`
    }
    else if(!user.name){
      errorList += `<li>user at index ${index} encountered an error</li>`
    }
    
  }
  catch{
    errorList += `<li>user at index ${index} encountered an error</li>`
  }
  })
  resultBox.innerHTML = charList;
  errorBox.innerHTML = errorList;
}
displayNameWithErrorHandling(users,"error-handling-list","error-messages", 30);


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

displayNameWithErrorHandling(siths,"broken-array-list","broken-array-errors", 300);