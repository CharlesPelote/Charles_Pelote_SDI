/**
 * Created by Charles Pelote II on 6/9/15.
 * Student id: 0004666164
 * Scalable Data Infrastructures
 * SDI 201506 Section 01
 * Assignment: Expressions Assignment
 */

//var operationsArray = ["+", "-", "*", "/"];
var shape = prompt("Choose one shape: \n1 = semi-circle\n2 = triangel\n3 = trapezoid\n4=square\n5=rectangle");
var shapeArray = ["semi-circle", "triangle", "trapezoid", "square", "rectangle"];

//var number1 = 0;// = prompt("Enter the first number to " + operation)
//var number2 = 1;// = prompt("Enter the second number");
//var number3 = 2;// = prompt("Enter the third number");
var numbersArray = [0, 0 ,0];
var answer;
//alert(operation);
//alert(number1 + operation + number2);

if (shape == "1") // semi-circle
{
    var pie = 3.14;
    var radius = prompt("What is the radius in inches?");
    numbersArray[0] = radius;

    answer = pie * (Number(numbersArray[0]) * Number(numbersArray[0]))/2; //Number(inputNumbersArray[0]) + Number(inputNumbersArray[1]);
    //alert(answer);
    //alert(numbersArray[0]);
    //alert(Number(numbersArray[0]));
}
if (shape == "2") // triangle
{
    answer = Number(inputNumbersArray[0]) - Number(inputNumbersArray[1]);
}
if (shape == "3") //trapezoid
{
    answer = Number(inputNumbersArray[0]) * Number(inputNumbersArray[1]);
}
if (shape == "4") //square
{
    answer = Number(inputNumbersArray[0]) / Number(inputNumbersArray[1]);
}
if (shape == "5") //rectangle
{
    answer = Number(inputNumbersArray[0]) / Number(inputNumbersArray[1]);
}
//alert(answer);
console.log("The area of a " + shapeArray[shape - 1] + " is " + answer + " inches");
alert("The area of a " + shapeArray[shape - 1] + " is " + answer + " inches");