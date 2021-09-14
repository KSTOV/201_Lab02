'use strict'
let userName = prompt("What is your name?")
alert("Welcome " + userName)

userQuestion();
userQuestion2();
userQuestion3();
userQuestion4();
userQuestion5();

function userQuestion()
{
    let userAnswer = prompt('Is my name Kevin?');           
    if (userAnswer.toLowerCase() == 'yes')
    {
        alert("How don't you know my name?")
    }
    else if (userAnswer.toLowerCase() == 'no')
    {
        alert("Correct!")
    }
    // console.log(userAnswer)
}


function userQuestion2()
{
    let userAnswer = prompt('Am I 25 years old?');           
    if (userAnswer.toLowerCase() == 'yes')
    {
        alert("Correct!" )
    }
    else if (userAnswer.toLowerCase() == 'no')
    {
        alert('Yes I am')
    }
    // console.log(userAnswer)
}

function userQuestion3()
{
    let userAnswer = prompt('Do I have a High School Diploma?');           
    if (userAnswer.toLowerCase() == 'yes')
    {
        alert("Correct!" )
    }
    else if (userAnswer.toLowerCase() == 'no')
    {
        alert("Wow... just wow")
    }
    // console.log(userAnswer)
}

function userQuestion4()
{
    let userAnswer = prompt('Was I in the Air Force?');           
    if (userAnswer.toLowerCase() == 'yes')
    {
        alert("Sorry no...")
    }
    else if (userAnswer.toLowerCase() == 'no')
    {
        alert('Correct it was the Navy!')
    }
    // console.log(userAnswer)
}

function userQuestion5()
{
    let userAnswer = prompt('Do I want to learn Python?');           
    if (userAnswer.toLowerCase() == 'yes')
    {
        alert("Correct!")
    }
    else if (userAnswer.toLowerCase() == 'no')
    {
        alert('Yes I do!')
    }
    // console.log(userAnswer)
}

alert("Welcome to my website " + userName)