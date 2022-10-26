let a=prompt("enter first num");
let b=prompt("enter second num");
num1 = parseInt(a);
num2 = parseInt(b);


function add(num1,num2){
    let result = (num1 + num2);
    console.log( "thesum is ",result)
}


function subtract(num1,num2){
    let result = (num1 - num2);
    console.log( "the subtraction result is ",result)
}

function multiply(num1,num2){
    let result = (num1 * num2);
    console.log( "the multiplication result is ",result)
}

function divide(num1,num2){ 
    if (num2 == 0 ){ return console.log("error moron dont divide with zero")}
    else if(num2 !== 0){
   let result = (num1 / num2);
   console.log( "the division result is ",result)
   }
    
 
}



add(num1,num2);
subtract(num1,num2);
multiply(num1,num2);
divide(num1,num2);