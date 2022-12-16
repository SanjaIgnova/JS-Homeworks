
// // Homework #1
console.log ( 'Homework #1');

let storyArray = ['Sanja', 'happy', 'learned'];

function tellStory(names, mood, activity) {
    let tellStory = storyArray.length;
    if( tellStory===storyArray.length) {
        console.log(`This is ${names}.${names} is very nice person. Today she is verry ${mood}, because she ${activity} all lesons of js.`)
    }
}


tellStory('Sanja', 'happy','learned');

// // Homework #2
console.log('Homework #2');

let nummberArray = [2,8,6,24,12];

function sumNummber(array) {
    let sum = 0;
    
    for (const number1 of array) {
        sum += number1;
    }
    return sum;
}
console.log(sumNummber(nummberArray));

let nummberArray1 = [2,8,6,24,NaN,"", 12];

function validateNumber(array) {
    let newArray = [];

    for (const element of array) {
        if(element) {
            newArray.push(element);
        }
        else if (!element){
            console.log('message instead of a result');
        }

    }
    return newArray;
}
console.log(validateNumber(nummberArray1));

// Homework #3



// Homework #4
console.log( 'Homework #4');

let size = 20;

for (let i=0; i<=size; i++){
    console.log(i);
    if(i %2 === 0){
        console.log("\n");
    }
    else if(i%2 ===!0) {
        console.log("");
    }
}


//Homework #5
console.log ('Homework #5')

let array1 = [3,5,6,8,11];

function arr(array){
    let min = Infinity;
    let max = -Infinity;

    for (const nummber of array) {
        if (nummber > max){
        max = nummber;
        }
        if ( nummber < min) {
            min = nummber;
        }
    }
    
    return `The largest nummber is ${max}, the smallest nummber is ${min} and the sum is ${max+min}`
}

console.log(arr(array1));