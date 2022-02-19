import Person from './Person';

class Teacher extends Person {
    constructor(name, age, gender, interests, subject) {     
        super(name, age, gender, interests, subject);
        this.subject = subject;
    }
    hello() {
        console.log(`Hello my name is ${this.name} I'm ${this.age} years old. I will teach a ${this.subject} subject`);  
    }
}

export default Teacher;