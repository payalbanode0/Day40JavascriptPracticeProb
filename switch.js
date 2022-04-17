//1) number in words using switch
const ps=require("prompt-sync");
let prompt=ps();
let number=prompt("Enter Single Digit Number : " );
switch(number)
{
    case "1":console.log("One"); break;
    case "2":console.log("Two"); break;
    case "3":console.log("Three"); break;
    case "4":console.log("Four"); break;
    case "5":console.log("Five"); break;
    case "6":console.log("Six"); break;
    case "7":console.log("Seven"); break;
    case "8":console.log("Eight"); break;
    case "9":console.log("Nine"); break;
    default:console.log("Invalid");
}

//2) Week of Day
let num = prompt("\nEnter Number Between 0 to 6 for Day in Week:");
switch(num)
{
    case "0":
        console.log("Sunday");
        break;
    case "1":
        console.log("Monday");
        break;
    case "2":
        console.log("Tuesday");
        break;
    case "3":
        console.log("Wednesday");
        break;
    case "4":
        console.log("Thursday");
        break;
    case "5":
        console.log("Friday");
        break;
    case "6":
        console.log("Saturday");
        break;
    default:
        console.log("Invalid");
        break;
}

//3) units using Switch
let n=prompt("\nEnter 1,10,100,1000,10000 etc : ")
switch(n)
{
    case "1":console.log("Units"); break;
    case "10":console.log("Tens"); break;
    case "100":console.log("Hundreds"); break;
    case "1000":console.log("Thousands"); break;
    case "10000":console.log("Ten Thousands"); break;
    case "100000":console.log("Lack"); break;
    case "1000000":console.log("Ten Lacks"); break;
    default : console.log("Invalid"); break;
}

//4) unit Conversion
var value =prompt("\nEnter number :");
var to =prompt("\nEnter conversion type ex: inch to feet,feet to inch,feet to meter,meter to feet :");
switch(to)
{
    case "inch to feet":
        let inchtofeet = value/12;
        console.log("Inch to Feet of Given Value : ",inchtofeet);
        break;
    case "feet to inch":
        let feettoinch = value *12;
        console.log("Feet to Inch : ",feettoinch);
        break;
    case "feet to meter":
        let feettometer = value/3.28084;
        console.log("Feet to meter : ",feettometer);
        break;
    case "meter to feet":
        let metertofeet = value*3.28084;
        console.log("meter to feet : ",metertofeet);
        break;
    default:console.log("Invalid");break;
}
