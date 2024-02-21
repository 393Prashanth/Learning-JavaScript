//Passing Array as Parameter

function sumOfArray(arr){

    let sum=0;

    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;

}
const num=[1,2,3,4,5];
console.log(sumOfArray(num));

// Let us access the arguments object
function sumAllNums() {
 console.log(arguments)
}

sumAllNums(1, 2, 3, 4)
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]


//Self Invoking Function

const square=(function(n){
    return n * n;
})(10)

console.log(square);


const changeToUpperCase = arr =>{

    const newArr=[];

    for(let i=0;i<arr.length;i++){
        newArr.push(arr[i].toUpperCase());
    }
    return newArr;
}

/*const countries=['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];


console.log(changeToUpperCase(countries));


const ChangeToUpperCase = arr => {

    const newArr=[];
    for(let element of arr){
        newArr.push(element.toUpperCase());
    }
    return newArr;
}
console.log(ChangeToUpperCase(countries));
*/
function fullName(firstName,lastName){

    return `${firstName} ${lastName}`
}

console.log(fullName('Prashanth','N'));

function addSum(num1,num2){

    return `${num1} + ${num2} is ${num1 + num2}`;
}

console.log(addSum(3,4));

function areaOfRect(){

    let length=3;
    let width=4;

    return 2 *(length + width);
}
console.log(areaOfRect());

function areaOfCircle(){
    let r=3
    return Math.PI * r * r;
}

console.log(areaOfCircle());

const calculateAreaOfCircle = (radius) =>{
    if(radius>0){
    return Math.PI * radius * radius;
    }else{
        return false;
    }
}

const radius=5;

const area=calculateAreaOfCircle(radius);
if(area!==0){
    console.log(`The area of circle is ${radius} and it's radius ${area}`)
}else{
    console.log('the radius must be greater')
}

const calculateWeight =(mass,gravity) =>{
 
    if(mass && gravity >0){

        return mass * gravity;
    }else{
        return false;
    }

}
console.log(calculateWeight(2,9.81));

const checkSeason =(month)=>{
    if(month <1 || month >12){
        return 'invalid';

    }

    switch(month){
        case 1:'Jan'
        case 2:'Feb'
        case 3:'Dec'
            return 'winter'
        case 4:'mar'
        case 5:'apr'
        case 6:'may'
            return 'Summer'
        case 7:'jun'
        case 8:'july'
        case 9:'aug'
            return 'Autumn'
        case 10:'sept'
        case 11:'nov'
        case 12:'oct'
            return 'Spring'
    }
    
}
//const month= parseInt(prompt("enter the month"));
const month=3;
const season=checkSeason(month);

console.log(season);


const printArray = arr =>{
    const newArr=[];
    for(let ele of arr){

        newArr.push(ele);
    }
    return newArr;
}

const Array=[1,2,3,4,5];


console.log(printArray(Array))

const PrintArray = arr =>{

    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}

const array=[1,2,3,4,5];

PrintArray(array);

function showDateTime(){
    const now=new Date();
   let date= now.getDate().toString().padStart(2,'0');
   let month= (now.getMonth()+1).toString().padStart(2,'0');
   let year= now.getFullYear();
   let hours= now.getHours().toString().padStart(2,'0');
   let mins=now.getMinutes().toString().padStart(2,'0');
    return `${date}/${month}/${year}/${hours}:${mins}`
    
    
}

console.log(showDateTime());

const reverseArray = arr =>{
    let newArr=[];
for(let i=arr.length-1;i>=0;i--){
    newArr.push(arr[i]);
}
return newArr;
}

const Array1=[1,2,3,4,5];
console.log(reverseArray(Array1));


const addItem = (item) =>{
    let newArr=[];
    newArr.push(item);
    newArr.push(2);
    return newArr;
}
const AddItem=addItem("apple");
console.log(AddItem);

function displayMassage(){
    console.log("HEllo world");
}

displayMassage();

function calFarToCel(cel){
    return ((cel*9/5)+ 32)
}
console.log(calFarToCel(3))


function SumOfNumbers(number){

    let sum=0;
    for(const num of number){

        sum+=num;
    }
    return sum;

}

let numbers6=[1,2,3,4,5];
console.log(SumOfNumbers(numbers6));



function SumOfOdds(number){
    let sum=0;
    for(let i=0;i<=number.length;i++){
        if(i % 2 !== 0){
            sum+=i
        }
    }
    return sum;
}
const SumOdd=[1,2,3,4,5,6]
console.log(SumOfOdds(SumOdd));


function sumOfOdds(number){

    let sum=0;
    for(let i=2;i<=number;i+=2){
        sum+=i
    }
    return sum;
}
console.log(sumOfOdds(6))


function evensAndOdds(integer){
    let even=0;
    let odd=0;
  
    for(let i=0;i<=integer;i++){
        if(i % 2 === 0){
           even++;
            
        }else{
            odd++;
        }
    }
   return `The even numbers${even}, The odd numbers are${odd}`
}

console.log(evensAndOdds(100));


function randomUserIp(){

   const num1=Math.floor(Math.random() * 256);
   const num2=Math.floor(Math.random() * 256);
   const num3=Math.floor(Math.random() * 256);
   const num4=Math.floor(Math.random() * 256);
   return `${num1}.${num2}.${num3}.${num4}`
}

const IpAddress=randomUserIp();
console.log(IpAddress)