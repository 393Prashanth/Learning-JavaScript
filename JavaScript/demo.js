function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
const color = () =>{
    setInterval(() =>{
        let text=document.querySelector('h1')
        let specificNumber=text.textContent.match(/\d+/g)
        
        
    },1000)
} 
color();

let DateTime = () =>{
    setInterval(()=>{
        let dateTime=new Date();
        let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let month = monthNames[dateTime.getMonth()];
        let date=dateTime.getDate();
        let year=dateTime.getFullYear();
        let hour=dateTime.getHours();
        let minutes=dateTime.getMinutes()
        let seconds=dateTime.getSeconds();
        if(hour<10){
            hour='0'+ hour;
        }
        if(minutes<10){
            minutes='0'+ minutes;
        }
        if(seconds<10){
           seconds='0'+seconds;
        }
        let formattedDateTime= `${month} ${date} ${year} ${hour}:${minutes}:${seconds}`
       
        document.getElementById('dateTime').innerHTML=formattedDateTime
        document.getElementById('dateTime').style.color=getRandomColor();
    },1000)
   
}
DateTime();


const list=document.getElementsByTagName('li');
for(let i=0;i<list.length;i++){
    if(list[i].textContent.includes('Done')){
        list[i].style.color='green'
    }else if(list[i].textContent.includes('Ongoing')){
        list[i].style.color='Yellow'
    }else if(list[i].textContent.includes('Challenge Coming')){
        list[i].style.color='red'
    }else{
        console.log("empty")
    }
}
console.log(list)


function isPrime(num){
    if(num <=1) return false;

    for(let i=2;i<=num/2;i++){
         if(num % i === 0){
            return false
         }
    }
    return true;
}

let title=document.getElementById('container')

for(let i=0;i<=100;i++){
    let divContainer=document.createElement('div');
    divContainer.textContent=i;
    if(isPrime(i)){
        divContainer.style.color='red';
    }else if(i % 2 === 0){
        divContainer.style.color='yellow';
    }else{
        divContainer.style.color='blue'
    }
    title.appendChild(divContainer)
}

const url='https://restcountries.com/v2/all' 

const getCountries = async () =>{
    const response=await fetch(url);
    const json=await response.json();
    return json;
}



const printCountries = async () =>{
    
    const countries=await getCountries();
    const countrylist=countries.map(name=>name.name);
    const countriesContainer=document.getElementById('container-list');
    countrylist.forEach(country=>{
        const divContainer=document.createElement('div');
        divContainer.textContent=country;
    countriesContainer.appendChild(divContainer);
    })
}
printCountries();





const button=document.querySelector('button')
button.addEventListener('click',function(){

const numberRange=document.getElementById('number');
for(let i=0;i<100;i++){
    const divContainer=document.createElement('div');
    divContainer.textContent=i;
    numberRange.appendChild(divContainer)
}

});