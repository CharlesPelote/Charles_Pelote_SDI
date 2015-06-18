/**
 * Created by Charles Pelote II on 6/16/15.
 * Student id: 0004666164
 * Scalable Data Infrastructures
 * SDI 201506 Section 01
 * Assignment: Conditionals Assignment
 */

//format number answers *****
//is there a way to test for non-sense input *****

var answer = 0;                      // answer will hold the volume of the chosen objects.
var numbersArray = [0, 0 ,0];    // an array to hold the numbers input by the user.
var shapeArray = ["sphere", "cube", "cylinder", "rectangular prism", "cone", "parabolic cone", "elliptical cone"];    // an array to hold the names of the shapes.
var shape = "0";                 // user chooses the shape by picking a number and the choice is saved in variable shape.
var test  = false;               // test variable used to hold a boolean set to false.
var pi = 3.14;
var response;
/**var userAge = 0;
var userLastName = " ";
var userFirstName = " ";
var userName = " ";
var userGender = " ";

userAge = prompt("How old are you?");
userFirstName = prompt("What is your first name?");
userLastName = prompt("What is your last name?");
userGender = prompt("Are");**/

do        // this loop will continue to run until the user enters the correct information, numbers 1-7.
{         // user enters one number to reflect the corresponding shape.
    shape = prompt("Choose one shape: \n1 = sphere\n2 = cube\n3 = cylinder\n4 = rectangular prism\n5 = cone\n6 = parabolic cone\n7 = elliptical cone");

    if(shape == 1 || shape == 2 || shape == 3 || shape == 4 || shape == 5 || shape == 6 || shape == 7) // if user enters something else repeat the question.
    {
        test = true; // when the user gets it right we set test to true and move out of the loop
    }
    else if(shape == " ")
    {
        alert("Please try again. One space isn't going to cut it. You need to enter a number between 1 & 7.");
    }
    else
    {
        alert("You are just typing non-sense now. You need to enter a number between 1 & 7.");
    }
} while(test == false);

test = false;

if (shape == "1") // the user chose 1 which is the sphere.  the if statement only does the following code if shape is equal to one.
{
    do
    {
        numbersArray[0] = Number(prompt("What is the diameter of the sphere in inches?")); // takes the users diameter and puts it in the array
        (numbersArray[0] > 0) ? test = true : alert("Please enter a positive number greater than zero.");
    }
    while(test == false);

    answer = pi * numbersArray[0] * numbersArray[0] * numbersArray[0]/6; // calculates the volume and puts it in answer
}

test = false;

if (shape == "2") // the user chose 2 which is the cube.  the if statement only does the following code if shape is equal to two.
{
    do
    {
        numbersArray[0] = Number(prompt("What is the length of one side of the cube?"));   // takes the users base and puts it in the array
        (numbersArray[0] > 0) ? test = true : alert("Please enter a positive number greater than zero.");
    }
    while(test == false);

    answer = numbersArray[0] * numbersArray[0] * numbersArray[0];  // calculates the area and puts it in answer
}

test = false;

if (shape == "3") // the user chose 3 which is the trapezoid.  the if statement only does the following code if shape is equal to three.
{
    do
    {
        numbersArray[0] = Number(prompt("What is the diameter of the cylinder in inches?"));   // takes the width of the top and puts it in the array
        (numbersArray[0] > 0) ? test = true : alert("Please enter a positive number greater than zero.");
    }
    while(test == false);

    test = false;

    do
    {
        numbersArray[1] = Number(prompt("What is the height of the cylinder in inches?")); // takes the width of the bottom and puts it in the array
        (numbersArray[1] > 0) ? test = true : alert("Please enter a positive number greater than zero.");
    }
    while(test == false);

    answer = pi * numbersArray[0] * numbersArray[0] * numbersArray[1]/4;  // calculates the area and puts it in answer
}

test = false;

if (shape == "4") // the user chose 4 which is the square.  the if statement only does the following code if shape is equal to four.
{
    do
    {
        numbersArray[0] = Number(prompt("What is the length of the rectangular prism in inches?")); // takes the length of one side of square and puts it in the array
        (numbersArray[0] > 0) ? test = true : alert("Please enter a positive number greater than zero.");
    }
    while(test == false);

    test = false;

    do
    {
        numbersArray[1] = Number(prompt("What is the width of the rectangular prism in inches?"));
        (numbersArray[1] > 0) ? test = true : alert("Please enter a positive number greater than zero.");
    }
    while(test == false);

    test = false;

    do
    {
        numbersArray[2] = Number(prompt("What is the height of the rectangular prism in inches?"));
        (numbersArray[2] > 0) ? test = true : alert("Please enter a positive number greater than zero.");
    }
    while(test == false);

    answer = numbersArray[0] * numbersArray[1] * numbersArray[2];  // calculates the area and puts it in answer
}

test = false;

if (shape == "5") // the user chose 5 which is the rectangle.  the if statement only does the following code if shape is equal to five.
{
    do
    {
        numbersArray[0] = Number(prompt("What is the diameter of the cone in inches?")); // takes the width and puts it in the array
        (numbersArray[0] > 0) ? test = true : alert("Please enter a positive number greater than zero.");
    }
    while(test == false);

    test = false;

    do
    {
        numbersArray[1] = Number(prompt("What is the height of the cone in inches?")); // takes the height and puts it in the array
        (numbersArray[1] > 0) ? test = true : alert("Please enter a positive number greater than zero.");
    }
    while(test == false);

    answer = pi * numbersArray[0] * numbersArray[0] * numbersArray[1]/12;  // calculates the area and puts it in answer
}

test = false;

if (shape == "6") // the user chose 1 which is the semi-circle.  the if statement only does the following code if shape is equal to one.
{
    do
    {
        numbersArray[0] = Number(prompt("What is the diameter of the parabolic cone in inches?")); // takes the width and puts it in the array
        (numbersArray[0] > 0) ? test = true : alert("Please enter a positive number greater than zero.");
    }
    while(test == false);

    test = false;

    do
    {
        numbersArray[1] = Number(prompt("What is the height of the parabolic cone in inches?")); // takes the height and puts it in the array
        (numbersArray[1] > 0) ? test = true : alert("Please enter a positive number greater than zero.");
    }
    while(test == false);

    answer = 2 * pi * numbersArray[0] * numbersArray[0] * numbersArray[1]/15;  // calculates the area and puts it in answer
}

test = false;

if (shape == "7") // the user chose 1 which is the semi-circle.  the if statement only does the following code if shape is equal to one.
{
    do
    {
        numbersArray[0] = Number(prompt("What is the diameter of the elliptical cone in inches?")); // takes the width and puts it in the array
        (numbersArray[0] > 0) ? test = true : alert("Please enter a positive number greater than zero.");
    }
    while(test == false);

    test = false;

    do
    {
        numbersArray[1] = Number(prompt("What is the height of the elliptical cone in inches?")); // takes the height and puts it in the array
        (numbersArray[1] > 0) ? test = true : alert("Please enter a positive number greater than zero.");
    }
    while(test == false);

    answer = pi * numbersArray[0] * numbersArray[0] * numbersArray[1]/6;  // calculates the area and puts it in answer
}

response = (answer <= 0) ? "Something went wrong." : "The volume of your " + shapeArray[shape - 1] + " is " + answer + " inches cubed.";
console.log(response);  // outputs a string to the console
alert(response); // outputs a string to the user
