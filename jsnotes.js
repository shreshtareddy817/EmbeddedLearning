/*var name;
console.log(name);
var name="Carlos";
console.log(name);//Redeclaration and reinitialization

let age=45;
console.log(age);
//let age=23;
age=23;
console.log(age);//No Redeclaration,Reinitialization is allowed

const mdn=12345;
console.log(mdn);
//const mdn=789;
//mdn=789;
console.log(mdn);//both redeclaration and Reinitialization are not allowed

//Function scope and Block Scope
function example_Var()
{
    if(true)
    {
        var val=20;
    }
    console.log(val)
}
example_Var();// var is not block scope but is limited to a function

/*function example1_Let()
{
    if(true)
    {
        let val=20;
    }
    console.log(val);
}
example1_Let();//let is block scope

function example2_Const()
{
    if(true)
    {
        const num=25;
    }
    console.log(num);
}
example2_Const();

//Function Expression
let res1=function(){return 4+5;}
console.log(res1())

const fee_disc=function(fee){
    return fee*0.10;
};

console.log(fee_disc(10000));

let res2=fee_disc(20000);
console.log(res2);

//Second
let payment="UPI";
let pay_process;
if(payment=="UPI"){
    pay_process=function(amt){
        return "Pais Rs:"+amt+"using UPI";
    };
}

if(payment=="CreditCard"){
    pay_process=function(amt){
        return "Pais Rs:"+amt+"using Credit Card";
    };
}

if(payment=="DebitCard"){
    pay_process=function(amt){
        return "Pais Rs:"+amt+"using Debit Card";
    };
}

//Arrow functions
//Syntax: let res=()=>{code}
//Call:res();
let total=(maths,phy,chem)=>maths+phy+chem;
console.log(total(121,3,14));

//map,filter,reduce() functions with arrays
let marks=[34,45,56,67,78];
let pass_marks=marks.filter((mark)=>mark>=40);
console.log(pass_marks);

//Immediately Invoked Functions
//   Syntax:(function()
//   {
//     Code goes here
//   })();
(function(){
    let examDuration=60;
    let totalQuestions=50;

    console.log("Exam settings loaded");
    console.log("Duration:",examDuration,"minutes");
    console.log("Questions;",totalQuestions);
})();

//Higher order function: A functio calling another function as a parameter or returning a function
//map,filter,reduce() functions with arrays
let marks=[]
//marks.filter(()=>code);
let pass_marks=marks.filter((mark)=>mark>=40);
console.log(pass_marks);

let new_marks=marks.map((mark)=>mark+10);
console.log(new_marks);

//Object
let students=[{Name:"Carlos",marks:87},{Name:"Jannik",marks:99}];
const toppers=students.filter(function(student)
{
    return student.marks>90;
});
console.log(toppers);

//Creating Objects
//Way 1
//Using the new object() constructor
const person1 = new Object();

person1.name = "John";
person1.age = 25;
person1.city = "New York";

console.log(person);

//Way 2
let person2={
    name:"Ross",
    age:29,
    city:"Manhattan"
}

console.log(person2);*/
/*
//Way 3
let person3={
    name:"Rachel",
    age:26,
    city:"Central perk",
    print(){
        console.log(`My name is ${this.name}`);
    }
}
//console.log(person3.print());
person3.print();

const obj={
    users:["P1","P2","P3"],
    profession:{p1:"teacher",p2:"SE",p3:"HE"}
}

console.log(obj.profession);

//Call Back Function
function placeOrder(callback){
    console.log("Order Placed");
    console.log("Preparing food....")
    callback();
}
function deliverFood()
{
    console.log("Food Delivered!");
}

placeOrder(deliverFood);

function sendOTP(callback){
    console.log("Sending OTP");
    setTimeout(function(){
        console.log("OTP sent");
        callback();
    },2000);
}

function verifyOTP(){
    console.log("Verified OTP");
}
sendOTP(verifyOTP);*/

//Callback hell
loginUser(function(){
    getProfile(function(){
        getMarks(function(){
            generateReports(function(){
                sendEmail(function()
                {
                    console.log("Completed");
                });
            });
        });
    });
});

//Arrays
let players=["Carlos","Roger","Novak","Rafa","Jannik","Zverev"];
players.push("Serena");
console.log(players);
players.unshift("Monica");
console.log(players);
players.pop();
console.log(players);
players.shift();
console.log(players);
//console.log(players.reverse());
console.log(players.slice(1,3));
console.log(players.splice(1,3));

//Array Destructuring

