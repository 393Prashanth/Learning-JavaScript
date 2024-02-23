class Person {
    constructor(firstName, lastName, age, country, city) {
   
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score=0
      this.skills=[]
    }
   
    /**
     * @param {number} score
     */
    set setScore(score){
        this.score+=score
    }
    /**
     * @param {string | number} skill
     */
    set setSkill(skill){
        this.skills.push(skill)
    }
    getfullName(){
        let fullName=`${this.firstName} ${this.lastName}`
        return fullName
    }
    getPersonInfo() {
        let fullName = this.getfullName()
        let skills =
          this.skills.length > 0 &&
          this.skills.slice(0, this.skills.length - 1).join(', ') +
            ` and ${this.skills[this.skills.length - 1]}`
    
        let formattedSkills = skills ? `He knows ${skills}` : ''
    
        let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
        return info
      }
    static favoriteSkill() {
        const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
        const index = Math.floor(Math.random() * skills.length)
        return skills[index]
      }
      static showDateTime(){
        let now=new Date();
        let year=now.getFullYear();
        let month=now.getMonth();
        let date=now.getDate();
        let hours=now.getHours();
        let minutes=now.getMinutes();
        let seconds=now.getSeconds();
        if(hours<10){
            hours='0'+ hours
        }
        if(minutes<10){
            minutes='0' + minutes
        }
        if(seconds<10){
            seconds='0' + seconds
        }
        let dateMonthYear=date + '/' + month + '/' +  year
        let time=hours + ':' + minutes
        let fullTime=dateMonthYear + ' '+ time
        return fullTime
      }
      get getScore(){
        return this.score
    }
    get getSkill(){
        return this.skills
    }
  }
 
  const person=new Person('PrashanthKumar','N',25,'India','Bangarpet');
  console.log(person)
  console.log(person.skills)
  console.log(person.score)


  person.setScore=1
  person.setSkill=['HTML','CSS','JavaScript','React']
  console.log(person.skills)
  console.log(person.score)
  //Calling the instance of class
  console.log(person.getfullName())
  console.log(person)
  console.log(Person.favoriteSkill())
  console.log(Person.showDateTime())
 

  class Student extends Person {
    constructor(firstName, lastName, age, country, city, school) {
      super(firstName, lastName, age, country, city); // Call the parent class constructor
      
      this.school = school; 
      this.skills=[]// Additional property for Student class
    }
  
    saySomething() {
      console.log('I am a child of the person class');
    }
    
  }
  
  const father = new Person('PrashanthKumar', 'N', 25, 'India', 'Bangarpet');
  const student = new Student('StudentFirstName', 'StudentLastName', 18, 'India', 'Bangalore', 'XYZ School');
  student.setSkill=['HTML','CSS','JavaScript','React']
  console.log(student.getfullName()); // Accessing method from the parent class
  console.log(student.school); // Accessing property from the child class
  console.log(student); // Output student details including inherited details from Person
  console.log(student.getPersonInfo())
  console.log(person.getPersonInfo())
  console.log(person.getSkill)
  console.log(student.getSkill)

  
  class Statistics{
    constructor(data){
        this.data=data
    }

    Mean(){
        const sum=this.data.reduce((acc,curr) =>acc +curr,0)
         return sum / this.data.length
    }

    Meadian(){
        const sortedData=this.data.sort((a,b) => a -b)
        const middleItem=Math.floor(sortedData.length / 2)
        if(sortedData.length % 2 === 0){
            return (sortedData[middleItem-1] + sortedData[middleItem])/2
        }else{
            return sortedData[middleItem]
        }
    }
   Range(){
        return Math.max(...this.data) - Math.min(...this.data)
   }
   Variance(){
    const mean=this.Mean();
    const squaredDifference=this.data.map(num => Math.pow(num - mean,2))
    const variance=squaredDifference.reduce((acc,curr)=> acc + curr,0) / squaredDifference.length
   }

   Min(){
    return Math.min(...this.data)
   }
   Max(){
    return Math.max(...this.data)
   }
  }
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const stats=new Statistics(ages)
  console.log(stats.Range())
  console.log(stats.Max())


  ////JSON

  const usersText = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }`
    
    const usersObj = JSON.parse(usersText, (key, value) => {
        let newValue =
          typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
        return newValue
      })
      console.log(usersObj)

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
          skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'Redux',
            'MongoDB',
            'Express',
            'React',
            'Node'
          ],
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
          skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'MongoDB',
            'Express',
            'React',
            'Node'
          ],
          age: 20,
          isLoggedIn: false,
          points: 40
        }
      }
      
      const replace=JSON.stringify(users,undefined,4)
      console.log(replace)
   
      
    const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
    const changeSkills=JSON.stringify(users,['age'])
    console.log(changeSkills)
    let maxSkillsUser = null;
let maxSkillsCount = 0;

for (const [username, userData] of Object.entries(users)) {
  const numSkills = userData.skills.length;
  if (numSkills > maxSkillsCount) {
    maxSkillsCount = numSkills;
    maxSkillsUser = username;
  }
}

console.log(`User with the most skills: ${maxSkillsUser} (Skills count: ${maxSkillsCount})`)

const user = {
    firstName: 'Asabeneh',
    age: 250,
    skills: ['HTML', 'CSS', 'JS', 'React']
  }
  
  const userText = JSON.stringify(user, undefined, 4)
  localStorage.setItem('user', userText)