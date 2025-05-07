/**
 * 1. Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk

    let burger = 500;
    if(burger > 500){
        console.log('You will get free Mojo');
    }else{
        console.log('You buy Mojo by 30 tk');
    }
 */
/**
 * 2. BMI Calculator and Health Category
Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.
    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

    let weight = 50;
    let height = 5;
    const meater = height*0.304;
    let BMI = weight / meater**2;
    if(BMI < 18.5){
        console.log("you are underweight.");
    }else if(BMI >= 18.5 && BMI <= 24.9){
        console.log("you are normal.");
    }else if(BMI >= 25 && BMI <= 29.9){
        console.log("you are overweight.");
    }else{
        console.log("you are obese.");
    }
    console.log(BMI.toFixed(2));
 */
/**
 * 3. Grade Calculator
Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:
    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

    let score = 89;
    if(score >= 90 && score <= 100){
        console.log("A");
    }else if(score >= 80 && score <= 89){
        console.log("B");
    }else if(score >= 70 && score <= 79){
        console.log("C");
    }else if(score >= 60 && score <= 69){
        console.log("D");
    }else if(score >= 0 && score <= 59){
        console.log("F");
    }
 */
/**
 * 4. if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad
Note: 
use nested if-else-if-else
 */
// let myScore = 81;
// if (80 < myScore) {
//     let myfriendScore = 80;
//     if(myfriendScore > 80){
//         console.log("then go for a lunch.");
//     }else if(80 < myfriendScore || 60 >= myfriendScore){
//         console.log("good luck next time.");
//     }else if(60 < myfriendScore || myfriendScore <= 40){
//         console.log("keep your friend's message unseen.");
//     }else if(40 < myfriendScore){
//         console.log("block your friend");
//     }
// }else{
//     console.log("go to home and sleep and act sad");
// }
    

// const studentsName = [
//     {id : 1160,
//      name : "MD Sabbir",
//      age : 24,
//      cgpa : 2.95    
//     },
//     {id : 1150,
//      name : "Tajrian",
//      age : 24,
//      cgpa : 3.05    
//     },
//     {id : 1140,
//      name : "Soumik",
//      age : 24,
//      cgpa : 3.95    
//     },
//     {id : 1120,
//      name : "Fahim",
//      age : 24,
//      cgpa : 3.45    
//     }
// ]
    
// const studentName = () => {
//     return studentsName.filter((x) => x.cgpa > 3.10).map((y) => y )
// }
//     console.log(studentName());

// let number = [2,34,78,3,4,5,10,80,60];
// let evenArray = [];
// let oddArray = [];
// let total = 0;
// let totalArray = [];
// number.map(x => {
//    if(x % 2 === 0){
//     evenArray.push(x);
//    }else{
//     oddArray.push(x);
//    }
// })
// oddArray.forEach(x=>{
//     total += x;
// })

// console.log(evenArray);
// console.log(oddArray);
// console.log(total);

// let num1 = [2,3,4,5,6,7,8,9];
// let squareNum = num1.filter(x => {
//     return x %2 !== 0
//  })
// num1.forEach(x => {
//     squareNum.push(x**2);
// })
// console.log(squareNum);

// const num = (num1,num2) => num1+num2;
// let result = num(10,10);
// console.log(result);

// const aTag = document.querySelectorAll('a')

// aTag.forEach(x => {
//     x.style.color = "red"
// })

// let names = ["Al-amin", "Rafi", "Sakib", "Toufik"];

// function grattings(student = names){
//     for(let i = 0; i<student.length; i++){
//         console.log(`Welcome To Our Class ${student[i]}`);
//     }
// }
// grattings()

// let body = document.querySelector('body');
// let heading = document.querySelector('h1');
// let darkButton = document.querySelector('.btn1');
// let lightButton = document.querySelector('.btn2');

// darkButton.addEventListener('click', function(){
//     body.style.backgroundColor = "black";
//     heading.style.color = "white";
// })
// lightButton.addEventListener('click', function(){
//     body.style.backgroundColor = "";
//     heading.style.color = "";
// })

// let heading = document.querySelector('h1');
// let input = document.querySelector('input');
// let button = document.querySelector('button');

// button.addEventListener('click', function(){
//     heading.innerHTML = input.value;
//     input.value = "";
// })

// function math(x, y = 2){
//     let result = x+y;
//     console.log(`${x} + ${y} = ${result}`);
// }

// math(5)
// math(5,10)



// Player One Screen For Name
let btnPlayerOne = document.querySelector('.btnPlayerOne');
let headingPlayerOne = document.querySelector('.headingPlayerOne');
let inputPlayerOne = document.querySelector('.inputPlayerOne');
let errorPlayerOne = document.querySelector('.errorPlayerOne');
let screenForPlayerOne = document.querySelector('.screenForPlayerOne');

// Player One Screen For Number
let screenForPlayerOneNum = document.querySelector('.screenForPlayerOneNum');
let headingPlayerOneNum = document.querySelector('.headingPlayerOneNum');
let inputPlayerOneNum = document.querySelector('.inputPlayerOneNum');
let btnPlayerOneNum = document.querySelector('.btnPlayerOneNum');
let errorPlayerOneNum = document.querySelector('.errorPlayerOneNum');
let errorPlayerOneNum2 = document.querySelector('.errorPlayerOneNum2');

btnPlayerOne.addEventListener('click', function(){
    if(inputPlayerOne.value.trim() == ""){
        errorPlayerOne.style.display = "block";
    }else{
        screenForPlayerOneNum.style.display = "block";
        screenForPlayerOne.style.display = "none";
    }
})

btnPlayerOneNum.addEventListener('click', function(){
    if(inputPlayerOneNum.value < 1 || inputPlayerOneNum.value > 10){
        errorPlayerOneNum2.style.display = "block";
    }else{
        screenForPlayerTwoName.style.display = "block";
        screenForPlayerOneNum.style.display = "none";
    }
})

let screenForPlayerTwoName = document.querySelector('.screenForPlayerTwoName');
let btnPlayerTwoName = document.querySelector('.btnPlayerTwoName');
let errorPlayerTwoName = document.querySelector('.errorPlayerTwoName');
let inputPlayerTwoName = document.querySelector('.inputPlayerTwoName');

btnPlayerTwoName.addEventListener('click', function(){
    if(inputPlayerTwoName.value.trim() == ""){
        errorPlayerTwoName.style.display = "block";
    }else{
        screenForPlayerTwoNum.style.display = "block";
        screenForPlayerTwoName.style.display = "none";
    }
})

let screenForPlayerTwoNum = document.querySelector('.screenForPlayerTwoNum');
let inputPlayerTwoNum = document.querySelector('.inputPlayerTwoNum');
let btnPlayerTwoNum = document.querySelector('.btnPlayerTwoNum');
let errorPlayerTwoNum2 = document.querySelector('.errorPlayerTwoNum2');
let playerOneWiningScreen = document.querySelector('.playerOneWiningScreen');
let playerTwoWiningScreen = document.querySelector('.playerTwoWiningScreen');
btnPlayerTwoNum.addEventListener('click', function(){
    if(inputPlayerTwoNum.value < 1 || inputPlayerTwoNum.value > 10 ){
        errorPlayerTwoNum2.style.display = "block";
    }else if( inputPlayerOneNum.value != inputPlayerTwoNum.value){
        screenForPlayerTwoNum.style.display = "none";
        playerOneWiningScreen.style.display = "block";
    } else{
        screenForPlayerTwoNum.style.display = "none";
        playerTwoWiningScreen.style.display = "block";
    }
})