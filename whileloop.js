// While Loop

//1) power of 2 till 256
const ps=require("prompt-sync");
let prompt=ps();
let num = prompt("enter a number : ");
let powerOfTwo=1;
let i=0;
while(i<=num)
{
    console.log(i+" "+powerOfTwo);
    powerOfTwo=2*powerOfTwo;
    i++;
}

//2) Magic number
let num1= prompt("Enter a number for Magic Number : ");
if(isMagic(num1))
console.log(num1 + " Magic Number");
else console.log(num1 + " Not a Magic Number");

function isMagic( n)
{
    var sum = 0;
    while(n>0 || sum > 9)
    {
        if(n ==0)
        {
            n =sum;
            sum =0;
        }
        sum += n%10;
        n /= 10;
    }
    return (sum = 1);
}
 //3) Head or Tails 10 wins
 let headCount =0;
 let tailCount=0;
 let n = prompt("enter Number of Flips");
 let temp =n;
 while(n!=0)
 {
     let flip = Math.floor(Math.random() * 10 ) % 2;
     if(flip == 0) tailCount++;
     else headCount++;
     n--;
 }
 console.log("Head Count :" + (headCount *100)/temp);
 console.log("tail Count :" + (tailCount *100)/temp);

 