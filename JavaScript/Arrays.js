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

const numbers1 = [1, 2, 3, 4, 5, 6]
numbers1.splice(3, 3, 7, 8, 9)
console.log(numbers1.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items
console.log(numbers1)

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
 const backEnd = ['Node','Express', 'MongoDB']
 const fullStack = [frontEnd, backEnd]
 console.log(fullStack)  

 const flatened=fullStack.flat();

 console.log(flatened);

 const arr2=[1,2,3,4,5,6];
 console.log(arr2);
 console.log('the length of array',arr2.length)

 const firstItem=arr2[0];
 console.log(firstItem);

 const middleIndex=Math.floor(arr2.length / 2);
 let middleItem;
 if(arr2.length % 2 ==0){
    middleItem=[middleIndex];

 }else{
    middleItem=arr2[middleIndex];
 }
 console.log(middleItem)

 const LastItem=arr2.length-1;
 console.log(arr2[LastItem]);

 const mixedDataTypes=[
    number=240,
    Boolean=true,
    name='Prasahant',
    car={
        carColor:'red',
        Wheel:4,
        model:'UpperHand'
    }
 ]

 console.log(mixedDataTypes);

 const itCompanies=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon']

 console.log(itCompanies);

let firstComapany=itCompanies[0];

console.log(firstComapany);

const middleIndex1=Math.floor(itCompanies.length /2);

let middleItem1;

if(itCompanies.length % 2=== 0){

    middleItem1=[itCompanies[middleIndex1-1],itCompanies[middleIndex1]]
}else{
    middleItem1=itCompanies[middleIndex1]
}
console.log(middleItem1)

let lastComapany=itCompanies.length-1;

console.log(itCompanies[lastComapany]);

for(comp of itCompanies){
    console.log([comp]);
   
}
for(comp of itCompanies){
    let upper=comp.toUpperCase();
    console.log(upper);
}

let searchCompany='Google';

if(itCompanies.includes(searchCompany)){
    console.log(searchCompany);
}else{
    console.log("does\'nt exists");
}
 
const sort=itCompanies.sort();
console.log(sort);



const slice=itCompanies.slice(0,3);
console.log(slice);

const middle=Math.floor(itCompanies.length / 2);

let item;
let item1;

if(itCompanies.length % 2 === 0){

    item=[middle-1],item1=[middle]
}else{
    item=[middle];
    item1=[middle+1]
}
const middleCompanies=itCompanies.slice(item,item1);
console.log(middleCompanies)


const remove=itCompanies.pop();
console.log(remove);

const removeMiddle=Math.floor(itCompanies.length/2)

let removeMid;

if(itCompanies.length % 2 === 0){

    removeMid=itCompanies.pop();
}
console.log(removeMid)

const shoppingCart=['Milk','Coffe','Tea','Honey'];

//const addMeat='Meat';

if(shoppingCart.includes('Meat')){
    console.log("Already exists")
}else{
    shoppingCart.unshift('Meat')
    console.log("the meat is added to shopping cart")
   
}
console.log(shoppingCart)

if(shoppingCart.includes('Sugar')){
    console.log("the sugar is already exits")
}else{
    shoppingCart.push('Sugar');
    console.log("the Sugar is added to shopping cart")
}
console.log(shoppingCart)

if(shoppingCart.includes('Tea')){
   const replace= shoppingCart.indexOf('Tea')

   shoppingCart[replace]='Green Tea';
}

console.log(shoppingCart)


if(shoppingCart.includes('Honey')){
        const index=shoppingCart.indexOf('Honey');
        shoppingCart.splice(index,1);
}
console.log(shoppingCart)

const countries2 = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  let countryToSearch="Ethiopia";

  let include=countries2.includes(countryToSearch);

  if(include){
    console.log("ETHIOPIA")
  }else{
    countries2.push("Ethiopia")
    console.log(countries2)
  }
  
  const webTechs1 = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Sass'
  ]

  const eleToSearch='Sass';

  const include1=webTechs1.includes('Sass');

  if(!include1){
   webTechs1.push('Sass')

  }else{
   const inde= webTechs1.indexOf('Sass')
   webTechs1[inde]='Css'
  }
  console.log(webTechs1)

const frontEnd1 = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd1 = ['Node','Express', 'MongoDB']

const fullStack1= [frontEnd1,backEnd1];
const flatened1=fullStack1.flat()
console.log(flatened1)