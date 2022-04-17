//if & else 1st
console.log("Greate Num and lower num :");
let num = Math.floor(100+ Math.random() * 999);
console.log("Num : "+num);
let num1 = Math.floor(100+ Math.random() * 999);
console.log("Num1 : "+num1);
let num2 = Math.floor(100+ Math.random() * 999);
console.log("Num2 : "+num2);
let num3 = Math.floor(100+ Math.random() * 999);
console.log("Num3 : "+num3);
let num4 = Math.floor(100+ Math.random() * 999);
console.log("Num4 : "+num4);
if(num > num1 && num > num2 && num > num3 && num > num4)
{
    console.log("Num is Greater : " + num);
}
else if(num1 > num2 && num1 > num3 && num1 > num4)
{
    console.log("Num 1 is Greater : "+ num1);
}
else if(num2 > num3 && num2 > num4)
{
    console.log("Num 2 is Greater : " + num2);
}
else if(num3 > num4)
{
    console.log("Num 3 is Greater : " + num3);
}
else
{
    console.log("Num 4 is Greate : " + num4);
}
//Findng Lower number

if(num < num1 && num < num2 && num < num3 && num < num4)
{
    console.log("Num is Lower : " + num);
}
else if(num1 < num2 && num1 < num3 && num1 < num4)
{
    console.log("Num 1 is Lower : "+ num1);
}
else if(num2 < num3 && num2 < num4)
{
    console.log("Num 2 is Lower : " + num2);
}
else if(num3 < num4)
{
    console.log("Num 3 is Lower : " + num3);
}
else
{
    console.log("Num 4 is Lower : " + num4);
}


//2nd March 20 to jun 20
console.log("\n Date in between March 20 and June 20 :");
const ps = require("prompt-sync");
let prompt =ps();
let day =prompt("Enter Day : ");
let month=prompt("Enter Month: ");
if(( (day >=20 && day <=31) && month ==3) || ((day >=1 && day <=30) && month == 4 ) || ((day >=1 && day <=31) && month == 5) || ((day >=1 && day <=20)&& month == 6))
{
    console.log("True");
}
else
{
    console.log("False");
}


//3rd Leap Year
console.log("\n Leap Year or Not:");
let year=prompt("Enter Year :");
if((year %4 ==0)&&(year%100 != 0)|| year %400 ==0)
{
    console.log("Is Leap Year");
}
else console.log("Not a Leap Year");

//4th Head or Tails
console.log("\nCoin Flip : ")

let flip = Math.floor(Math.random() * 10)%2;
if(flip == 0) console.log("Tails")
else console.log("Heads");
