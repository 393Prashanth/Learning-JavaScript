/*function isPrime(num){
    if(num<=1) return false;

    for(let i=2;i<=num/2;i++){
        if(num % i === 0){
            return false
        }
    }
    return true
}

const isPrimeEvenOdd = () =>{


const numberRange=document.getElementById('number-list');
const range=document.getElementById('number')
const button=document.querySelector('button')
button.addEventListener('click',function(){
const Value=parseInt(range.value)
for(let i=0;i<=Value;i++){
    const divContainer=document.createElement('div');
    divContainer.textContent=i;
    if(isPrime(i)){
        divContainer.style.color='green'
    }else if(i % 2 === 0){
        divContainer.style.color='Yellow'
    }else{
        divContainer.style.color='red'
    }
   
    numberRange.appendChild(divContainer)
}
})

}
isPrimeEvenOdd();
*/