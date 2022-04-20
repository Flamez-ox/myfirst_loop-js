 var arr = [
     'Adams',  // 0
     44, // 1
     'Mark' // 2
    ]
// var result = arr[2]
// result = 'Lagos'
// console.log(result);



var arr2 = ['boldlinks']

// arr2[0] = 'boldlinks'
// arr2[1] = true
// arr2[2] = function () {
//     alert ('yessssss')
// }

// console.log(arr2);

// var  arr3 = arr.push(arr2)

// console.log(arr3);

// console.log(arr[0] +  ' ' + arr[2]);
// console.log(`${arr[0]='lagos'} ${arr[2]}`);

// document.getElementById('demo').innerHTML = `
//     <ul>
//         <li>${arr[0]}</li>
//         <li>${arr[1]}</li>
//         <li>${arr[2]}</li>
//     </ul>
// `

// console.log([2,4,1,8,5].sort());
// console.log([2,4,1,8,5].length);


var fruits = ["Banana", "Orange", "Apple", "Mango"];

// var result = fruits[0]
// console.log(result);

// var len  = fruits.length; // to get d length
// var lastarrindex = len  - 1

// var last = fruits[lastarrindex]

// console.log(last);


// for (var i = 1; i < fruits.length; i++) { 
//     var result1 = fruits[i];

// }

for (let i = 0; i < fruits.length; i++) {
    const result1 = fruits[i];
    document.getElementById('demo1').innerHTML += `
    <li>${result1}</li>
    `
    
}


// // document.getElementById('demo').innerHTML =  `
// // <ul>
// //     <li>${result1}</li>
// // </ul>
// // `


// // var myans = fruits.map((i)  => {
// //     x =  `
// //     <li>${i}</li>
// // `

// //     document.getElementById('demo1').innerHTML = x
// // // document.write(`<li>${i}</li>`)
// // })



//     //  var names = ['mark', 'chris', 'adams', 234, 'dennis']
//     //  console.log(names);

//     // function newname (names) {
//     // var names = names.slice()
//     // }

//     // newname ()


// //     

// var numbers = [45, 4, 9, 16, 25]

// var num2 = numbers.filter(myFunction);

// function myFunction(value) {
//     return value > 18;
//   }
// console.log(num2);



// // document.getElementById("demo").innerHTML = over18;


// // if statement 

// var time = new Date()
// var hour = time.getHours()
// var greeting;

// if (hour < 12) {
//     greeting = 'good morning'
// } else if (hour <=12) {
//     greeting = 'good day'
// }else if(hour >=12 && hour <=17){
//     greeting = 'good afternoon'
// }else if (hour >=17 && hour  <= 19) {
//     greeting = "good evening"
// }else{
//     greeting = "goood night"
// }

// console.log(greeting);

var time = new Date()
var hour = time.getHours()
var greeting;

// function greeting() {
//     var time = new Date()
//     var hour = time.getHours()
//     var greeting;
//     if (hour < 12) {
//         greeting = 'good morning'
//     } else if (hour <=12) {
//         greeting = 'good day'
//     }else if(hour >=12 && hour <=17){
//         greeting = 'good afternoon'
//     }else if (hour >=17 && hour  <= 19) {
//         greeting = "good evening"
//     }else{
//         greeting = "goood night"
//     }
//     return greeting
// }
// console.log(greeting())



// // var DOB = new Date()
// // var currentyear = DOB.getFullYear()
// var  age = currentyear - 1990
// console.log(age);

//  function age(great){
//      if (birthdate == 1990) {
//           birthday = "Happy Birthday"
//      } else {
//          birthday = "Not your birthday"
//      }
//      return birthday
//  }

//  console.log(age());


//  function to find the difference btw 2 numbers if one of the number is greater than 70


function findsum(a,b){
    if (a > 70 || b > 70) {
        return a - b
    }else {
        return "Not Number"
    }
}
// console.log(findsum(23,88));
// console.log(findsum(78,23));
// console.log(findsum(27,23));

// write a function to check wether given number is prime number or even number

// function check(a) { 
//     if (a % 2 == 0) {
//         return "it is even number"
//     }else{
//         return "it is prime number"
//     }
    
// }

// console.log(check(12));
// console.log(check(13));
// console.log(check(23));

// setInterval(gettime, 1000)

// function gettime() {

//     var time = new Date()
//     // console.log(time);
//     var hour = time.getHours() // dis will get current hour
//     // console.log(hour);
//     var min = time.getMinutes() // dis will get current minute
//     // console.log(min);
//     var sec = time.getSeconds() // dis will get current seconds
//     // console.log(sec);
//     var am_pm = "AM"

//     if (hour > 12) {
//         hour -= 12
//         am_pm = "PM"
//         // console.log(hour, am_pm);
//     }

//     if (hour == 0) {
//         hour = 12
//         am_pm = "AM"
//         // console.log(hour, am_pm);
//     }

//     hour = hour < 10 ? "0" + hour : hour
//     min = min < 10 ? "0" + min : min
//     sec = sec < 10 ? "0" + sec : sec

//     var setTime = hour + ":" + min + ":" + sec + am_pm

//     // console.log(setTime);

//     document.getElementById('demo1').innerHTML = setTime

   

    
// }

// gettime()


// var day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case  6:
//     day = "Saturday";
// }

//  console.log((day));






// var arr = ["red,green,orange,white,black"];
// text = arr.toString();
//  result = text.concat()
// console.log(result);



// var arr1 = [3,8,7,6,5,-4,3,2,1,100,-199,50,47,68,35,55,86,22,-34];

// function items (bbn) {
//   result1 = arr1.sort((a,b)=>a-b);
//   console.log(result1)
// }

// items(arr1)


// loop through  even numbers 1 - 10 

// for (var i = 1; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// var person = {fname:"mark", lname:"anthony", age:"25"}


// for (var age in person) {
//     if (person[age] == 25) {
//         result = Math.pow(person[age],2);
//         console.log(result);
//     }
// }




const numbers = [45,4, 9, 16, 25];
var len = numbers.length
total = 0


// function find (arr) {
//     for (x in numbers) {
//         //    console.log(numbers[number]);
        
//            total += numbers[number]
//         }
//         console.log(total / len);
// }

// find(numbers)

 var numberss = [45 , 4, 9, 16, 25];
//    var len = arr.length
//    total = 0


// function find1 (arr) { 
//     var len = arr.length
//     total = 0
//     for (x in arr) {
//            total += arr[x]
//         }
//         console.log(total / len);
// }

// find1(numberss)



