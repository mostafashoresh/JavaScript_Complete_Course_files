console.log("Hello World!");

///////// DataTypes And Variables and typecoersin :

////////////////////////////////// single comment ;


/* this is a multiline comment In JavaScript :

var name = "Mustafa" ; 
var lastname = "Rezayi" ; 
var age = 24 ; 
var Job = "Web Developer" ; 
var isMarried = true ; /////// true : 1   false : 0 
var phonenumber ; 
var x = 56  ;
var y = "2" ; 
var z = x + y  ; 
console.log( name + " " + lastname + " " + age ) ; 
console.log( 1 === "1") ; 
console.log( isMarried  + 3 ) ; 
console.log(z) ; 

*/



//////////////////////////////////////////////////  Operator :

//////// + - *  / % 

////// != !== == ===

// console.log( 5 != 6 ) ; ///// true 
// console.log("5" != 5 ) ;  ///// false
// console.log(true !=  0) ; ///// true 
// console.log(0 != false) ; ////// true 


// console.log( 5 !== 6 ) ; ///// true 
// console.log("5" !== 5 ) ;  ///// ture 
// console.log(true !==  0) ; ///// true 
// console.log(0 !== false) ; ////// true 




///////// > < >= <= 


// console.log( 5 > 4 ) ; ////// true
// console.log( 5 < 3  ) ; /////// false 
// console.log(18/2 >=  10) ; ///// flase 


////////// && ||

///////// true && true => true
///////// flase && true => false
//////// false || true => true 




/////////// if else statement switch statement :


// var x = 8  ; 
// var y = 8  ; 

// if( y > x ){ ///// condition is true 
//    //////////// execute when condition is true
//    console.log(" y is grather than x ") ; 
// }else if(x>y){
//     console.log("x is grather than y ") ; 
// }
// else{
//    //////////// execute when condition is false 
//    console.log("x and y are equal ! ") ; 
// }  ; 


// var Job  = "Web developer"  ;

// switch(Job){
//       case "Teacher" :
//           console.log("He / she Teach English to children ") ; 
//       break ; 
//       case "Taxi Driver" :
//           console.log("He / She Is a Taxi Driver !") ; 
//       break ; 
//       case "Web developer" :
//           console.log("He / She Is a web developer !") ; 
//       break ; 
//       default :
//       console.log("He / She Does something else !") ; 
// }



// var mark = 20 ; 


// if(mark<10){
//     console.log("You Fail In The exam !") ; 
// }else if(mark>=10 && mark <14) {
//     console.log("You Pass The exam !")  ;
// }else if(mark>=14 && mark < 17){
//     console.log("Your Mark Is good !") ; 
// }else if(mark>=17 && mark <20 ){
//     console.log("Your Mark is very good!") ; 
// }else {
//     console.log("Your Mark Is Great!") ; 
// }



// switch(true){
//      case mark<10 :
//         console.log("You Fail In The exam !") ; 
//         break ; 
//     case mark>=10 && mark <14 :
//         console.log("You Pass The exam !")  ;
//         break ; 
//     case mark>=14 && mark < 17 :
//         console.log("Your Mark Is good !") ;
//     break ; 
//     case mark>=17 && mark <20 :
//         console.log("Your Mark is very good!") ; 
//     break ; 
//     default :
//     console.log("Your Mark Is Great!") ;
// }
 
// var x= 5 ; 
// var y=6  ; 
// var z = (x>y)? console.log("x is greather than y ") : console.log("y is greather than x ") ; 

// console.log(z)

///////////////////////////////////////// Functions  :

//  var name = prompt("Please Inter Your Name:") ; 


// /////// Method one :  declare Function :


// // function textshow(name) {
// //     alert("Hello "  + name) ;  
// // }
// // textshow(name) ; 
// /////////// Method Two : Function Expression : 
// // var x = function(name){
// //     alert("Hello " + name) ; 
// // }
// // x(name) ; 
// //////////////// New Method  : Fat arrow Fuction (ES6)
// //////////////////// ()=>{}

// var sayHello = (name) => {alert("Hello "  + name )} ; 
// sayHello(name)



////////////// arrays :

// var Info = ['mustafa',"rezayi" ,"web developer",24,1998] ;


// console.log(Info) ; 

// // Info.push("M.shoresh77@gmail.com") ; 
// /////// we remove Mustafa From Array  :
// // Info.shift() ; 
// /////// we add Mustafa To array :
// // Info.unshift("Mustafa") ; 

// // var newarray = Info.slice(2,5) ; 
// // Info.splice(2,2)

// var InfoString = Info.toString() ; 

// console.log(InfoString)

// console.log(InfoString.split("a")) ; 
// // console.log(Info) ; 
// // console.log(newarray) ; 


///////////////////////////////////////////////////////////// Objects :
// var Info = {
//     name : 'Mustafa',
//     lastname : 'Rezayi' , 
//     yearOfBirth  :1998   ,
//     phoneNumber :09389400150 , 
//     CalcAge : function(yearOfBirth) {
//         return 2021 - this.yearOfBirth ; 
//     }
// }
// Info['yearOfBirth'] = 1997 ; 
// console.log(Info.name) ; 
// console.log(Info.CalcAge()) ; 


/////////////////////////////////////////////////////////// loops :


///////// for ,......

// var Numbers = [23 , 34 , 56 ,78 , 99 , 140 ,22] ; 

// var object = {
//     number1:21,
//     number2:35,
//     number3:65,
//     number4:77
// }
// for(var i=0 ; i<Numbers.length ; i++){
//     console.log(Numbers[i]) ; 
// }

// for(var num in Numbers ){
//     console.log(Numbers[num]) ; 
// }
// for(var key in object){
//     console.log(object[key]) ; 
// }
//////// while ,.....
// var Numbers = [23 , 34 , 56 ,78 , 99 , 140 ,22] ; 
// // var i = 0 ; 
// // while(i<Numbers.length){
// //     console.log(Numbers[i]) ; 
// //     i++ ; 
// // }
// var i=0 ; 
// do{
//   console.log(Numbers[i]) ; 
//   i++ ; 
// }while(i<Numbers.length)




////////////////////////////////////////////////////////// Coding Challenge :



/////////////////////  150   360  210  80  95  

//////////////////// bill < 100 => tip =20%
/////////////////// bill >100 && bill < 200   =>tip =15 % 
/////////////////// bill >200   =>tip =10 % 

////////////////// calculate amount of each tip :
////////////////// calculate total amount  each resturant :
//////////////// claculate total amount of bill and tips  :


// var bill = [150,360,210,80,95] ;
// var tips = [] ;  
// var totalEeachResturant = [] ; 
// var totalcost = 0 ; 


// function calcTip() {
//     for(var i=0 ; i<bill.length ; i++){
//         switch(true){
//             case bill[i] <100 :
//                 tips.push(bill[i]*0.2) ; 
//             break ; 
//             case bill[i] >100 && bill[i] < 200 :
//                 tips.push(bill[i]*0.15) ; 
//             break ; 
//             default :
//             tips.push(bill[i]*0.1) ; 
//         }
//     }
// }

// console.log(bill) ; 
// calcTip() ; 
// console.log(tips) ; 


// for(var i=0 ; i<tips.length ; i++) {
//     totalEeachResturant.push(bill[i]+tips[i]) ; 
// }


// console.log(totalEeachResturant) ; 


// for(var i=0 ; i<totalEeachResturant.length ; i++){
//    totalcost += totalEeachResturant[i] ; 
// }


// console.log(totalcost) ; 





















