//1st
let rnd = Math.floor(Math.random() * 10);
console.log("single Digit random number :",rnd);
//2nd dies 
let dice = Math.floor(Math.random() * 10) % 6;
console.log("Random Dies Number : "+dice);
//3rd Two Dies
let d2 = Math.floor(Math.random() * 10) % 6;
console.log("1st Die Number : "+ dice + ", 2nd Die Number : "+ d2);
//4th Sum and Avg
let num=Math.floor(Math.random() * 10) % 99;    
let num1=Math.floor(Math.random() * 10) % 99;
let num2=Math.floor(Math.random() * 10) % 99;
let num3=Math.floor(Math.random() * 10) % 99;
let num4=Math.floor(Math.random() * 10) % 99;
let sum = num+num1+num2+num3+num4;
console.log("Sum : "+ sum);
console.log("Avg : "+sum/5);

//5th a)1ft =12 inch then 42 inch = ? ft
let twelveinch =12;
let feetToInch = 42/twelveinch;
console.log("42 inch : " + feetToInch + " in Feet");

//5th b) Rectange 60 feet x 40 feet in meters
let wide = 60;
let height = 40;
let squarefeet=wide*height;
let inmeter =squarefeet/10.764;
console.log("Square Feet to meters : " +inmeter);

//5th c)25 such plots in acres
let metertoacre =4047;
let TwentySuchmeter=(inmeter*25)/metertoacre;
console.log("25 such plot to acre : "+TwentySuchmeter);
