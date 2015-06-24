/**
 * Created by Charles Pelote II on 6/23/15.
 * Student id: 0004666164
 * Scalable Data Infrastructures
 * SDI 201506 Section 01
 * Assignment: Conditionals Assignment
 * */

// variables

//var myName = prompt("Enter your name:");
var returnNumber = 0;
var returnLottery;

// functions

/**function myNameFunction(min, max, number)
{
    var randomNumber = Math.random() * (max - min) + min;
    console.log("You entered " + min + " " + max + " " + randomNumber + ".\n");
    randomNumber = Math.round(randomNumber);
    return randomNumber;
}**/

function whichLottery()
{
    var test = true;
    var lottery;
    var lotteryArray = ["Powerball", "Florida lottery", "Powerball lottery"];

    while(test == true)
    {
        lottery = prompt("Which lottery are you playing? \nChoose from: \n1 = Powerball\n2 = Florida lottery\n3 = Powerball lottery.");

        if(lottery == 1 || lottery == 2 || lottery == 3)
        {
            test = false;
        }
    }
    return lotteryArray[lottery - 1];
}
//main

//returnNumber = myNameFunction(10, 70, 100);
returnLottery = whichLottery();

console.log("\nthis is it !!!  " + returnLottery);

