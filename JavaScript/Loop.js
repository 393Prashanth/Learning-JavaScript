for(let i=10;i>=0;i--){
    console.log(i);
}

let j=10;

while(j>=0){
    console.log(j);
    j--;
}

let k=10;
do{
    console.log(k);
    k--;

}while(k>=0);


for(let i=0;i<5;i++){
    let pattern='';
    for(let j=0;j<i+1;j++){
        pattern+="*";
        }
    console.log(pattern);
}

let num1=2;

for(let i=1;i<=10;i++){
    console.log(`${num1} * ${i} = ${num1 * i}`)
}
console.log("i\ti^2\ti^3")
for(let i=0;i<=10;i++){
   
    console.log(`${i ** 1}\t${i ** 2}\t${i ** 3}`)
}
/*
//Prime Numbers between 0 to 100
prompt("Enter the numbers range");

for(let num=0;num<=100;num++){

    let isPrime=true;

    if(num>1){
        for(let i=2;i<num;i++){

            if(num % i === 0){
                isPrime=false;
                break;
            }
        }
    }else{
    isPrime=false;
}

if(isPrime){
    console.log(num);
}
}
//Print the sum of Numbers
prompt("enter the range of numbers");
let sum=0;
for(let num=0;num<=100;num++){
    sum+=num;
}
console.log(`the sum of 100 numbers is ${sum}`);

//Print the sum of evenSum and oddSum of Numbers
prompt('enter the range of numbers');
let evenSum=0;
let oddSum=0;

for(let num=0;num<=100;num++){

    if(num % 2 === 0){
        evenSum+=num;
    }else{
        oddSum+=num;
    }
}
console.log(`the sum of even number is ${evenSum} and the sum of odd number is ${oddSum}`);

//Print the sum of evenSum and oddSum of Numbers as Array
prompt('enter the range of numbers');

let evenSum1=0;
let oddSum1=0;
for(let num=0;num<=100;num++){

    if(num % 2 === 0){
     evenSum1+=num;

    }else{
       oddSum1+=num;
    }
}
console.log([evenSum1],[oddSum1]);
*/

let randomnum=[];

for(let i=0;i<5;i++){

    let randomnums=Math.floor(Math.random() * 10);

    if(!randomnum.includes(randomnums)){
    randomnum.push(randomnums)
    }
}

console.log(randomnum);

let str='ABCDEFGHIJKLNMOPQURSTUVWXYZabcdefghijklnmopqurstuvwxyz0123456789';


let str2='';

for(let i=0;i<6;i++){

    let str1=Math.floor(Math.random() * str.length);
  str2+=str.charAt(str1);
}
console.log(str2);


let randchar='';

for(let i=0;i<25;i++){

    let randCharacter=Math.floor(Math.random() * str.length)
    randchar+=str.charAt(randCharacter);
}
console.log(randchar);

let hexadeci='0123456789abcdef';

let hexadecimal='';

for(let i=0;i<6;i++){
    let hexadecimalNum=Math.floor(Math.random() * hexadeci.length);
    hexadecimal+=hexadeci.charAt(hexadecimalNum);
}
console.log(hexadecimal);

let array=["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA","EIAMEC"]
console.log(array);


 const arr=[];

 for(let i=0;i<array.length;i++){

    let word=array[i];
    let length=word.length;
    arr.push(length);
 }

 console.log(arr);

 
let arr1=[];

for(let i=0;i<array.length;i++){

    let word=array[i];

    if(word.includes("LAND")){
      
       arr1.push(word);
    }
   
}
if(arr1.length>0){
    console.log(arr1);
}else{
    console.log("countries without land");
}

let arr2=[];

for(let i=0;i<array.length;i++){

    let word=array[i];

    if(word.endsWith('IA')){
        arr2.push(word);
    }
}

if(arr2.length>0){
    console.log(arr2);
}else{
    console.log('no word');
}

//Using the above countries array, find the country containing the biggest number of characters.
let arr3=[];
let maxLength=0;

for(let i=0;i<array.length;i++){

    let word=array[i];

    let length=word.length;

    if(length>maxLength){
        maxLength=word.length;
        arr3=word;
    }
}

console.log([arr3]);

const arr4=['banana','apple','mango'];
const arr5=[];
for(let i=arr4.length-1;i>=0;i--){

    let word=arr4[i];

    arr5.push(word);
   
}
console.log(arr5)

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

  const flattendArray=fullStack.flat();

  console.log(flattendArray);

  const nextLine=flattendArray.join("\n");

  console.log(nextLine);

  const arr6=[];

  for(let arr of array){

    if(arr.includes('LAND')){
        arr6.push(arr);
    }
  }

  console.log(arr6);


  const arr7=[];

  let maxLength1=0;

  for(let arr of array){
    if(arr.length>maxLength1){
        maxLength1=arr;
        arr7.push(maxLength1);
    }
  }

  console.log(arr7);

  
  
  const countriesWithLand = array.filter(country => country.toLowerCase().includes('land'));
  
  console.log(countriesWithLand);
  