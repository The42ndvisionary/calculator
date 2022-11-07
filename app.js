let a="";
let b="";
let c="";
let opertator= c;
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



function operate(operator,num1,num2){
    switch(operator){
        case "+":
            add(num1,num2);
            console.log("using operator", operator);
            break;
            case "-":
                subtract(num1,num2)
                console.log("using operator", operator);
                break;
                case "*":
                multiply(num1,num2)
                console.log("using operator", operator);
                break;
                case "/":
                divide(num1,num2)
                console.log("using operator", operator);
                break;
        }
    }
    

tempValue=500;
   displayValue=document.getElementById("input");
   var displayValue1=document.createElement("p");
displayValue1.innerText=tempValue;
displayValue.append(displayValue1);

   
    
    //operate(opertator,num1,num2);