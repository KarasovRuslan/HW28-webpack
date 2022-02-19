class Person {
    constructor(name, age, gender, interests) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interests = interests
    }
    hello() {
        console.log(`Hello my name is ${this.name} I'm ${this.age} years old, and I interest ${this.interests}`);
    }
}

export default Person;