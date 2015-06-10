/**
 * Created by Charles Pelote II on 6/9/15.
 * Student id: 0004666164
 * Scalable Data Infrastructures
 * SDI 201506 Section 01
 * Assignment: Expressions Assignment
 */

//var operationsArray = ["+", "-", "*", "/"];
var operation = prompt("Choose one operation: +, -, * or /");
//var inputNumbersArray = ;
var number1 = prompt("Enter the first number to " + operation);
var number2 = prompt("Enter the second number");

//alert(operation);
alert(number1 + operation + number2);

if (operation == "+")
{
    var answer = Number(number1) + Number(number2);
}
if (operation == "-")
{
    var answer = Number(number1) + Number(number2);
}
if (operation == "*")
{
    var answer = Number(number1) + Number(number2);
}
if (operation == "/")
{
    var answer = Number(number1) + Number(number2);
}
alert(answer);