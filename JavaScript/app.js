//Complete Arrays 

const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries


console.log('numbers',numbers);
console.log('numbers',numbers.length);

console.log('Fruits',fruits);
console.log('Fruits',fruits.length)


//Using the different data types in Array

const arr = [
    'Asabeneh',                                      
    250,                                          
    true,                                          
    { country: 'Finland', city: 'Helsinki' },       
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] } 
];

console.log(arr);

//Split() Method

let js='javascript';
const characters=js.split('')

 console.log(characters);
 let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')

console.log(companies);

//Accessing the array values by using the index

let comp=companies[3];
console.log(comp);

let access=js[0];
console.log(access);

let lastIndex=companies.length-1;
console.log(companies[lastIndex]);

//Modifying the Array Element

const num=[1,2,3,4,5];
num[0]=10;
num[1]=20;

console.log(num);

const countries1=['Ind','SA','NZ','PAK'];

countries1[3]='ENG';
let lastIndex1=countries1.length-1;
console.log(countries1[lastIndex1]);

console.log(countries1)


//Array Methods 

//TO Create an Array (Array constructor)

const array=Array();
console.log(array);

//Creating the static values using the fill() Method

const staticValues=Array(4).fill('x');
console.log(staticValues);

//Concating the two Arrays

const firstArray=[1,2,3,4,5];

const secondArray=[6,7,8,9,4];

const thirdArray=firstArray.concat(secondArray);

console.log(thirdArray);

//Getting the Array length

console.log('the length of array:',thirdArray.length);

//Getting the index of array

console.log('the index of 3 is:',thirdArray.indexOf(3));
console.log('the index of 7 is:',thirdArray.indexOf(7));

//Check the element if it exists in an Array (indexOf() & include() methods)

//Using the IndexOf() Method return -1 does not exists

let elementTOSearch=thirdArray.indexOf(0);

if(elementTOSearch!=-1){
    console.log("the element exists in array");
}else{
    console.log('the element does not exists in an array');
}

//Using the Include() Method return True/Flase

let elementToCheck=6;

if(thirdArray.includes(elementToCheck)){
    console.log('the element is exists in an array');
}else{
    console.log('the element is not exists in an array');
}

//Ternary Operator

elementTOSearch === -1 ? console.log('the element does not exits') :
console.log('the element is exists in an array');


//Getting LastIndex of an element in array

console.log(thirdArray.lastIndexOf(4));

//Converting Array to String
console.log(thirdArray.toString());
console.log(fruits.toString());


//Joining Array Elements

console.log(countries.join(' #'));

//Slice Array Elements

console.log(thirdArray.slice(0,2)); //[1,2]

//Splice Method in Array

const num1=[1,2,3,4,5,6];
const splice=(num1.splice(3,3,7));
console.log(splice);

//Adding and Removing the Element in an array
thirdArray.push(10); //Adding at the end of array
console.log(thirdArray);

thirdArray.unshift(0);
console.log(thirdArray);//Adding the element at the starting

thirdArray.pop(10);
console.log(thirdArray) //Removing the element at he End

thirdArray.shift(0);
console.log(thirdArray);//Removing the element at the starting

//Reverse() and Sort() Method

console.log(countries.reverse());


console.log(countries.sort());
