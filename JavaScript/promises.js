const add = (a,b) =>{
    return a + b;
}

const subst = (a,b) =>{
    return a - b;
}

const prod = (a,b) =>{
    return a * b;
}

const calculator = (a,b,callback) =>{
    return callback(a,b);

}

const values=calculator(2,4,function(a,b) {
    return a + b
} );

console.log(values)

console.log(calculator(5,3,subst));
console.log(calculator(2,3,prod))

/*const url = 'https://restcountries.com/v2/all' 
const getCountries= async () =>{
    
    const response=await fetch(url);
    const json=await response.json()
    return json
}
const printCountries =  async () =>{
    const value=await getCountries();

    const name=value.map(name=>name.name)
    name.forEach(element => {
        console.log(element)
    });
    console.log(name)
    console.log(value)
}

printCountries();


const Calculate = async () =>{
    const square = async (n) =>{
        return n * n;
    }
    const value= await square(3);
    console.log(value);
}

Calculate();
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
const fetchData = async () => {
    try {
      const response = await fetch(catsAPI)
      const cats = await response.json()
    
      console.log(cats)
    } catch (err) {
      console.error(err)
    }
  }
  fetchData()
*/

  //Closure

  function outerFunction(){
    let count=0;
    function innerFunction(){
       count++
       return count
    }
    function innerFunction1(){
        count++
        return count
    }
    function innerFunction2(){
        count ++;
        return count
    }
    return {
        innerFun:innerFunction(),
        innerFun1:innerFunction1(),
        innerFunc2:innerFunction2()
    }
  }
 const func=outerFunction();
 console.log(func.innerFun)
 console.log(func.innerFun1)
 console.log(func.innerFunc2)

 function personAccount(firstName,lastName){
    let incomes=new Map();
    let expenses=new Map();

    function addIncomes(description,amount){
        incomes.set(description,amount)
    }
    function addExpenses(description,amount){
        expenses.set(description,amount)
    }
 }

 