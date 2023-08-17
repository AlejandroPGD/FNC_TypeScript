class Person {
    constructor(private firstName:String, private lastName:string) { }
        /**
         * getFullName
         */
        public getFullName() {
            return `${this.firstName} ${this.lastName}`
        }
   
}

class Teacher extends Person{
    constructor(firstName:string, lastName:string, private code:string){
        super(firstName,lastName);
        this.code=code;
    }
}

class Student extends Person{
    constructor(firstName:string, lastName:string,private avg:number){
        super(firstName,lastName)
    }
}

const person1 = new Person("james","bond");
const person2 = new Person("jason","born");
console.log(person1);
console.log(person2);

const teacher1 = new Teacher("james", "bond","007");

console.log(teacher1)
console.log(teacher1.getFullName())

const student1 = new Student("leonard", "dicaprio",4.2);

console.log(student1);
console.log(student1.getFullName());

a=>
