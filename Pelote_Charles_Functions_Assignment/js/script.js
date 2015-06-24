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
var number1 = 0;
var number2 = 0;
var same = false;
var tempRandomNumber = 0;

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

function randomizer(minFL, maxFL)
{
    var randomFL = Math.round(Math.random() * (maxFL - minFL) + minFL);

    return randomFL;
} // end floridaLottery()

function areTheSame(num1, num2)
{
    var sameNum = false;

    if(num1 == num2)
    {
        sameNum = true;
    }

    return sameNum;
}

// MAIN()

returnLottery = whichLottery();

if(returnLottery == "Florida lottery")
{
    min = 1;
    max = 53;
    randomCount = 6;  //randomNumberCount

    for (var cnt = 0; cnt <= randomCount - 1; cnt++)
    {
        randomNumberArray[cnt] = randomizer(min, max);

        magicNumbers = magicNumbers + " " + randomNumberArray[cnt] + " "; // magicNumbers += " " + etc
    }
    console.log("entering dupt chck loop " + randomNumberArray[0]);
    for(var i = 0; i <= randomCount - 1; i++)
    {
        for(var k = 0; k <= randomCount - 1; k++)
        {
            if(i == k)
            {
                k++;
            }
            same = areTheSame(randomNumberArray[i], randomNumberArray[k]);
            if(same == true)
            {
                tempRandomNumber = randomizer(min, max);
                k = randomCount;
                console.log("temp random " + tempRandomNumber);
            }

        } i = 0;
    }

    /**for(var num1 = 0; num1 <= randomCount - 1; num1++)
    {
        console.log("L1: lottery number = " + randomNumberArray[num1] + " counter = " + num1);
        for(var num2 = 0; num2 <= randomCount; num2++)
        {
            console.log("a new start");
            console.log("L2: lottery number l1 = " + randomNumberArray[num1] + " num1 = " + num1 + " lottery number l2= " + randomNumberArray[num2] + " num2 = " + num2);
            number1 = randomNumberArray[num1];
            number2 = randomNumberArray[num2];
            if (num1 == num2)
            {
                console.log("\n num2++ " + num2 + "number2 " + number2);
                num2++;
                number2 = randomNumberArray[num2];
                console.log("\n num2++ " + num2 + "number2 " + number2);
            }

            if (number1 == number2)
            {
                 console.log("im in");
                 randomNumberArray[num1] = randomizer(min, max);
                 //num1--;
            }

        }
    } ***/
    console.log("your magic numbers for the " + returnLottery + " are ...." + " " + magicNumbers);
}

if(returnLottery == "Powerball lottery")
{
    min = 1;
    max = 59;
    minPB = 1;
    maxPB = 35;
    randomCount = 5;

    for (var cnt = 0; cnt <= randomCount - 1; cnt++)
    {
        randomNumberArray[cnt] = randomizer(min, max);
        magicNumbers = magicNumbers + " " + randomNumberArray[cnt] + " ";
    }
    console.log("your magic numbers for the " + returnLottery + " are ...." + " " + magicNumbers);
    powerBall = randomizer(minPB, maxPB)
    console.log("\n and your Powerball is .... " + powerBall);
}
console.log("\nthis is it !!!  " + returnLottery);

