/////STRING METHODS//////



let string = '30 Days Of JavaScript'
console.log(string);
console.log(string.length);
console.log(string.toUpperCase());
console.log(string.toLowerCase());

let slice=string.substr(0,1);
console.log(slice);
let pharse=string.slice(3);
console.log(pharse);

let contain=string.includes('Script');

console.log(contain);

let split=string.split(" ");

console.log(split);

let companies='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';

let company=companies.split(",");

console.log(company);

let replace=string.replace('JavaScript','Python');

console.log(replace);

console.log(string.charAt(15));

console.log(string.charCodeAt('j'));


console.log(string.search('Of'));


console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')

console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"');


let num='10';
let num1=10;

if(typeof num == typeof num1){
    console.log('both the numbers are equal')
}else{
        num=+num;
        if(typeof num == typeof num){
            console.log('now, the types are exactly same')
        }
}

let num2='9.8';

let num3=10;

let numFloat=parseFloat(num2);

if(numFloat == num3){
    console.log('both are same');
}else{
    numFloat=Math.ceil(numFloat);
    if(numFloat==num3){
        console.log('now both are same');
    }
    
}


let str='python';
let str1='jargon';

if(str.includes('on') && str1.includes('on')){
    console.log('on is found on both python as well as jargon');
}else{
    console.log('on is not found on python and jargon');
}


let str3='I hope this course is not full of jargon';

if(str3.includes('jargon')){
    console.log('found at');
}


let randNum=Math.random();

console.log(randNum * 10);

let randomNumber = Math.floor(Math.random() * 256);
console.log(randomNumber);

let str5='Javascript';

let randIndex=Math.floor(Math.random() * str5.length);
let randcharIndex=str5.charAt(randIndex);

console.log(`The random characters found at ${randIndex}: ${randcharIndex}`);

console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');

for(let i=1;i<=5;i++){

}

let sentence = 'You cannot end a sentence with because because because is a conjunction';
let phrase = sentence.substr(sentence.indexOf('because'), 24);
console.log(phrase);


let sent='love is the best thing in this world. Some found their love and some are still looking for their love.'


let wordToSearch='love';

let words=sent.split(' ');

let count=0;

for(let i=0;i<words.length;i++){

    if(words[i].toLowerCase()===wordToSearch){
        count++
    }
}
console.log(words);
console.log(`the word ${wordToSearch} apears ${count} times`);


let sentence1 = 'love is the best thing in this world. Some found their love and some are still looking for their love.';
let wordToSearch1 = 'love';
let words1 = sentence1.split(' ');
let count1 = 0;

for (let i = 0; i < words1.length; i++) {
    // Convert both the word to search for and the word from the sentence to lowercase for case-insensitive comparison
    if (words1[i].toLowerCase() === wordToSearch1) {
        count1++;
    }
}



console.log(`The word '${wordToSearch1}' appears ${count1} times in the sentence.`)
let sentence2 = 'You cannot end a sentence with because because because is a conjunction';
let wordToSearch2 = 'because';

let count2 = (sentence2.match(new RegExp(wordToSearch2, 'gi')) || []).length;

console.log(`The word '${wordToSearch2}' appears ${count2} times in the sentence.`);


let text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

// Regular expression to match numbers
let regex = /\d+/g;

// Extract numbers from the text
let numbers = text.match(regex);

// Convert numbers to integers and sum them up
let totalAnnualIncome = numbers.reduce((acc, curr) => acc + parseInt(curr), 0);

console.log(`The total annual income is ${totalAnnualIncome} euro.`);


console.log("*******************************************************************************");