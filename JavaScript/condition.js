/////// Condtions //////////

let age=parseFloat(prompt('enter your age'));

if(age>=18){

    console.log(`you are ${age} old enough to drive`);
}else{
    if(age<18){

        let ageLeft=18-age;
        console.log(`you are left with ${ageLeft} years to drive`)
    }
}

let yourAge=parseFloat(prompt('Enter the age'));

let myAge=20;
let ageDiff=yourAge-myAge;

if(yourAge>myAge){
    console.log(`you are ${ageDiff} older than me`)
}else{
    console.log(`Iam ${Math.abs(ageDiff)} years younger than you`);
}

let a=4;
let b=3;

a > b ? console.log('true')
: console.log('false');


let month=prompt('enter the month').toLowerCase();

let season;

switch(month){

    case 'september':
    case 'october':
    case 'november':
        season='Autumn';
        break;
    
    case 'December':
    case 'January':
    case 'February':
        season='Winter';
        break;

    case 'march':
    case 'April':
    case 'May':
        season='Summer';
        break;

    default:
        console.log('invalid month');
}

if(season){
    console.log(`the seaseon is ${season}`)
}


// Prompt the user to enter a day
let day = prompt("Enter a day:").toLowerCase(); // Convert input to lowercase for case-insensitive comparison

// Check if the day is a weekend day or a working day
switch (day) {
    case 'saturday':
    case 'sunday':
        console.log(`${day} is a weekend day.`);
        break;
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
        console.log(`${day} is a working day.`);
        break;
    default:
        console.log("Invalid input. Please enter a valid day.");
}

console.log("****************************************************************");

