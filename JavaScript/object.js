//Getting the values from Object

const person={
    firstName:'Prashanth',
    lastName:'N',
    Age:25,
    country:'India',
    city:'Banglore',
    Skills:[
        'HTML',
        'CSS',
        'ASP.NET',
        'Java',
        'JavaScript'
    ],
    getFullName:function(){
        return `${this.firstName} ${this.lastName}`
    },
    'Phone number':'+918073467722'
    
};



person.getPersonInfo=function(){
    let SkillsWithoutLastSkill=this.Skills.splice(0,this.Skills.length-1)
    let lastSkill=this.Skills.splice(this.Skills.splice.length-1);
    let skills=`${SkillsWithoutLastSkill} ${lastSkill} `
    return skills;
}

console.log(person.getPersonInfo())


const dog={}
console.log(dog);

dog.name='Rat';
dog.legs=4;
dog.color='Black';
dog.age=5;

dog.bark=function(){
    return 'woof woof';
};

console.log(dog)

console.log(dog.name);
console.log(dog.age);
console.log(dog.color);
console.log(dog.bark());

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
console.log(users)
const Prashanth=Object.assign({},users);

console.log(Prashanth);
const keys=Object.keys(Prashanth);
console.log(keys)


for(const user in users){

    const{email,age,points}=users[user]
    console.log(`Email:${email}`)
}


const enter=Object.entries(users);
console.log(enter)

let maxSkills=0;
let personWithMaxSkills=null;

for(const keys in users){
    const user=users[keys];
    const numSkills=user.skills.length;

    if(numSkills>maxSkills){
        maxSkills=numSkills;
        personWithMaxSkills=user;
    }
}
console.log(personWithMaxSkills)

let loggedin=0;
let pointsGreater=0;

for(const keys in users){
   
    let key=users[keys];
    

    if(key.isLoggedIn){
       loggedin++
    }
    if(key.points>=50){
        pointsGreater++;
    }
   
}
console.log(pointsGreater)
console.log(loggedin)


