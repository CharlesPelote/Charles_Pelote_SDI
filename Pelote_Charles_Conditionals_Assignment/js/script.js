/**
 * Created by Charles Pelote II on 6/16/15.
 * Student id: 0004666164
 * Scalable Data Infrastructures
 * SDI 201506 Section 01
 * Assignment: Conditionals Assignment
 */

var pi           = 3.14;         // fixed variable pi
var answer       = 0;            // answer will hold the volume of the chosen objects.
var shape        = " ";          // user chooses the shape by picking a number between 1-7
var test         = false;        // test variable used to hold a boolean initialized to false.
var response;                    // used to hold the final response to the user providing them with the volume.
var numbersArray = [0, 0 ,0];    // an array to hold the numbers input by the user.
                                 // shapeArray is an array used to hold the names of the shapes.
var shapeArray   = ["sphere", "cube", "cylinder", "rectangular prism", "cone", "parabolic cone", "elliptical cone"];


do        // this loop will continue to run until the user enters the correct information, a number between 1-7.
{         // user enters one number to reflect the corresponding shape.
    shape = prompt("Choose one shape: \n1 = sphere\n2 = cube\n3 = cylinder\n4 = rectangular prism\n5 = cone\n6 = parabolic cone\n7 = elliptical cone");

    if(shape == 1 || shape == 2 || shape == 3 || shape == 4 || shape == 5 || shape == 6 || shape == 7) // if user enters something else repeat the question.
    {
        test = true; // when the user gets it right we set test to true and move out of the loop
    }
    else if(shape == " ") // if the user enters a space then the following alert will be displayed. this line is not needed (shape == "")
    {
        alert("Please try again. One space isn't going to cut it. You need to enter a number between 1 & 7.");
    }
    else // the below alert will be displayed in the case the first two conditions are not met.
    {
        alert("You are just typing non-sense now. You need to enter a number between 1 & 7.");
    }
} while(test == false); // as long as test == false the loop will repeat. when test == true then the user entered the correct information and the loop is ended.

test = false; // reset the test variable.

if (shape == "1") // the user chose 1 which is the sphere.  the if statement only does the following code if shape is equal to one.
{
    do // this loop will continue to run until the user enters the correct information, a positive number.
    {
        numbersArray[0] = Number(prompt("What is the diameter of the sphere in inches?")); // takes the users diameter and puts it in the array
        (numbersArray[0] > 0) ? test = true : alert("Please enter a positive number greater than zero.");  // ternary conditional statement that ensures the user enters a positive number.
    }
    while(test == false);  // as long as test == false the loop will repeat. when test == true then the user entered the correct information and the loop is ended.

    answer = pi * numbersArray[0] * numbersArray[0] * numbersArray[0]/6; // calculates the volume and puts it in answer
}

if (shape == "2") // the user chose 2 which is the cube.  the if statement only does the following code if shape is equal to two.
{
    do  // this loop will continue to run until the user enters the correct information, a positive number.
    {
        numbersArray[0] = Number(prompt("What is the length of one side of the cube?"));   // takes the users length and puts it in the array
        (numbersArray[0] > 0) ? test = true : alert("Please enter a positive number greater than zero.");  // ternary conditional statement that ensures the user enters a positive number.
    }
    while(test == false);  // as long as test == false the loop will repeat. when test == true then the user entered the correct information and the loop is ended.

    answer = numbersArray[0] * numbersArray[0] * numbersArray[0];  // calculates the volume and puts it in answer
}

if (shape == "3") // the user chose 3 which is the cylinder.  the if statement only does the following code if shape is equal to three.
{
    do  // this loop will continue to run until the user enters the correct information, a positive number.
    {
        numbersArray[0] = Number(prompt("What is the diameter of the cylinder in inches?"));   // takes the diameter and puts it in the array
        (numbersArray[0] > 0) ? test = true : alert("Please enter a positive number greater than zero.");  // ternary conditional statement that ensures the user enters a positive number.
    }
    while(test == false);  // as long as test == false the loop will repeat. when test == true then the user entered the correct information and the loop is ended.

    test = false;  // reset the test variable.

    do  // this loop will continue to run until the user enters the correct information, a positive number.
    {
        numbersArray[1] = Number(prompt("What is the height of the cylinder in inches?")); // takes the height and puts it in the array
        (numbersArray[1] > 0) ? test = true : alert("Please enter a positive number greater than zero.");  // ternary conditional statement that ensures the user enters a positive number.
    }
    while(test == false);  // as long as test == false the loop will repeat. when test == true then the user entered the correct information and the loop is ended.

    answer = pi * numbersArray[0] * numbersArray[0] * numbersArray[1]/4;  // calculates the volume and puts it in answer
}

