//Functions 

//1) Temparature Conversion
const ps=require("prompt-sync");
let prompt=ps();
let degree=prompt("Enter Farenheit degree:");
FtoC(degree);
function FtoC(degree)
{
    let cel = (degree -32)*5/9;
    console.log("F to C temp Conversion : "+cel);
}
let degreeC =prompt("Enter Celisus degree : ");
CtoF(degreeC);
function CtoF(degreeC)
{
    let far= (degreeC *9/5)+32;
    console.log("C to F temp Conversion: "+far);
}

//2)PAlindromes or Not
var num =prompt("Enter a number to Check Palindrome or not: ");
palindrom(num);
function palindrom(n)
{
    var rem,temp,final=0;
    temp=n;
    while(n>0)
    {
        rem = n%10;
        n=parseInt(n/10);
        final = final*10+rem;
    }
    console.log("REverse Number is : "+final);
    if(temp == final) console.log("Palindrome");
    else console.log("Not Palindrome");
}

//3 Prime Palindrome
var n= prompt("Enter a number for Checing Prime Palindrome : ");
isPrime(n);
function isPrime(n)
{
    var a =0;
    for(var i =0 ;i<n;i++)
    {
        if(n%i==0)
        {
            a++;
        }
    }
    if(a==2) console.log("Prime");
    else console.log("Not Prime");
    palindrome(n);
}
function palindrome(n)
{
    var rem,temp,final=0;
    temp=n;
    while(n>0)
    {
        rem = n%10;
        n=parseInt(n/10);
        final = final*10+rem;
    }
    console.log("REverse Number is : "+final);
    if(temp == final) console.log("Palindrome");
    else console.log("Not Palindrome");
    primepalindrom(temp);
}
function primepalindrom(n)
{
    var a =0;
    for(var i =0 ;i<n;i++)
    {
        if(n%i==0)
        {
            a++;
        }
    }
    if(a==2) console.log("Prime Palindrom");
    else console.log("Not Prime Palindrome");
}
