//Practise#1
//  write a javascript program to check two numbers and 
// return true if one of the number is 100 or if the sum of the two numbers is 100


const isEqualTo100 =(a, b) => a === 100 || b === 100 || (a + b) === 100;

 console.log(isEqualTo100(100, 0));
 console.log(isEqualTo100(10, 0));
 console.log(isEqualTo100(40, 60));
 console.log(isEqualTo100(10, 10));


//#2
// Write a javascript program to get the extension of a filename. 

const getFileextension = (str) => str.slice(str.lastIndexOf('.'));

console.log(getFileextension('index.html'));
console.log(getFileextension('webpack.config.js'));


//#3 cofusion 
//Write a javascript program to replace every charecter in a given string with the chareacter following it in the alphabet

 const moveCharsForward = str =>str.split('').map(char =>String.fromCharCode(char.charCodeAt(0)+1)).join('');
console.log(moveCharsForward("abcdxyz"))


//#4
//write a javascript program to get the current date. expected output: mm-dd-yyyy, mm/dd/yyyy, or dd-mm-yyyy, dd/mm/yyyy

const formatDate = (date = new Date()) =>{
    const days= date.getDate();
    const months = date.getMonth();
    const years = date.getFullYear();
    const hours = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    // const time = date.getTime();
    return `${days}/${months}/${years} : ${hours}: ${min}: ${sec}`;
}
console.log(formatDate());


//#5
//Write a javascript program to create a new string adding"new " in front of given  string if the given string begins with new already then return the original string.

 
 const addNew = str =>
 str.indexOf('new!') === 0 ? str : `new! ${str}`;

 console.log(addNew('new! Offers'));

