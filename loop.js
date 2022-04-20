
// var items = 1
// while (items < 10) {
//     console.log(items);
//     items++
// }

// var arr = [2,4,1,7,4]

// for (let i = 0; i < arr.length; i++) {
//     // const element = arr[i];
//     if (arr[i] === 4) {
//         console.log(arr[i]);
//         continue
//     }
    
// }

// find the mean, media, mode of the array


// This is for the mean
// var arr = [2,4,1,7,4,]
// var len = arr.length
// total = 0

// for (let i = 0; i < len; i++) {
//      element = arr[i];
//     total += arr[i]   
// }
// console.log(total/len);



// // var arr = [2,4,1,7,4,4,9,10,11,13,25,9,2,5,2,3,6,7,56,3,2,8,89,1,10,11]
// var arr = [2,4,1,7,4,9,10,9,8] 

// // This is for the median

// function median(arr){
//         arr.sort((a,b)=>a-b);
//         console.log(arr);
//      mid = Math.floor(arr.length / 2) // 
// //      console.log(mid);
//   if ( arr.length % 2 !==0) {
//         console.log(arr[mid]);
//    }
//     else {
//             sum = (arr[mid-1] + arr[mid]) / 2;
//             console.log('The median is = ' + sum);
//     }
// }

// median(arr)

// how to know the meaning of (Math.floor())     console.log(Math.floor(66.54857877));






// use JavaScript to sum the multiples of 3 and 5 under 1000.

var total = 0


for (let i = 1; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        //  console.log(i);
        total += i
    }

}
console.log(total);




// find the total scores and average scores of each students in the object below:

var students = {
        "first": {
            "name": "yaqub",
            "scores": {
                "Math": 80,
                "Eng": 70 }
            },
    
        "second": {
            "name": "Tope",
            "scores": {
                "Math": 55,
                "Eng": 60 }
            } ,
    
         "third": {
            "name": "Adams",
            "scores": {
                "Math": 90,
                "Eng": 80 }
            },
      
         "fourth": {
            "name": "Tope",
            "scores": {
                "Math": 75,
                "Eng": 65 }
            },
    
         "fiveth": {
            "name": "Larry",
            "scores": {
                "Math": 80,
                "Eng": 70 }
            },
    
         "sixth": {
            "name": "Salam",
            "scores": {
                "Math": 70,
                "Eng": 80 }
            },
    
         "seventh": {
            "name": "Pelumi",
            "scores": {
                "Math": 60,
                "Eng": 69 }
            },
    
         "eighth": {
            "name": "Soliat",
            "scores": {
                "Math": 75,
                "Eng": 90,  
                "Bio": 90,  }
            },
    
         "nineth": {
            "name": "Aishat",
            "scores": {
                "Math": 75,
                "Eng": 88 },
            },
    
         "tenth": {
            "name": "Tope",
            "scores": {
                "Math": 75,
                "Eng": 65},
            },
        }



for (var student in students) {
    var total = 0
    // console.log(student);
    var element = students[student]['scores']
    // console.log(element);
    for (var obj in element) {
        // console.log(obj);
        var element_new = element[obj]
        // console.log(element_new);
        var len = Object.keys(element)
        len = len.length
        var val = Object.values(element)
        // console.log(len);
        total += element_new

    }
    var average = total / len
    // console.log(`The  total sum of [${val}] = ${total}`);
    // console.log(`The  average of [${val}] = ${average}`);
}


var char 

for (let i = 1; i < 6; i++) {
    // console.log('first ' + i);
    
    for (let y = 1; y < i; y++) {
        // console.log('second' + y);

        char = char + "*"
    
    }

    // console.log(char);
    char = ""
}
  



