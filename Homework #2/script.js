
// Homework part 2

function calculateDogYear (humanYear) {
    let dogYear = humanYear * 7;
    return dogYear;
}

function calculateHumanYear( dogYear) {
    let humanYear = dogYear / 7;
    return humanYear;
}

let personChoise = prompt('Enter H for calculate human year or D for calculate dog year');
let inputValue = prompt('Enter value');

if (personChoise === "D") {
    console.log(`The dog is ${calculateDogYear(inputValue)}`);
}
else if(personChoise === "H"){
    console.log(`The human is ${calculateHumanYear(inputValue)}`);
}

