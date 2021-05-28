// console.log('Hello From Javascript') ; 


/////////////////////// Scope , HOISTING , var , let and const  :

// 2015  ES6 var 

// console.log(name) ; /////////// Here HOISTING WORKS 

// SayHello() ; //////// HoISTING WORKS 


// var name  = "Mustafa" ; /////// global scope 

// function SayHello() {
//     var name = "Amir" ; //////// function scope 
//     console.log('Hello '+name) ; 
//     var age = 24 ; ///////// fucntion scope 
// }

// // SayHello() ; 
// console.log(name) ; ////// It return the global name not function scope variable 

// console.log(age) ; 



// for(var i =0 ; i<10 ; i++) {
//     var LastName = "Rezayi" ; //////// The variable who decalare with var keyword In for and while loop are global scope 
//     console.log(name) ; 
// }

// console.log(LastName) ; 



////////////////////////////////////////////////////////////////// let :





// console.log(name) ; ////////// HERE HOISTING NOT WORKS 


// let name = 'Mustafa' ; ///////// global scope  :


// function SayHello(){
//     let name = "Amir" ; ///////////////////// Function scope Variable  
//     let LastName = "Rezayi" ; /////////////// Function scope varibale
//     console.log('Hello ' + name) ; 
// }

// SayHello() ; 


// // console.log(LastName) ; 


// //////////////////////// the variable who are declare with let keyword are block scope 

// for(let i=0 ; i<10 ; i++) {
//     console.log('Hello World!') ; 
//     let Age = 24 ; ///////////////// block scope 
// }



// console.log(Age) ; 




/////////////////////////////////////////////////////////////////// const keyword :


// const Auther = "Mustafa Rezayi" ; ///////// global variable 
////////////////////////////////////// Variables who Decalre with const are like variables who decalre with let but you can`t Change Theme
// Auther = "Amir Mohammadi" ; 

// console.log(name) ; //////// Here we have not HOISTING :
// const name = "Mustafa" ; /////// global variable


// function SayHello() {
//     const name = 'Amir' ; //////////// block scope 
//     const lastname = "Rezayi" ; ////////// block scope 
//     console.log('Hello ' + name + lastname) ; 
// }

// SayHello() ; 
// console.log(lastname)  ;



///////////////////////////////////////////////////////////////// Error Handling In Javascript  :

// let name = prompt('Hello Please Inter Your Name : ') ; 
// let lastname = prompt('Please Inter Your Last Name :') ; 
// let age = prompt('Please Inter Your Age :') ; 

// function SayHello(name , lastname , age ){
//     try {
//     if(name==="") throw 'All Information are required' ; 
//     if(lastname==="") throw 'All Information are required' ; 
//     if(age==="") throw 'All Information are required' ; 
//     console.log('Hello ' + name + ' ' + lastname + 'you are ' + age + ' years old') ; 
 
//     }catch(error){
//        console.log(error) ; 
//     }
// }
// SayHello(name,lastname,age) ; 


///////////////////////////////////////////////////////////////////// DOM (Document Object Model) ; 


// console.log(document)
// console.log(document.head) ; 
// console.log(document.body) ; 
// console.log(document.title) ; 
// document.title = 'Hello World' ; 

// console.log(document.forms) ; 


///////////////// SELECT BY ID  :


// let title = document.getElementById('app-title') ; 
// console.log(title) ; 
// title.style.color = 'red'  ; 
// title.style.backgroundColor = 'gray' ; 
// title.style.paddingTop='1rem' ; 
// title.style.paddingBottom = '1rem'


////////////////// Select By class

// let Items = document.getElementsByClassName('todoItem') ; 
// Items[1].style.color = 'red' ; 
// Items[1].style.border = '1px solid green' ; 
// console.log(Items) ;



////////////////// SELECT BY Tage Name  :


// let Items = document.getElementsByTagName('li') ; 
// Items[2].style.color='red' ; 
// console.log(Items) ; 



///////////////// SELECT BY QUERYSELECTOR  :


// let title = document.querySelector('#app-title') ; 
// title.style.backgroundColor='red' ; 
// console.log(title)


/////////////////////////// Traversing DOM  :

///////////// Parent  :

// let List = document.getElementsByClassName('todoItems') ; 

// console.log(List[0].parentNode.parentNode) ; 

// List[0].parentNode.parentNode.style.backgroundColor = 'gray' ; 
// List[0].parentNode.parentNode.style.borderRadius = '8px' ; 


/////// child :
//// childNode
//// children : 
// console.log(List[0].children) ;
// console.log(List[0].firstChild) ; 
// console.log(List[0].firstElementChild) ; 
// console.log(List[0].lastChild) ; 
// console.log(List[0].lastElementChild)  ; 
// List[0].lastElementChild.style.color = 'red' ; 
// console.log(List[0].previousElementSibling) ;
// console.log(List[0].nextElementSibling) ; 



//////////////// Event Handling  :
// let title = document.getElementById('app-title') ; 
// title.addEventListener('click',changeBackGround) ; 
// console.log(title) ; 
// function changeBackGround (event) {
//     console.log('Event Type :'+event.type)
//     title.style.color = 'red' ; 
// }
// let title = document.getElementById('app-title') ;
// let input = document.getElementById('Item') ; 
// title.addEventListener('dblclick',textshow) ; 
// input.addEventListener('keydown' , textInfo)  ; 
// function textInfo(event) {
//     console.log('event : ' + event.target.value) ; 
// }
// function textshow(event){
//     console.log(event.target.innerHTML)
//     console.log(event.type)
// }
// console.log(input) ; 



//////////////////////////////////////// Remove and add element to html document  :


// let List = document.getElementsByClassName('todoItems') ; 
// let newItem = document.createElement('li') ; 
// let newItemText = document.createTextNode('Item 5') ; 
// newItem.appendChild(newItemText) ; 
// newItem.className = 'todoItem' ; 
// newItem.id = 'lastItem'
// console.log(newItem) ; 
// List[0].appendChild(newItem) ; 



////////////////////////////////////////////////////////////////// Todo List app :

let form  = document.getElementById('form') ; 
let input  = document.querySelector('#Item') ; 
let List  =document.querySelector('.todoItems') ; 


form.addEventListener('submit',addItem) ; 
List.addEventListener('click',removeItem) ; 

function addItem(event) {
    event.preventDefault() ; 
    let newLi = document.createElement('li') ; 
    newLi.className='todoItem' ; 
    let icon = document.createElement('i') ; 
    icon.className='fa fa-close' ; 
    newLi.appendChild(icon) ; 
    let newLiText = document.createTextNode(input.value) ; 
    newLi.appendChild(newLiText) ; 
    List.appendChild(newLi) ; 
    input.value="" ; 
}



function removeItem(e){
    if(e.target.classList.contains("fa-close")){
        if(confirm('Are You sure?')){
            let li = e.target.parentNode  ; 
            li.remove() ; 
        }

    }
}










































































