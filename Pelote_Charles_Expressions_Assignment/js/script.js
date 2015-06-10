/**
 * Created by Charles Pelote II on 6/9/15.
 * Student id: 0004666164
 * Scalable Data Infrastructures
 * SDI 201506 Section 01
 * Assignment: Expressions Assignment
 */

//var operationsArray = ["+", "-", "*", "/"];
var operation = prompt("Choose one operation: +, -, * or /");
//var inputNumbersArray = [number1, number2];
var number1 = prompt("Enter the first number to " + operation);
var number2 = prompt("Enter the second number");
var number3 = prompt("Enter the third number");
var inputNumbersArray = [number1, number2];
var answer = " ";
//alert(operation);
alert(number1 + operation + number2);

if (operation == "+")
{
    answer = Number(inputNumbersArray[0]) + Number(inputNumbersArray[1]);
}
if (operation == "-")
{
    answer = Number(inputNumbersArray[0]) - Number(inputNumbersArray[1]);
}
if (operation == "*")
{
    answer = Number(inputNumbersArray[0]) * Number(inputNumbersArray[1]);
}
if (operation == "/")
{
    answer = Number(inputNumbersArray[0]) / Number(inputNumbersArray[1]);
}
alert(answer);
console.log(number1 + " " + operation + " " + number2 + " = " + answer);
alert(number1 + " " + operation + " " + number2 + " = " + answer);