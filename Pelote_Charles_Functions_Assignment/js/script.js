/**
 * Created by Charles Pelote II on 6/23/15.
 * Student id: 0004666164
 * Scalable Data Infrastructures
 * SDI 201506 Section 01
 * Assignment: Conditionals Assignment
 * */

// VARIABLES

var min = 0;
var max = 0;
var minPB = 0;
var maxPB = 0;
var luckyNumbers;
var returnLottery;
var randomNumberCount = 0;
var randomNumberArray = [];
var lotteryString2 = " are ..... ";
var lotteryString1 = "Your magic numbers for the ";
var powerballString = "and you Powerball is ..... ";

// FUNCTIONS

function whichLottery()
{
    var lottery;
    var test = true;
    var lotteryArray = ["Florida lottery", "Powerball lottery"];

    while(test == true)
    {
        lottery = prompt("Which lottery are you playing? \nChoose from: \n1 = Florida lottery\n2 = Powerball lottery.");

        if(lottery == 1 || lottery == 2)
        {
            test = false;
        }
    }
    return lotteryArray[lottery - 1];
}  // end whichLottery()

function lotteryDrawing(minimum, maximum, randomNumber, numberArray)
{
    var magicNumbers = "";

    for (var counter1 = 0; counter1 <= randomNumber - 1; counter1++)
    {
        numberArray[counter1] = randomizer(minimum, maximum);
        for(var counter2 = 0; counter2 <= counter1 - 1; counter2++)
        {
            if(areTheSame(numberArray[counter1], numberArray[counter2]))
            {
                numberArray[counter1] = randomizer(minimum, maximum);
                counter2 = 0;
            }

        }
        magicNumbers += + " " + numberArray[counter1] + " ";
    }
    return magicNumbers;
} // end lotteryDrawing()

function powerballDrawing(min, max, string)
{
    var powerBall = randomizer(min, max);
    console.log(string + powerBall);
} // end powerballDrawing()

function randomizer(minNum, maxNum)
{
    return Math.round(Math.random() * (maxNum - minNum) + minNum);
} // end randomizer()

function areTheSame(num1, num2)
{
    var sameNum = false;

    if(num1 == num2)
    {
        sameNum = true;
    }
    return sameNum;
}  // end areTheSame()

function winningDeclaration(line1, line2, lottery, winningNumbers)
{
    console.log(line1 + lottery + line2 + winningNumbers);
} // end winningDeclaration()

// MAIN()

returnLottery = whichLottery();

if(returnLottery == "Florida lottery")
{
    min = 1;
    max = 53;
    randomNumberCount = 6;

    luckyNumbers = lotteryDrawing(min, max, randomNumberCount, randomNumberArray, returnLottery);
    winningDeclaration(lotteryString1, lotteryString2, returnLottery, luckyNumbers)
}

if(returnLottery == "Powerball lottery")
{
    min = 1;
    max = 59;
    minPB = 1;
    maxPB = 35;
    randomNumberCount = 5;

    luckyNumbers = lotteryDrawing(min, max, randomNumberCount, randomNumberArray, returnLottery);
    winningDeclaration(lotteryString1, lotteryString2, returnLottery, luckyNumbers);
    powerballDrawing(minPB, maxPB, powerballString);
}