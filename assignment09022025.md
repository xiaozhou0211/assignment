DEAD LINE - 15/02/2025 18:00

Submission Instructions - Any explaination or texts can be using as comment

Assignment 1

We have see the function that called fruitProcessor in the class, now we want to edit the function, base on the fruit number then return different statement 

The fruitProcessor can produce apple juice, oranges juice and apple oranges.
If number of apple is over 1 and no oranges, then console log return 'Fruit processor produce apple juice on Monday'
If number of oranges is over 1 and no apple, then console log return 'Fruit processor produce oranges juice on Tuesday'
If number of apple is over 1 and number of oranges is over 1 as well, then console log return 'Fruit processor produce apple juice on Wednesday'

Display three stataments in the console logs

Assignment 2
Part 1 - Short questions 
1. Define what a function declaration is and provide an example.
2. Define what a function expression is and provide an example.
3. What are the key differences between function declarations and function expressions?
4. Explain the concept of hoisting in JavaScript and how it affects function declarations and function expressions. (Bonuse)

Part 2: Coding Exercises
1. Function Declaration Practice
Write a function declaration named greet that takes a parameter name and logs Hello, [name]! to the console.
Call this function before its definition and observe the behavior, Explain what happens.
2. Function Expression Practice
Write a function expression named farewell that takes a parameter name and logs Goodbye, [name]! to the console.
Try calling this function before its definition and observe the behavior. Explain what happens.
Attempt to invoke both before their respective definitions and document the results.
3. Arrow Functions 
Convert the function expression from Exercise 2 into an arrow function and test its behavior in relation to hoisting.

Assignment 3
The two gymnastics teams, the Dolphins and the Koalas.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49

TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

1. Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).
2. Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them. and console log these two team average score.
3. Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Create a function that can give random number between 1 and 100 (integer), then use 'checkWinner' function to determine the winner. (in here you dont need to use calcAverage function, just use random number as Dolphins or the Koalas average score)(Bonuse)
