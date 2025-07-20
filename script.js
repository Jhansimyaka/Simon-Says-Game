// let todo=[];
// let r=prompt("Enter the request");
// while(true){
//     if(r=="quit"){
//         console.log("Quitting app");
//         break;
//     }
//     if(r=="list"){
//         console.log("--------------")
//         for(let i=0;i<todo.length;i++){
//             console.log(i,todo[i]);
//         }
//         console.log("--------------")
//     }else if(r=="add"){
//         let task=prompt("Enter your task");
//         todo.push(task);
//         console.log("Task is added");
//     }else if(r=="delete"){
//         let idx=prompt("Enter the index you want to delete");
//         todo.splice(idx,1);
//         console.log("task deleted");
//     }else{
//         console.log("wrong input")
//     }
//     r=prompt("Enter the request");
// }





//Assignment-(part-4)


//1.

// let arr=[1,2,3,4,5,6,2,3];
// let num=2;
// for (let i=0;i<arr.length;i++){
//     if(arr[i]==num){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);





//2.


// let a=287152;
// let c=0;
// let r=a;
// while(r>0){
//     let digit=r%10;
//     c+=digit;
//     r=Math.floor(r/10);
// }
// console.log(c);



//4.

// let n=5;
// let fact=1;
// for(let i=1;i<=n;i++){
//     fact*=i;
// }

// console.log(`fact of ${n} is ${fact}`);



// Assignment-5

//1.


    //   const random=Math.floor(Math.random()*6)+1;
    //   console.log(random)

//2.

     // let car={
    //     name:"bmw",
    //     model:"jhan",
    //     color:"black"
     // };


//3.

// let person={
//     name:"jhansi",
//     age:20,
//     city:"nirmal"
// };







// let country=["Australia","Germany","UnitedStatesofAmerica"];
// function longestName(country){
//     let ansIdx=0;
//     for(let i=0;i<country.length;i++){
//         let ansLen=country[ansIdx].length;
//         let currLen=country[i].length;
//         if(currLen>ansLen){
//             ansIdx=i;
//             }
//         }
//         return country[ansIdx];
//     }
//     longestName(country);


//setTimeout




// console.log("Hello");
// setTimeout(()=>{
//     console.log("Hi");
// },2000);
// console.log("Namasthey");




//setInterval


// let id=setInterval(()=>{
//     console.log("Hi");
// },2000);
// console.log(id);

// let id2=setInterval(()=>{
//     console.log("Hi2");
// },4000);
// console.log(id2);





//this in Arrow function

// const stu={
//     name:"jhanu",
//     marks:90,
//     prop:this, //global scope
//     getName: function(){
//         console.log(this);
//         return this.name;
//     },
//     getMarks:()=>{
//         console.log(this);//parent's scope --> window
//         return this.marks;
//     },
//     getInfo1:function(){
//         setTimeout(()=>{
//             console.log(this);
//         },1000);
//     },
//     getInfo2:function(){
//         setTimeout(function(){
//             console.log(this);
//         },1000);
//     }
// }


// const s=(n)=>
//     n*n;

// console.log(s(4));

// let id=setInterval(()=>{
//     console.log("Hi");
// },2000);

// setTimeout(()=>{
//     clearInterval(id);
//     console.log("clear interval ran");
// },10000)


// const arrAvg=(arr)=>{
//     let total=0;
//     for(let num of arr){
//          total+=num;
//     }
//     return total/arr.length;
// };
// let arr=[1,2,3,4,5];
// console.log(arrAvg(arr));


// const isEven=(n)=>{
//     if(n%2==0){
//         return "even";
//     }else{
//         return "odd";
//     }
// }
// let n=5;
// console.log(isEven(n));


// const obj={
//     msg:"helloWorld",
//     logMsg(){
//          console.log(this.msg);
//     }
// };

// setTimeout(obj.logMsg,1000);

// let length=4;
// function callback(){
//     console.log(this.length);
// }
// const object={
//     length:5,
//     method(callback){
//         callback();
//     },
// };
// object.method(callback,1,2);





// let num=[1,2,3,4,5]
// let d=num.map((el)=>el*el)
// let sum=d.reduce((res,e)=>(res+e));
// let avg=sum/num.length;
// console.log(d+" "+sum+" "+avg);


// let num=[1,2,3,4,5];
// let d=num.map((el)=>el+5);
// console.log(d);


// let strings=["jhansi","gowtham","krishna","latha","bhavani"];
// console.log(strings.map((s)=>s.toUpperCase()))


// const doubleAndReturnArgs=(arr,...args)=>[...arr,...args.map((v)=>v*2)];


// const mergeObjects= (obj1,obj2)=>({...obj1,...obj2});
// let s=mergeObjects({a:1,b:2},{c:3,d:4});
// console.log(s);

//Assignment

// let input=document.createElement('input');
// let btn=document.createElement('button');
// btn.innerText="CLick Me!";
// document.querySelector('body').append(input);
// document.querySelector('body').append(btn);

// btn.setAttribute("id","btn");
// input.setAttribute("placeholder","username");

// let butt=document.querySelector("#btn");
// butt.classList.add('btnStyle')

// let h=document.createElement("h1");
// h.innerText="DOM Practice";
// h.classList.add("h1");
// document.querySelector('body').append(h);

// let para=document.createElement('p');
// para.innerHTML="Apna College <b>Delta</b> Practice";
// document.querySelector('body').append(para); 




//Activity--->ADD-EVENT-LISTENER

// let btn=document.querySelector("button");
// btn.addEventListener("click",function(){
// let h3=document.querySelector("h3");
// let color=genRandColor();
// h3.innerText=color;
// let div=document.querySelector("div");

// div.style.backgroundColor=color;
// })

// function genRandColor(){
//     let red=Math.floor(Math.random()*255);
//     let green=Math.floor(Math.floor(Math.random()*255));
//     let blue=Math.floor(Math.random()*255);
//     let color=`rgb(${red},${green},${blue})`
//     return color;
// }



//ASSIGNMENT QUEST

// let btn=document.createElement('button');
// btn.innerText="Click me!";
// document.querySelector('body').append(btn);
// btn.addEventListener("click",function(){
//     btn.style.backgroundColor="green";
// })

// let inp=document.querySelector("input");
// let h2=document.querySelector("h2");
// inp.addEventListener("input",function(){
//     let filtered=this.value.replace(/[^a-zA-Z]/g," ");   //(.replace()-->regular expression) ==removes all characters except what it has int it's paranthesis
//     this.value=filtered;
//     h2.innerText=filtered;
// })



//TODO APP

// let inp=document.querySelector("input");
// let btn=document.querySelector("button");
// let ul=document.querySelector("ul");
// btn.addEventListener("click",function(){
//     let item=document.createElement("li");
//     item.innerText=inp.value;

//     let delBtn=document.createElement("button");
//     delBtn.innerText="Delete";
//     delBtn.classList.add("delete");

//     item.appendChild(delBtn);
//     ul.appendChild(item);
//     inp.value="";

// })

// ul.addEventListener("click", function(event){
//     if(event.target.nodeName=="BUTTON"){
//         let listItem = event.target.parentElement;
//         listItem.remove();
//         console.log("Deleted");
//     }
// })



//Simon SAYS GAME

let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started==false) {
        console.log("game is started");
        started=true;

        levelUp();
    }
})

function userFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;


    //random btn choose
    let randIndx=Math.floor(Math.random()*3);
    let randColor=btns[randIndx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);

    userFlash(randBtn);
}


function checkAns(idx){

    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
       reset();
    }
}

function btnPress(){
    console.log(this);
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress );
}

function reset(){
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
}