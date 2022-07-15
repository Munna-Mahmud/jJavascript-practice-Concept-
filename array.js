// What is the avarage salary of people 

const people = [
   
    { firstName: "yam", lastname: "hugku", dept: 'computer', salary: 10 },

    { firstName: "ram", lastname: "hugku", dept: 'computer', salary: 9 },

    { firstName: "Tam", lastname: "hsgug", dept: 'computer', salary: 8 },

    { firstName: "Kam", lastname: "hfg", dept: 'electri', salary: 4 },

    { firstName: "Jam", lastname: "hubbg", dept: 'civil', salary: 5 },

    { firstName: "Jam", lastname: "hubbg", dept: 'civil', salary: 5 }

]

// const initialVal = 0;
// const summ = people.reduce(
//     (pre, cur) => (pre + cur.salary) , 
//     initialVal
// ) /  people.length
// console.log(summ);


// get full name of all peoples (first and last name )
// var name = people.map(({firstName, lastname}) => `${firstName} ${lastname}`)
// var name = people.map(person =>(`Name : ${person.firstName}, DepartMent : ${person.dept}`))
// console.log(name);


// how many people are there in each department 

// const summ = people.reduce(
//     (acc, cur) => ({...acc, [cur.dept]: acc[cur.dept] + 1 || 1 }),  {},  ) 

// console.log(summ);



// Write a JavaScript program to check two numbers and return true if one of the number is
// 100 or if the sum of the two numbers is 100


let num1 = 10;
let num2 = 50;

if(num1 || num2 === 100  || num1+num2 === 100 ){
    console.log('all right');
} else{
    console.log('fuck you ');
}

