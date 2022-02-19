import Person from './Person';

class Student extends Person {
    constructor(name, age, gender, interests) {
        super(name, age, gender, interests);
    }
    hello() {
        super.hello(this.name, this.age);          
    }
}

export default Student;