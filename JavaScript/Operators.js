///////// Booleans, Operators, Date //////////



const gravity = 9.81    

const boilingPoint = 100  // temperature in oC, boiling point of water
const bodyTemp = 37     
// Concatenating string with numbers using string interpolation
/*
 The boiling point of water is 100 oC.
 Human body temperature is 37 oC.
 The gravity of earth is 9.81 m/s2.
 */
 console.log(
    `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
  )


  let isRainig=true

  isRainig ? console.log("need rain coat") : 
  console.log("not needed");

  let number=5

  1 > 3 ? console.log("the number is greater") :
  console.log("the number is not greater");



const now=new Date();
console.log(now);
console.log('years',now.getFullYear());
console.log('months',now.getMonth());
console.log('date',now.getDate());
console.log('day',now.getDay());
console.log('the hours',now.getHours());
console.log('the minutes',now.getMinutes());
console.log('the seconds',now.getSeconds());
console.log('the milliseconds',now.getMilliseconds());
//console.log(now.getHours());
//console.log(now.getHours());

let num1='10';
let num2=10;

if(typeof num1== num2){
    console.log('true');
}else{
    console.log('false');
}

let num3='9.8';
let num4=10;

let num5=parseInt(Math.ceil((num3)));

if(num4==num5){
    console.log('true');
}else{
    console.log('false');
}


let str='python';
let str1='jargon';



if(!str.length==str1.length){
    console.log('true');
}else{
    console.log('flase');
}


/*let b=prompt('enter the base');

//let h=prompt("enter the height");

//let area=prompt('the area of triangle is',0.5*b*h);

let l=parseFloat(prompt("enter the length"));
let w=parseFloat(prompt("enter the width"));

let areaOfRect=l * w;

let periOfRect=2*(l+w);

console.log(areaOfRect);
console.log(periOfRect);

// Get length and width from the user
let length = parseFloat(prompt("Enter the length of the rectangle:"));
let width = parseFloat(prompt("Enter the width of the rectangle:"));

// Calculate area and perimeter
let area = length * width;
let perimeter = 2 * (length + width);

// Display the results
console.log("The area of the rectangle is: " + area);
console.log("The perimeter of the rectangle is: " + perimeter);
*/

let x=2;
let y=2 * x - 2;

console.log(y);
// Given equation
let m = 2; // coefficient of x, which is the slope
let b = -2; // constant term, which is the y-intercept

// Calculate x-intercept
let x_intercept = -b / m;

// Y-intercept is already provided as -2

// Display the results
console.log("Slope (m): " + m);
console.log("X-intercept: " + x_intercept);
console.log("Y-intercept (b): " + b);

//let hours=parseFloat(prompt('enter the hours'));
//let ratePerHour=parseFloat(prompt('enter the rate'))

//let earning=prompt("the weely earning is",hours*ratePerHour);

let str2='Prashanthkumar';

let str3='kumar';

let length=str2.length;
let length1=str3.length;
 if(length1>7){
    console.log('the is long enough');
 }else{
    console.log('the name is short');
 }

 let firstName='Prashanth';

 let lastName='Kumar';

 if(firstName.length>lastName.length){
    console.log(`Your firstName,${firstName} is longer than your Family name ${lastName}`)
 }else{
    console.log(`your family name,${lastName} is longer than your firstName ${firstName}`)
 }

 let myAge=250;

 let yourAge=25;

 let ageDiff=myAge-yourAge;

 console.log(`I am ${ageDiff} older than you`);

 let year=parseFloat(prompt('enter the year you born'));

 let present=new Date();
 let present1=present.getFullYear();

 let YearDiff=present1-year;

 if(YearDiff>18){

    console.log(`you are ${YearDiff}. You will be allowed to drive`)
 }else{

        if(YearDiff<18){
            let minAge=18-YearDiff;
            console.log(`your are ${YearDiff}, you will allowed to drive after ${minAge}`);
        }
 }

 let now2=new Date();

 let hours=now2.getHours();

 let minutes=now2.getMinutes();

 let seconds=now2.getSeconds();

 let formatted=`${hours}:${minutes}:${seconds}`

 console.log(formatted);

console.log("************************************************");