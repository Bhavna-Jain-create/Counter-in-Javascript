

// for(i=0;i<counting.length;i++){
//     var aa = counting[i].getAttribute("data-target");
//     //console.log(aa);
//     counting[i].innerHTML = 0;
//     console.log(counting[i]);
//  }


// counting.forEach(function(value){
//    
// })

// counting.forEach(function(element){
    
// setInterval(function(value){
    
//          var aa = element.getAttribute("data-target");
//     // console.log(aa);
//     element.innerHTML = 0;
    
//          for(i=0;i<aa;i++){
//             var upto = 0;
//              upto = (element.innerHTML++) ;
//             upto += 1;
//          }
//     //console.log(upto);
        
// },1000)

// })
 
var counting = document.querySelectorAll('.counting');
counting.forEach(function(element){
   var upto = 0;
   var aa = element.getAttribute("data-target");
   setInterval(function(value){
      //console.log(aa);  
    if(upto <= aa){
      element.innerHTML = 0 + "+";
      element.innerHTML = upto++ +  "+" ;
    }  
   },10)
})
