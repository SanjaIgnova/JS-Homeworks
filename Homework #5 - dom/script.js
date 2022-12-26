console.log('Test')

// Homework part 1
// Change the page with JavaScript

// Paragraphs 
let paragraphFirst = document.getElementsByClassName('paragraph')[0]

console.log(paragraphFirst);
 
 paragraphFirst.innerText = "This is a new exercises. Please learn this exercise." 


let paragraphSecond = document.getElementsByClassName('paragraph second')[0]


console.log(paragraphSecond);

paragraphSecond.innerText = "It's realy easy and interesting exercise."


// Headers
let myHeaderFirst = document.getElementById('myTitle');

console.log(myHeaderFirst);

myHeaderFirst.innerText = 'This page is super cool!'

let myHeaderSecond = document.getElementsByTagName('h1')[1]
console.log(myHeaderSecond);

myHeaderSecond.innerText = 'You dont change anything!'

let myHeaderThird = document.getElementsByTagName('h3')[0];
console.log(myHeaderThird);

myHeaderThird.innerText = 'This must be changed'


// Homework part 2
// Print all numbers from an array and the sum

arrayNum = [5,20,7,18,6,9,25];

let listNum = document.getElementById('listArray');

for (const number of arrayNum) {
    listNum.innerHTML += `<li>${number}</li>` 
}

let sumNum = document.getElementById('sum');

sumNum.innerText = `The sum of all numbers is ${arrayNum[0] + arrayNum[1] + arrayNum[2] + arrayNum[3] + arrayNum[4] + arrayNum[5] + arrayNum[6]}`


// Bonus homework
// Create a recipe page from inputs

