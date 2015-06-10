/**
 * Created by Charles Pelote II on 6/9/15.
 * Student id: 0004666164
 * Scalable Data Infrastructures
 * SDI 201506 Section 01
 * Assignment: Expressions Assignment
 */

//var operationsArray = ["+", "-", "*", "/"];
var shape = prompt("Choose one shape: \n1 = semi-circle\n2 = triangel\n3 = trapezoid\n4=square\n5=rectangle");
alert(shape);
var operation = prompt("Choose one operation: +, -, * or /");
//var inputNumbersArray = [number1, number2];
var number1 = prompt("Enter the first number to " + operation);
var number2 = prompt("Enter the second number");
var number3 = prompt("Enter the third number");
var inputNumbersArray = [number1, number2];
var answer = " ";
//alert(operation);
//alert(number1 + operation + number2);

if (shape == "1")
{
    answer = Number(inputNumbersArray[0]) + Number(inputNumbersArray[1]);
}
if (shape == "2")
{
    answer = Number(inputNumbersArray[0]) - Number(inputNumbersArray[1]);
}
if (shape == "3")
{
    answer = Number(inputNumbersArray[0]) * Number(inputNumbersArray[1]);
}
if (shape == "4")
{
    answer = Number(inputNumbersArray[0]) / Number(inputNumbersArray[1]);
}
if (shape == "5")
{
    answer = Number(inputNumbersArray[0]) / Number(inputNumbersArray[1]);
}
alert(answer);
console.log(number1 + " " + operation + " " + number2 + " = " + answer);
alert(number1 + " " + operation + " " + number2 + " = " + answer);