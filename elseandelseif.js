//1) If else if and else
console.log("1) Write Number in Words");
const ps= require("prompt-sync");
let prompt=ps();
let num = prompt("Enter single digit Number : ");
if(num == 1) console.log("One");
else if(num == 2) console.log("Two");
else if(num == 3) console.log("Three");
else if(num == 4) console.log("Four");
else if(num == 5) console.log("Five");
else if(num == 6) console.log("Six");
else if(num == 7) console.log("Seven");
else if(num == 8) console.log("Eight");
else if(num == 9) console.log("Nine");
else console.log("Invalid")

//2) Week Day
let week = prompt("Enter a Number from 0 to 6 : ");
if(week == 0) console.log("Sunday");
else if(week ==1) console.log("Monday");
else if(week ==2) console.log("Tuesday");
else if(week ==3) console.log("Wednesday");
else if(week ==4) console.log("Thursday");
else if(week ==5) console.log("Friday");
else if(week ==6) console.log("Saturday");
else console.log("Number should be in between 0 and 6");

//3) units ,tens, hundread, thousand
let number = prompt("enter 1,10,100,1000..etc");
if(number ==1) console.log("Units");
else if (number ==10) console.log("Tens");
else if (number ==100) console.log("Hundreds");
else if (number ==1000) console.log("Thousands");
else if (number ==10000) console.log("Ten Thousands");
else if (number ==100000) console.log("Lacks");
else if (number ==1000000) console.log("Ten Lacks");
else console.log("Invalid");

//4th max and min
let a=prompt("Enter 1st Number");
console.log("a : "+a);
let b=prompt("Enter 2nd Number");
console.log("b : "+b);
let c=prompt("Enter 3rd Number");
console.log("c : "+c);

let op1 = a+b*c;
console.log("1st operation : "+op1);
let op2 = c+a/b;
console.log("2nd operation : "+op2);
let op3 =a%b+c;
console.log("3rd operation : "+op3);
let op4 = a*b+c;
console.log("4th operation : "+op4);
if(op1 > op2 && op1 >op3 && op1 > op4) console.log("Max is op1");
else if(op2>op3 && op2 >op4) console.log("Max is op2");
else if(op3>op4) console.log("Max is op3");
else console.log("Max is op4");

if(op1 < op2 && op1 <op3 && op1 < op4) console.log("Min is op1");
else if(op2<op3 && op2 <op4) console.log("Min is op2");
else if(op3<op4) console.log("Min is op3");
else console.log("Min is op1");

