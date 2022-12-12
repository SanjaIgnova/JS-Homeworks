// Homework part 3

function atmCash (cash) {
    let moneyCash = cash;
    return moneyCash;
}
let atmCash1 = prompt ('Enter your bank cash');
let inputValue1 = prompt('Enter the money you whant to windrew');
if (atmCash1 >= inputValue1){
    console.log (`You windrew ${inputValue1} from your bank accont. Now you have ${atmCash(atmCash1-inputValue1)} on your account`);
}
else if( atmCash1<inputValue1) {
    console.log('You dont have enough money!');
}