if (shape == "4") // the user chose 4 which is the rectangular prism.  the if statement only does the following code if shape is equal to four.
{
    do  // this loop will continue to run until the user enters the correct information, a positive number.
    {
        numbersArray[0] = Number(prompt("What is the length of the rectangular prism in inches?")); // takes the length and puts it in the array
        (numbersArray[0] > 0) ? test = true : alert("Please enter a positive number greater than zero.");  // ternary conditional statement that ensures the user enters a positive number.
    }
    while(test == false);  // as long as test == false the loop will repeat. when test == true then the user entered the correct information and the loop is ended.

    test = false;  // reset the test variable.

    do  // this loop will continue to run until the user enters the correct information, a positive number.
    {
        numbersArray[1] = Number(prompt("What is the width of the rectangular prism in inches?"));  // takes the width and puts it in the array
        (numbersArray[1] > 0) ? test = true : alert("Please enter a positive number greater than zero.");  // ternary conditional statement that ensures the user enters a positive number.
    }
    while(test == false);  // as long as test == false the loop will repeat. when test == true then the user entered the correct information and the loop is ended.

    test = false;  // reset the test variable.

    do  // this loop will continue to run until the user enters the correct information, a positive number.
    {
        numbersArray[2] = Number(prompt("What is the height of the rectangular prism in inches?"));  // takes the height and puts it in the array
        (numbersArray[2] > 0) ? test = true : alert("Please enter a positive number greater than zero.");  // ternary conditional statement that ensures the user enters a positive number.
    }
    while(test == false);  // as long as test == false the loop will repeat. when test == true then the user entered the correct information and the loop is ended.

    answer = numbersArray[0] * numbersArray[1] * numbersArray[2];  // calculates the volume and puts it in answer
}

if (shape == "5") // the user chose 5 which is the cone.  the if statement only does the following code if shape is equal to five.
{
    do  // this loop will continue to run until the user enters the correct information, a positive number.
    {
        numbersArray[0] = Number(prompt("What is the diameter of the cone in inches?")); // takes the diameter and puts it in the array
        (numbersArray[0] > 0) ? test = true : alert("Please enter a positive number greater than zero.");  // ternary conditional statement that ensures the user enters a positive number.
    }
    while(test == false);  // as long as test == false the loop will repeat. when test == true then the user entered the correct information and the loop is ended.

    test = false;  // reset the test variable.

    do  // this loop will continue to run until the user enters the correct information, a positive number.
    {
        numbersArray[1] = Number(prompt("What is the height of the cone in inches?")); // takes the height and puts it in the array
        (numbersArray[1] > 0) ? test = true : alert("Please enter a positive number greater than zero.");  // ternary conditional statement that ensures the user enters a positive number.
    }
    while(test == false);  // as long as test == false the loop will repeat. when test == true then the user entered the correct information and the loop is ended.

    answer = pi * numbersArray[0] * numbersArray[0] * numbersArray[1]/12;  // calculates the volume and puts it in answer
}

if (shape == "6") // the user chose 6 which is the parabolic cone.  the if statement only does the following code if shape is equal to six.
{
    do  // this loop will continue to run until the user enters the correct information, a positive number.
    {
        numbersArray[0] = Number(prompt("What is the diameter of the parabolic cone in inches?")); // takes the diameter and puts it in the array
        (numbersArray[0] > 0) ? test = true : alert("Please enter a positive number greater than zero.");  // ternary conditional statement that ensures the user enters a positive number.
    }
    while(test == false);  // as long as test == false the loop will repeat. when test == true then the user entered the correct information and the loop is ended.

    test = false;  // reset the test variable.

    do  // this loop will continue to run until the user enters the correct information, a positive number.
    {
        numbersArray[1] = Number(prompt("What is the height of the parabolic cone in inches?")); // takes the height and puts it in the array
        (numbersArray[1] > 0) ? test = true : alert("Please enter a positive number greater than zero.");  // ternary conditional statement that ensures the user enters a positive number.
    }
    while(test == false);  // as long as test == false the loop will repeat. when test == true then the user entered the correct information and the loop is ended.

    answer = 2 * pi * numbersArray[0] * numbersArray[0] * numbersArray[1]/15;  // calculates the volume and puts it in answer
}

if (shape == "7") // the user chose 7 which is the elliptical cone.  the if statement only does the following code if shape is equal to seven.
{
    do  // this loop will continue to run until the user enters the correct information, a positive number.
    {
        numbersArray[0] = Number(prompt("What is the diameter of the elliptical cone in inches?")); // takes the diameter and puts it in the array
        (numbersArray[0] > 0) ? test = true : alert("Please enter a positive number greater than zero.");  // ternary conditional statement that ensures the user enters a positive number.
    }
    while(test == false);  // as long as test == false the loop will repeat. when test == true then the user entered the correct information and the loop is ended.

    test = false;  // reset the test variable.

    do  // this loop will continue to run until the user enters the correct information, a positive number.
    {
        numbersArray[1] = Number(prompt("What is the height of the elliptical cone in inches?")); // takes the height and puts it in the array
        (numbersArray[1] > 0) ? test = true : alert("Please enter a positive number greater than zero.");  // ternary conditional statement that ensures the user enters a positive number.
    }
    while(test == false);  // as long as test == false the loop will repeat. when test == true then the user entered the correct information and the loop is ended.

    answer = pi * numbersArray[0] * numbersArray[0] * numbersArray[1]/6;  // calculates the volume and puts it in answer
}

answer = answer.toFixed(2); // the number within answer is rounded to two decimal places.
                            // ternary conditioanl statement that performs a final validation for the correct input to ensure a positive number will be displayed.
response = (answer <= 0) ? "Something went wrong." : "The volume of your " + shapeArray[shape - 1] + " is " + answer + " inches cubed.";
console.log(response);  // outputs a string to the console
alert(response);        // outputs a string to the user
