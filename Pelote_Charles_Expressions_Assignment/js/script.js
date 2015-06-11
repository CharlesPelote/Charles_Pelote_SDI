/**
 * Created by Charles Pelote II on 6/9/15.
 * Student id: 0004666164
 * Scalable Data Infrastructures
 * SDI 201506 Section 01
 * Assignment: Expressions Assignment
 */

var answer;                      // answer will hold the area of the choose objects.
var numbersArray = [0, 0 ,0];    // an array to hold the numbers input by the user.
var shapeArray = ["semi-circle", "triangle", "trapezoid", "square", "rectangle"];    // an array to hold the names of the shapes.
var shape = "0";                 // user chooses the shape by picking a number and the choice is saved in variable shape.
var test  = false;               // test variable used to hold a boolean set to false.

do        // this loop will continue to run until the user enters the correct information, numbers 1-5.
{         // user enters one number to reflect the corresponding shape.
    shape = prompt("Choose one shape: \n1 = semi-circle\n2 = triangle\n3 = trapezoid\n4 = square\n5 = rectangle");

    if(shape == 1 || shape == 2 || shape == 3 || shape == 4 || shape == 5) // if user enters something else repeat the question.
    {
        test = true; // when the user gets it right we set test to true and move out of the loop
    }
} while(test == false);

if (shape == "1") // the user chose 1 which is the semi-circle.  the if statement only does the following code if shape is equal to one.
{
    var pi = 3.14;

    numbersArray[0] = prompt("What is the radius of the semi-circle in inches?"); // takes the users radius and puts it in the array

    answer = pi * (Number(numbersArray[shape - 1]) * Number(numbersArray[shape - 1]))/2; // calculates the area and puts it in answer
}

if (shape == "2") // the user chose 2 which is the triangle.  the if statement only does the following code if shape is equal to two.
{
    numbersArray[0] = prompt("What is the base of the triangle in inches?");   // takes the users base and puts it in the array
    numbersArray[1] = prompt("What is the height of the triangle in inches?"); // takes the users height and puts it in the array

    answer = Number(numbersArray[0]) * Number(numbersArray[1])/2;  // calculates the area and puts it in answer
}

if (shape == "3") // the user chose 3 which is the trapezoid.  the if statement only does the following code if shape is equal to three.
{
    numbersArray[0] = prompt("What is the width of the top of the trapezoid in inches?");   // takes the width of the top and puts it in the array
    numbersArray[1] = prompt("What is the width of the bottom of the trapezoid in inches?"); // takes the width of the bottom and puts it in the array
    numbersArray[2] = prompt("What is the height of the trapezoid in inches?"); // takes the height and puts it in the array

    answer = (Number(numbersArray[0]) + Number(numbersArray[1])) * Number(numbersArray[2])/2;  // calculates the area and puts it in answer
}

if (shape == "4") // the user chose 4 which is the square.  the if statement only does the following code if shape is equal to four.
{
    numbersArray[0] = prompt("What is the length of one side of the square in inches?"); // takes the length of one side of square and puts it in the array

    answer = Number(numbersArray[0]) * Number(numbersArray[0]);  // calculates the area and puts it in answer
}

if (shape == "5") // the user chose 5 which is the rectangle.  the if statement only does the following code if shape is equal to five.
{
    numbersArray[0] = prompt("What is the width of the rectangle in inches?"); // takes the width and puts it in the array
    numbersArray[1] = prompt("What is the height of the rectangle in inches?"); // takes the height and puts it in the array

    answer = Number(numbersArray[0]) * Number(numbersArray[1]);  // calculates the area and puts it in answer
}

console.log("The area of a " + shapeArray[shape - 1] + " is " + answer + " inches");  // outputs a string to the console
alert("The area of the " + shapeArray[shape - 1] + " is " + answer + " inches squared."); // outputs a string to the user