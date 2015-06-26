/**
 * Created by Charles Pelote II on 6/23/15.
 * Student id: 0004666164
 * Scalable Data Infrastructures
 * SDI 201506 Section 01
 * Assignment: Conditionals Assignment
 * */

// VARIABLES

var min = 0;                                         // minimum value for both of the lottery's numbers
var max = 0;                                         // maximum value for both of the lottery's numbers
var minPB = 0;                                       // minimum value for the powerball number
var maxPB = 0;                                       // maximum value for the powerball number
var luckyNumbers;                                    // holds the final lottery numbers
var returnLottery;                                   // holds the user's choice for which lottery
var randomNumberCount = 0;                           // how many numbers need to be chosen
var randomNumberArray = [];                          // will hold the random lottery numbers
var lotteryString2 = " are ..... ";                  // output for user
var lotteryString1 = "Your magic numbers for the ";  // output for user
var powerballString = "and you Powerball is ..... "; // output for user

// FUNCTIONS

function whichLottery()                                                  //function for user to choose which lottery to get numbers for
{
    var lottery;                                                         // will hold number one or two which represents the lottery the user chose
    var test = true;                                                     // toggle variable for while loop
    var lotteryArray = ["Florida lottery", "Powerball lottery"];         // array for names of both lotteries

    while(test == true)                                                  // beginning of while loop ... will run as long as test == true
    {
        lottery = prompt("Which lottery are you playing? \nChoose from: \n1 = Florida lottery\n2 = Powerball lottery."); // output for user to chose which lottery

        if(lottery == 1 || lottery == 2)                                 // if the user entered 1 or 2 then test == false and we can end the loop
        {
            test = false;                                                // test is changed to false to end the loop
        }
    }
    return lotteryArray[lottery - 1];                                    // return which lottery the user chose
}  // end whichLottery()

function lotteryDrawing(minimum, maximum, randomNumber, numberArray)     // will determine the random lottery numbers
{
    var magicNumbers = "";                                               // a var to hold the lottery numbers chosen

    for (var counter1 = 0; counter1 <= randomNumber - 1; counter1++)     // a loop that will run until we get all of the lottery numbers
    {
        numberArray[counter1] = randomizer(minimum, maximum);            // put a random number in this array element
        for(var counter2 = 0; counter2 <= counter1 - 1; counter2++)      // a loop that will run through the elements of the array
        {
            if(areTheSame(numberArray[counter1], numberArray[counter2])) // if the new random number is equal to another number in the array already
            {
                numberArray[counter1] = randomizer(minimum, maximum);    // get a new random number
                counter2 = 0;                                            // and decrement the counter so we can test this element in the array again
            }

        }
        magicNumbers += + " " + numberArray[counter1] + " ";             // concatenate new random numbers to a string
    }
    return magicNumbers;                                                 // return lottery numbers
} // end lotteryDrawing()

function powerballDrawing(min, max, string)                              // this function will get and display the powerball to the user
{
    var powerBall = randomizer(min, max);                                // var to hold the random powerball number
    console.log(string + powerBall);                                     // will display powerball number to user
} // end powerballDrawing()

function randomizer(minNum, maxNum)                                      // this function will generate a random number
{
    return Math.round(Math.random() * (maxNum - minNum) + minNum);       // return the random number
} // end randomizer()

function areTheSame(num1, num2)                                          // this function will determine if two numbers are the same and return a true or false
{
    var sameNum = false;                                                 // toggle variable set to false

    if(num1 == num2)                                                     // if the numbers are the same
    {
        sameNum = true;                                                  // set toggle variable to true
    }
    return sameNum;                                                      // if numbers are not the same leave toggle variable set to false
}  // end areTheSame()

function winningDeclaration(line1, line2, lottery, winningNumbers)       // this function will output the winning numbers to the user
{
    console.log(line1 + lottery + line2 + winningNumbers);               // a concatenated string is out together for the user
} // end winningDeclaration()

// MAIN()

returnLottery = whichLottery();                                          // var takes the name of the lottery the user selects

if(returnLottery == "Florida lottery")                                   // if the user chooses the florida lottery
{
    min = 1;                                                             // the smallest value for the florida lottery can be 1
    max = 53;                                                            // the largest value for the florida lottery can be 53
    randomNumberCount = 6;                                               // the florida lottery has 6 numbers

    luckyNumbers = lotteryDrawing(min, max, randomNumberCount, randomNumberArray, returnLottery); // var will hold the lottery numbers
    winningDeclaration(lotteryString1, lotteryString2, returnLottery, luckyNumbers);              // a string is sent to the console with the lottery numbers and the lottery chosen
}

if(returnLottery == "Powerball lottery")                                 // if the user chooses the powerball lottery
{
    min = 1;                                                             // the smallest value for the powerball lottery can be 1
    max = 59;                                                            // the largest value for the powerball lottery can be 59
    minPB = 1;                                                           // the smallest value for the powerball can be 1
    maxPB = 35;                                                          // the largest value for the powerball can be 35
    randomNumberCount = 5;                                               // the florida lottery has 5 numbers

    luckyNumbers = lotteryDrawing(min, max, randomNumberCount, randomNumberArray, returnLottery); // var will hold the lottery numbers
    winningDeclaration(lotteryString1, lotteryString2, returnLottery, luckyNumbers);              // a string is sent to the console with the powerball numbers and the lottery chosen
    powerballDrawing(minPB, maxPB, powerballString);                                              // a string is sent to the console with the powerbal number
}