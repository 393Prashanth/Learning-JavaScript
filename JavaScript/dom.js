const element=document.getElementsByTagName('h1')
for(let i=0;i<element.length;i++){
    console.log(element[i])
}
element[3].classList.add('title', 'header-title')
element[3].classList.remove('header-title')


element[3].setAttribute('id','fourth-title');
console.log(element)



document.getElementById('fourth-title').innerHTML='<h3>Fourth Title</h3>'


//const allPara=document.querySelectorAll('p');

const para1=document.querySelector('#para-id1')
const para2=document.querySelector('#para-id2')
const para3=document.querySelector('#para-id3')
const para4=document.querySelector('#para-id4')
const para5=document.querySelector('#para-id4')

const Allpara=document.querySelectorAll('p')

Allpara.forEach((element,i)=>{
    element.style.fontSize='24px'
    if(i % 2 === 0){
        element.style.color='Blue'
    }else{
        element.style.color='red'
    }
})

Allpara[3].textContent="Fourth Paragraph"
console.log(Allpara)


let paragraph1=document.querySelector('#para-id1')
if(paragraph1){
    paragraph1.textContent='Modified Paragraph';
   
}
let paragraph2=document.querySelector('#para-id2')
if(paragraph2){
    paragraph2.textContent='Modified Paragraph';
    
}
let paragraph3=document.querySelector('#para-id3')
if(para3){
    paragraph3.textContent='Modified Paragraph';
   
}
let paragraph4=document.querySelector('#para-id4')
if(paragraph4){
    paragraph4.textContent='Modified Paragraph';
   
}

console.log(paragraph1)
console.log(paragraph2)
console.log(paragraph3)
console.log(paragraph4)




let paragraph5=document.querySelector('#para-id5');

if(paragraph5){
    
    paragraph5.className='title';
    paragraph5.style.fontSize='24px';
    paragraph5.textContent='Creating html tag using javascript'
    
}
console.log(paragraph5)

let title=document.createElement('p');

title.className='Paragraph';
title.style.fontSize='24px'
title.textContent='Creating the data from Javascript'

document.body.appendChild(title);
console.log(title)

let title3
for(let i=0;i<3;i++){
    title3=document.createElement('h1');
    title3.className='header-1';
    title3.style.fontSize='24px';
    title3.textContent='header-one';

    document.body.appendChild(title3)
    console.log(title3)
}

