'use strict'
// let userName = prompt("What is your name?")
// alert("Welcome " + userName)

userQuestions();
guessNumber();
guessQuestion();

function userQuestions()
{
    let guessName = prompt('Is my name Kevin?');           
    if (guessName.toLowerCase() == 'yes')
    {
        alert("How don't you know my name?")
    }
    else if (guessName.toLowerCase() == 'no')
    {
        alert("Correct!")
    }
    // console.log(guessName)

    let guessAge = prompt('Am I 25 years old?');           
    if (guessAge.toLowerCase() == 'yes')
    {
        alert("Correct!")
    }
    else if (guessAge.toLowerCase() == 'no')
    {
        alert('Yes I am')
    }
    // console.log(guessAge)
    
    let guessSchool = prompt('Do I have a High School Diploma?');           
    if (guessSchool.toLowerCase() == 'yes')
    {
        alert("Correct!")
    }
    else if (guessSchool.toLowerCase() == 'no')
    {
        alert("Wow... just wow")
    }
    // console.log(guessSchool)
    
    let guessMil = prompt('Was I in the Air Force?');           
    if (guessMil.toLowerCase() == 'yes')
    {
        alert("Sorry no...")
    }
    else if (guessMil.toLowerCase() == 'no')
    {
        alert('Correct it was the Navy!')
    }
    // console.log(guessMil)
    
    let guessCode = prompt('Do I want to learn Python?');           
    if (guessCode.toLowerCase() == 'yes')
    {
        alert("Correct!")
    }
    else if (guessCode.toLowerCase() == 'no')
    {
        alert('Yes I do!')
    }
    // console.log(guessCode)
}

function guessNumber()
{
    let userGuess = prompt('Do you want to guess a number? (yes or no)');
    while (userGuess.toLowerCase() == 'yes')
    {
        let correctAnswer = 60;
        let numberOfAttempts = 4;
        for(let i = 1; i <= numberOfAttempts; i++)
        {
            let userAnswer = prompt("Guess a number between 1 and 100");

            while((userAnswer < 1) || (userAnswer > 100))
            {
                userAnswer = prompt("Guess a number between 1 and 100");
            }
            if(numberOfAttempts == i)
            {
                alert('No more attempts left the correct answer is ' + correctAnswer);
            }
            else if(userAnswer == correctAnswer)
            {
                alert('You got it right. You had ' + (numberOfAttempts - i) + ' attempts left');
                break;
            } 
            else if(userAnswer < correctAnswer)
            {
                alert('Your answer is too low.  Try Again! You have ' + (numberOfAttempts - i) + ' attempts left');  
            } 
            else if (userAnswer > correctAnswer)
            {
                alert('Your answer is too high.  Try Again! You have ' + (numberOfAttempts - i) + ' attempts left');
            }
        }
        break;
    }
}

function guessQuestion()
{
    let numberOfAttempts = 0;
    let correct = true;
    while (numberOfAttempts < 6 && correct)
    {
        let userAnswer = prompt("Try guessing 10 things that I like?");
        let topTen = ['my wife', 'video games', 'producing music', 'computers', 'coding', '3d modeling', 'unreal engine', 'learning', 'tv shows', 'movies'];
        for (let i = 0; i < topTen.length; i++)
        {
            if(userAnswer.toLowerCase() == topTen[i])
            {
                alert('You got it right.');
                correct = false;
                break;
            }
        }
        
        if(correct)
        {
            numberOfAttempts++;
            alert('Sorry try again!');
        }
    }
}

alert("Welcome to my website " + userName)