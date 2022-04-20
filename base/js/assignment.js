//  1.   Write a JavaScript conditional statement to find the sign of product of three numbers.
//  Display an alert box with the specified sign.
// use this numbers for testing : 3, -7, 2
function product (x,y,z) { 
    if (x * y * z >= 0) {
        alert ("The sign is +")    
    }else if (x * y * z < 0) {
        alert ("The sign is -")   
    }else {
        alert("put in three parameters")
    }
    }
    // product()

//   2.   Write a JavaScript program that accept two integers and display the larger

function integers(a,b) {
    if(a == b) {
        console.log("Both numbers are equals");   
     }    else {
     console.log("The larger number is " + Math.max(a,b));
        }
}
// or
 function int(a,b) {  
if (a > b) {
    console.log(a);
}else{
    console.log(b);
}
 }

//  int(45,45)

// integers(15,11) 

//     3 . Write a JavaScript conditional statement to find the largest of five numbers. 
// Display an alert box to show the result.
       
   function largest (a,b,c,d,e) {
       var integer = a, b, c, d, e
        if ( a == b == c == d == e) {
            console.log("All numbers are equal");
        }else {
            console.log("The larger number is " + Math.max(a,b,c,d,e));
               }     
     }      
//  largest()
       
// 4.  Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, 
// it will check if the current number is odd or even, and display a message to the screen.
function iterate() {
    for (let i = 0; i < 16; i++) {
      if (i % 2 == 0) {
          console.log( `${i}  "is an even number"`);
      } if (i % 2 !== 0) {
        console.log( `${i}  "is an odd number"`);  
      }      
       }    
}

// iterate()

// 5.  Write a JavaScript program which compute, the average marks of the following students Then,
//  this average is used to determine the corresponding grade.
// var students = [['Tope', 80], ['Chuka', 77], ['Alhaja', 88], ['Adams', 95], ['Tunde', 68]];
// Range	Grade
// <60	F
// <70	D
// <80	C
// <90	B
// <100	A
var students = 
[['Tope', 80], 
['Chuka', 77],
 ['Alhaja', 88],
  ['Adams', 95],
   ['Tunde', 68]];

 var total = 0

 function grade() {
    for (let i = 0; i < students.length; i++) {
        // console.log(students[i][1]);  
        len = students.length
        all = students[i][1]
        total += all
    }
//    console.log(total);
//    console.log(len);
    avg = (total / len)
    // console.log(avg);
    if (avg < 60) {
        console.log("The Grade is F");
    }else if (avg < 70 || avg < 60) {
        console.log("The Grade is D");
    }else if (avg < 80 || avg < 70) {
        console.log("The Grade is C");
    }else if (avg < 90 || avg < 80) {
        console.log("The Grade is B");
    }else if (avg <= 100 || avg < 90) {
        console.log("The Grade is A");
    }else {
        console.log("NO RESULT");
    }
}

//  grade()

// Use JavaScript to find the most frequent item of an array below.
 var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3,];
var mf = 1
 var m = 0


for (let i = 0; i < arr1.length; i++) {

    for (let x = i; x < arr1.length; x++) {
        
        if (arr1[i] == arr1[x]) {
             m++
            //  console.log(m);
        } if (mf<m) {
           console.log( mf=m );
            item = arr1[i];
        }
    }
    m = 0
}
 console.log(item+" ( " +mf +" times ) ")





