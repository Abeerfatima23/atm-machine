import inquirer from "inquirer";

let myBalance=100000;
let myPin=1111;

console.log("welcome to abeer-ATM machine")

let pinAnswer = await inquirer.prompt([
    {
        name:"pin",
        type:"number",
        message:"enter your pin number:"

    }
])
if (pinAnswer.pin=== myPin){
    console.log("pin is correct..login successfully!")
    console.log(`your current acount balance is "${myBalance}`)
    
let operationAns = await inquirer.prompt([{
    name:"operation",
    type:"list",
    message:"select an operation",
    choices:["withdraw amount","check balance"]
}
]) 
if(operationAns.operation === "withdraw amount"){

    let amountAns = await inquirer.prompt([
{
    name:"amount",
    type:"number",
    message:"enter the amount to withdraw"
}
    ])
if(amountAns.amount > myBalance){

    console.log("insufficient balance")
}
   else {
    myBalance -= amountAns.amount;
    console.log(`${amountAns.amount}withdraw successfully`);
    console.log(`ypur remaining balance is"${myBalance}`);
   }
}
else if(operationAns.operation === "check balance"){
    console.log(`your account balance is: ${myBalance}`);
}
}
else {
    console.log("pin is incorrect..try again!");
}