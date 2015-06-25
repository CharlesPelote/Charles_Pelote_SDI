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
var randomNumberArray = [];
var randomCount = 0;
var magicNumbers = " ";
var returnLottery;
var powerBall = 0;
var loop1Cntr = 0;
var loop2Cntr = 0;
//var number1 = 0;
//var number2 = 0;
//var same = false;
//var tempRandomNumber = 0;

// FUNCTIONS

function whichLottery()
{
    var test = true;
    var lottery;
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

function randomizer(minNum, maxNum)
{
    return Math.round(Math.random() * (maxNum - minNum) + minNum);
} // end floridaLottery()

function areTheSame(num1, num2)
{
    var sameNum = false;

    if(num1 == num2)
    {
        sameNum = true;
    }

    return sameNum;
}  // end areTheSame

// MAIN()

returnLottery = whichLottery();

if(returnLottery == "Florida lottery")
{
    min = 1;
    max = 53;
    randomNumberCount = 6;  //randomNumberCount

    for (loop1Cntr = 0; loop1Cntr <= randomNumberCount - 1; loop1Cntr++)
    {
        randomNumberArray[loop1Cntr] = randomizer(min, max);
        for(loop2Cntr = 0; loop2Cntr <= loop1Cntr - 1; loop2Cntr++)
        {
            if(areTheSame(randomNumberArray[loop1Cntr], randomNumberArray[loop2Cntr]))
            {
                randomNumberArray[loop1Cntr] = randomizer(min, max);
                loop2Cntr = 0;
            }

        }


        magicNumbers = magicNumbers + " " + randomNumberArray[loop1Cntr] + " "; // magicNumbers += " " + etc
    }
    console.log("your magic numbers for the " + returnLottery + " are ...." + " " + magicNumbers);
}

if(returnLottery == "Powerball lottery")
{
    min = 1;
    max = 59;
    minPB = 1;
    maxPB = 35;
    randomCount = 5;

    for (loop1Cntr = 0; loop1Cntr <= randomCount - 1; loop1Cntr++)
    {
        randomNumberArray[loop1Cntr] = randomizer(min, max);
        for(loop2Cntr = 0; loop2Cntr <= loop1Cntr - 1; loop2Cntr++)
        {
            if(areTheSame(randomNumberArray[loop1Cntr], randomNumberArray[loop2Cntr]))
            {
                randomNumberArray[loop1Cntr] = randomizer(min, max);
                loop2Cntr = 0;
            }

        }
        magicNumbers = magicNumbers + " " + randomNumberArray[loop1Cntr] + " ";
    }
    console.log("your magic numbers for the " + returnLottery + " are ...." + " " + magicNumbers);
    powerBall = randomizer(minPB, maxPB);
    console.log("\n and your Powerball is .... " + powerBall);
}
console.log("\nthis is it !!!  " + returnLottery);

