function a(b){
    b();
    return 'The output from A';
}
function b(){
    console.log("the output from B")
}
const c=a(b);
console.log(c)

const callback = (n) =>{

    return n ** 2;
}

const cube = (callback,num) => {
    return callback(num) * num;
}
console.log(cube(callback,3))
console.log(callback(3))

const arr=[1,2,3,4,5];


const callback1 = (arr) =>{
    let sum=0;
    arr.forEach(element => {
       sum+=element 
    });
    return sum;
}

const SumArray = (callback1,num) =>{
  
    let sum=0;

    num.forEach(element =>{

            sum+=element;
    });
    return sum;
}
let sum=0;

console.log(SumArray(callback1,arr))
console.log(callback1(arr))

const countries=['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
countries.forEach((element) =>{
    console.log(element)
})

//Explicit Return Arrow Function
const toUpper=countries.map((country) => country.toUpperCase());
console.log(toUpper)
//Arrow Function
const Upper=countries.map((country)=>{
    return country.toUpperCase();
})
console.log(Upper)

const scores = [
    { name: 'Asabeneh', score: 95 },
     { name: 'Lidiya', score: 98 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
  ]

  const scoresGreaterThanEighty=scores.filter((num) => num.score>80);
  console.log(scoresGreaterThanEighty)

  const arrNums=arr.every((num) => typeof num === 'number')
  console.log(arrNums)

  const everyCountry=countries.every((country) => typeof country === 'string')
  console.log(everyCountry)

  const findScoreGreaterThanEighty=scores.find((score) => score.score>80)
  console.log(findScoreGreaterThanEighty)

  const eachCountry=countries.forEach((country)=>{
    console.log(country)
  })
 
  //Explicit Arrow funcion
  const toUpperCase=countries.map((country) => country.toUpperCase());
  console.log(toUpperCase)

  const countryLength=countries.map((country) => country.length)
  console.log(countryLength)
  const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

const prices=products.map((price)=> price.price);
console.log(prices)

const filterWithLand=countries.filter((country) =>{
    return country.includes('land');
})
console.log(filterWithLand)

const filterWithLength=countries.filter((country)=>{
    return country.length === 6;
})
console.log(filterWithLength)

const countryStartsWith=countries.filter((country)=>country.startsWith('D'))
console.log(countryStartsWith)
const validProducts = products.filter(function(item) {
    // Filter out products with non-numeric or falsy prices
    return typeof item.price === 'number' 
  });
  
  console.log(validProducts);

const prices1=products.filter((price) =>{
    return price === 'number'
})
console.log(prices1)


const totalPrice = products.reduce(function(acc, item) {
    // Convert item.price to a number if it's a valid number
    const price = typeof item.price === 'number' && !isNaN(item.price) ? item.price : 0;
    return acc + price;
  }, 0);
  
  console.log(totalPrice); 

  console.log("********************************************");

  ///////SETS////////

  const set=new Set();
  console.log(set);

  //Creating the set from array

  const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
  const languages1 = [
    'English1',
    'Finnish1',
    'English1',
    'French1',
    'Spanish1',
    'English',
    'French',
  ]

  const setOfLanguages=new Set(languages);
  console.log(setOfLanguages)

  for(const language of setOfLanguages){
    console.log(language)
  }

  for(const language of languages1){
    setOfLanguages.add(language)
  }
  console.log(setOfLanguages)

  console.log(setOfLanguages.delete('English'))
  console.log(setOfLanguages)


 //Union Of Sets

 let ab=[1,2,3,4,5];
 let bc=[6,7,3,4,8,9];
 let cd=[...ab,...bc];

 let A=new Set(ab);
 let B=new Set(bc);
 let C=new Set(cd);
console.log(C)


let inter=ab.filter((num) =>B.has(num))
let intersection=new Set(inter);
console.log(intersection)

// Define an object with country names
const countries3 = {
  "USA": "United States of America",
  "Canada": "Canada",
  "Germany": "Germany",
  "France": "France",
  "Japan": "Japan"
};

// Create an empty map to store the number of characters of each country name
let characterCountMap = new Map();

// Iterate over the countries object and populate the map with the number of characters for each country name
for (let country in countries3) {
  characterCountMap.set(country, countries3[country].length);
}

console.log("Map of countries and number of characters:", characterCountMap);


let stringArray=['a','b','c','d','e'];

let setOfFiveString=new Set(stringArray);
console.log(setOfFiveString)


///Destructing and Spread Operator
let num=[1,2,3,4,5,6,7,8,9];

let[...rest]=num;

console.log(rest)

const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]

for(const [first, second, third,fourth] of fullStack) {
console.log(first, second, third,fourth)
}

///Object parameter without Destructing 

const rect={
  width:20,
  height:10
}

const calcPerimeter = rectangle =>{
  return 2 * ( rectangle.width + rectangle.height)
  
}
console.log(calcPerimeter(rect))

const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  job: 'Instructor and Developer',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  languages: ['Amharic', 'English', 'Suomi(Finnish)']
}
// Let us create a function which give information about the person object with destructuring

let getPersonInfo = ({
  firstName,lastName,age,country,job,skills,languages
}) =>{
    const formattedSkills=skills
    const formattedlanguages=languages
    personData=`I am ${firstName} ${lastName}. I am ${age} years old and lived in ${country}. I am ${job} and I will teach ${skills} and also know these ${languages}`
    return personData
}
console.log(getPersonInfo(person))

// Let us create a function which give information about the person object without destructuring

let personInfo = obj =>{
 
  const formattedSkills=obj.skills
  const formattedlanguages=obj.languages

  personData=`I am Mr.${obj.firstName} ${obj.lastName}. I am ${obj.age} years old and lives in ${obj.country}.I am ${obj.job} and I will teach ${formattedSkills} and I also know these ${formattedlanguages}`
  return personData
}

console.log(personInfo(person))

//Object Parameter with Destructing

const calculatePerimeter = ({ width,height}) =>{
    return 2 *( width + height)
}
console.log(calculatePerimeter(rect))


//Destrucing Object during iteration

const todoList = [
  {
    task:'Prepare JS Test',
    time:'4/1/2020 8:30',
    completed:true
  },
  {
    task:'Give JS Test',
    time:'4/1/2020 10:00',
    completed:false
  },
  {
    task:'Assess Test Result',
    time:'4/1/2020 1:00',
    completed:false
  }
  ]

  for(const {task,time,completed} of todoList){
    console.log(task,time,completed);
  }


  //Modifying or changing the object while copying
  const user = {
    name:'Asabeneh',
    title:'Programmer',
    country:'Finland',
    city:'Helsinki'
  }
  
  const copiedUser = {...user, title:'instructor'}
  console.log(copiedUser)

  const constants=[2.41,3.14,9.81,37,100]

  let [e,pi,gravity,humBodyTemp,WaterBoilTemp]=constants

  console.log(e,pi,gravity,humBodyTemp,WaterBoilTemp);