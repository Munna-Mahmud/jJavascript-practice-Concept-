
// loop 
// for (var x =1 ; x <=10; x++){
//     console.log("American")
// }


// var x = 0
// for (x=1; x <=10; x++){
//     console.log(x)
// }

// console odd number 1-100 

// var x = 0;

//  for (var x=1; x<=99; x = x + 2){
//      console.log(x)
//  }


//  console plus number jhor number 

// for ( var x = 2; x <=100; x = x + 2){
//     console.log(x)
// }



// var sum = 0;
// for (var x=1; x <=10; x= x+1){
//     sum= sum+x;
// }
// console.log(sum)

// var sum = 0;
// for (var x=1; x <=10; x= x+1){
//     sum= sum+x;
// }
// console.log(sum)



// var a = parseInt(prompt("Enter the starting number : "));
// var b = parseInt(prompt("Enter the last number : "));
// var sum = 0;
// for (var x = a; x <= b; x = x + 1) {
//     sum = sum + x;
// }
// document.write(sum)


// function result( nam1, nam2){

//  var sum = nam1+ nam2;
//  console.log(sum)

// }

// result(12, 30)

// arrow function 
//  result = (munna, miju) =>{
//      sum= munna-miju;
// console.log(sum)
// }

// result(50, 79)


var students = [
    {
        id: 13,
        name: "munna",
        address: 'savar dhaka',
        gpa: 4.33


    },
    {
        id: 53,
        name: "kamrul",
        address: 'borishal dhaka',
        gpa: 3.33

    },
    {
        id: 33,
        name: "rabeya",
        address: 'califrnia dhaka',
        gpa: 4.56

    }
]
// this is for just sort out the name who got more that 4 point 
// function studentsNames() {
//     return students.filter(function (x) {
//         return x.gpa > 4
//     }).map(function (y) {
//         return y.name
//     })
// }

// console.log(studentsNames())

// USING ARROW FUNCTION 
const studnetsNames2 = () => students.filter((x) => x.gpa > 4).map((y)=> y.name);

console.log(studnetsNames2())




