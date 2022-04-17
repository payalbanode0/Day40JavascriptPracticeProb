//For Loop
//1) Power of Two 
const ps=require("prompt-sync");
let prompt=ps();
let n =prompt("\nEnter a number : ");
let powerOfTwo=1;
for(let i =0;i<=n;i++)
{
    console.log(i+" "+powerOfTwo);
    powerOfTwo=2*powerOfTwo;

}

//2) Harmoic Number

let num=prompt("\nEnter a number : ");
for(let i =0;i<=num;i++)
{
    console.log(1+"/"+i+"+");
}

//3) Prime or Not
let num1=prompt("\nEnter a number : ");
let a=0;
for(let i=0;i<=num1;i++)
{
 if(num1%i==0) a++;       
}
if(a==2) console.log("Number is Prime :"+num1);
else console.log("Number is Not Prime : "+num1);

//4) Range of Prime
let num2 =prompt("\nEnter max Number : ");
let count =0;
console.log("Prime numbers from 1 to "+ num2 + " are : ")
for(let i=1;i<=num2;i++)
{
    count =0;
    if(i>1)
    {
        for(let j=2;j<i;j++)
        {
            if(i%j==0)
            {
                count=1;
                break;
            }
        }
        if(count == 0) console.log(i+" ")
    }
}

//5) Factors of given Number
let fact=prompt("Enter a number to get Factors of it : ");
for(let i=0;i<fact;i++)
{
    if(fact%i==0) console.log("FActors of Given Number are :"+i);
}

//6th Prime Factors
let pfact=prompt("Enter a number for Prime Factors :");
for(let i=2;i<=pfact;i++)
{
    for(let j=2;j<i;j++)
    {
        if(i%j==0) console.log(j+ "Not Factors")

        else console,log("FActors :" +j);
    }
}
