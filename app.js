'use strict'
let userName = prompt("What is your name?")
alert("Welcome " + userName)

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
        alert("Correct!" )
    }
    else if (guessAge.toLowerCase() == 'no')
    {
        alert('Yes I am')
    }
    // console.log(guessAge)
    
    let guessSchool = prompt('Do I have a High School Diploma?');           
    if (guessSchool.toLowerCase() == 'yes')
    {
        alert("Correct!" )
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
    let userGuess = prompt('Do you want to guess my favorite number? (yes or no)');
    while (userGuess.toLowerCase() == 'yes')
    {
        let correctAnswer = 8;
        let numberOfAttempts = 4;
        for(let i = 1; i <= numberOfAttempts; i++)
        {
            let userAnswer = prompt("Guess a number between 1 and 10");

            while((userAnswer < 1) || (userAnswer > 10))
            {
                userAnswer = prompt("Guess a number between 1 and 10");
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
    let userGuess = prompt('Would you like to guess 1 of my Top 10 things that I like? (yes or no)');
    while (userGuess.toLowerCase() == 'yes')
    {
        let topTen = ['My Wife', 'Video Games', 'Producing Music', 'Computers', 'Coding', '3D Modeling', 'Unreal Engine', 'Learning', 'TV Shows', 'Movies'];
        let numberOfAttempts = 6;
        for(let i = 1; i <= numberOfAttempts; i++)
        {
            let userAnswer = prompt("Guess 1 of my Top 10 things that I like?");
            if(numberOfAttempts == i)
            {
                alert('No more attempts left the correct answers are ' + topTen);
            }
            else if(userAnswer == topTen[0])
            {
                alert('You got it right. You had ' + (numberOfAttempts - i) + ' attempts left');
                break;
            }
            else if(userAnswer == topTen[1])
            {
                alert('You got it right. You had ' + (numberOfAttempts - i) + ' attempts left');
                break;
            } 
            else if(userAnswer == topTen[2])
            {
                alert('You got it right. You had ' + (numberOfAttempts - i) + ' attempts left');
                break;
            } 
            else if(userAnswer == topTen[3])
            {
                alert('You got it right. You had ' + (numberOfAttempts - i) + ' attempts left');
                break;
            } 
            else if(userAnswer == topTen[4])
            {
                alert('You got it right. You had ' + (numberOfAttempts - i) + ' attempts left');
                break;
            }
            else if(userAnswer == topTen[5])
            {
                alert('You got it right. You had ' + (numberOfAttempts - i) + ' attempts left');
                break;
            } 
            else if(userAnswer == topTen[6])
            {
                alert('You got it right. You had ' + (numberOfAttempts - i) + ' attempts left');
                break;
            }
            else if(userAnswer == topTen[7])
            {
                alert('You got it right. You had ' + (numberOfAttempts - i) + ' attempts left');
                break;
            }
            else if(userAnswer == topTen[8])
            {
                alert('You got it right. You had ' + (numberOfAttempts - i) + ' attempts left');
                break;
            }
            else if(userAnswer == topTen[9])
            {
                alert('You got it right. You had ' + (numberOfAttempts - i) + ' attempts left');
                break;
            }      
            else if(userAnswer != topTen)
            {
                alert('Sorry try Again! You have ' + (numberOfAttempts - i) + ' attempts left');  
            }
        }
        break;
    }
}

alert("Welcome to my website " + userName)