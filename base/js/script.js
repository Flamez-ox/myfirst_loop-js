
$(function() {
//  alert("working")
    // $("input").blur(function(){
    //     $(this).css('background-color', 'red', 'color', 'white');
    //     $(this).css('color', 'white');
    // })

    $("form").hide()

    $("button").click(function() {
        $("form").fadeIn(4000);
    })

    // $("form").fadeOut(2000);

    // $(".red-box").fadeOut(3000)
    // $(".red-box").fadeIn(10000)
    // $(".red-box").fadeTo(2000,  0.2)
    // $(".red-box").fadeToggle()

    
    //  $(".red-box").fadeTo(2000,  0.2)
    //  $(".green-box").fadeTo(2000,  0.4)
    //  $(".blue-box").fadeTo(2000,  0.8)

    //  $( "#datepicker" ).datepicker();

    // $(".red-box").fadeOut(2000)
    // $(".purple-box").fadeIn(8000)
    
    $(".blue-box").resizable();

    
    

}); 

// find prime number btw 1 -  20

// for (let i = 1; i < 20; i++) {
//     // console.log("first " + i);

//     var prime = 0
   
//   for (let x = 2; x < i; x++) {
//     console.log(x);
//     //  console.log(x); 
//      if (i % x == 0) {
//          prime = 1
//          break 
//     }
// }
//       if (i > 1 && prime == 0) {
//             console.log(i);
//       }
// }