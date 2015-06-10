/**
 * Created by Charles Pelote II on 6/9/15.
 * Student id: 0004666164
 * Scalable Data Infrastructures
 * SDI 201506 Section 01
 * Assignment: Expressions Assignment
 */

var answer;
var numbersArray = [0, 0 ,0];
var shapeArray = ["semi-circle", "triangle", "trapezoid", "square", "rectangle"];
var shape = prompt("Choose one shape: \n1 = semi-circle\n2 = triangle\n3 = trapezoid\n4=square\n5=rectangle");

if (shape == "1") // semi-circle
{
    var pie = 3.14;

    numbersArray[0] = prompt("What is the radius in inches?");

    answer = pie * (Number(numbersArray[shape - 1]) * Number(numbersArray[shape - 1]))/2;
}

if (shape == "2") // triangle
{
    numbersArray[0] = prompt("What is the base in inches?");   // base
    numbersArray[1] = prompt("What is the height in inches?"); // height

    answer = Number(numbersArray[0]) * Number(numbersArray[1])/2;
}

if (shape == "3") //trapezoid
{
    numbersArray[0] = prompt("What is the width of the top in inches?");   // width of the top
    numbersArray[1] = prompt("What is the width of the bottom in inches?"); // width of the bottom
    numbersArray[2] = prompt("What is the height in inches?"); // height

    answer = (Number(numbersArray[0]) + Number(numbersArray[1])) * Number(numbersArray[2])/2;
}

if (shape == "4") //square
{
    numbersArray[0] = prompt("What is the length of one side of the square in inches?"); // length of one side of square

    answer = Number(numbersArray[0]) * Number(numbersArray[0]);
}

if (shape == "5") //rectangle
{
    answer = Number(inputNumbersArray[0]) / Number(inputNumbersArray[1]);
}
//alert(answer);
console.log("The area of a " + shapeArray[shape - 1] + " is " + answer + " inches");
alert("The area of a " + shapeArray[shape - 1] + " is " + answer + " inches squared.");