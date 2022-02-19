import Student from './Student';
import Teacher from './Teacher';

let student = new Student('Ruslan', 27, 'Male', 'Front-end');
let teacher = new Teacher('Oleg', 33, 'Male', 'IT', 'Front-end Pro');

console.log('Student', student);
console.log('Teacher', teacher);

const heading = document.createElement('h1')
heading.textContent = 'Привет Вебпак'
const root = document.querySelector('#root')
root.append(heading);