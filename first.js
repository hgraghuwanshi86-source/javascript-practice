//creating and calling functions 
function number (a)
{console.log (a)};
number(3);

//greet hello
function greet()
{console.log('hello');}
greet();

//parameters=input
function greeting (name)
{console.log('hello', name)};
greeting("mahima");
//not passed the parameter it shows undefined
greeting();


//(return)add two numbers 
function sum (a,b) {
  return a+b ;
}
let result = sum(3,4);
console.log(result );

//ARROW FUNCTION
// sum of two numbers 
const add = (a,b) => 
   {return a+b; }
console.log(add(12,80));

//more shorter way (works for single expression)[implicit return]
const square = num => num*num ;
console.log(square(4));

/*q) create a function using the "function" keyword that 
     takes a string as an argument and returns the number
     of vowels in the string?*/
   
// code :
 
function countvowels (string) { let count=0

   for (let char of string)
      {if (char==='a' ||
           char==='e'||
           char==='i' ||
           char==='o' ||
           char==='u' )
      {count++;}}
      return count;
}
console.log (countvowels('icecream'));

/*q) create a function using the "function" keyword that 
     takes a string as an argument and returns the number
     of vowels in the string?
     write arrow function for thuis question !!*/

  //code :
  
  const vowels = (string) => {let count=0

   for (let char of string)
      {if (char==='a' ||
           char==='e'||
           char==='i' ||
           char==='o' ||
           char==='u' )
      {count++;}}
      return count; }
      console.log (vowels('skydiving'))
;













































 

