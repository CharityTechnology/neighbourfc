function Person ({name,age,job}){
    this.name = name;
    this.age = age;
    this.job = job;
}

console.log(typeof Person)
const person1 = new Person ("j")
console.log( typeof person1)