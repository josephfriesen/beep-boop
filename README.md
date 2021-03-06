# Beep Boop!

#### A simple web page that lists numbers from 0 to n... until things go wrong. Submitted for Epicodus Code Review 8/17/2018_

### _Created by_ **Joseph Friesen**

***

## Description

A single web page that purports to be able to list the first _(n+1)_ nonnegative integers, with _n_ a number given by the user, but in actuality replaces certain of those numbers with simulated computer errors, with substitutions made according to the rules enumerated below."Specifications".

***

## Specifications

* Program will return an error message if user enters a value that is not an integer greater than or equal to 0.
  * Example input: "hi there."
  * Output: "Dave my mind is going... because I don't think you've given me a number."

* Given a nonnegative integer from the user, program will generate an array listing all integers from 0 to the number given.
  * Example input: "14"
  * Output: [0 / 1 / 2 / 3 / 4 / 5 / 6 / 7 / 8 / 9 / 10 / 11 / 12 / 13 / 14]

* Given an array of integers, will replace all numbers divisible by 3 with an error message.
  * Example input: "9"
  * Output: [I'm sorry Dave, I'm afraid I can't do that. / 1 / 2 / I'm sorry Dave, I'm afraid I can't do that. / 4 / 5 / I'm sorry Dave, I'm afraid I can't do that. / 7 / 8 / I'm sorry Dave, I'm afraid I can't do that.]

* Given an array of integers, will replace all numbers containing a 1 digit but not divisible by 3 with string "Boop!"
  * Example input: "13"
  * Output: "I'm sorry Dave, I'm afraid I can't do that. / Boop! / 2 / I'm sorry Dave, I'm afraid I can't do that. / 4 / 5 / I'm sorry Dave, I'm afraid I can't do that. / 7 / 8 / I'm sorry Dave, I'm afraid I can't do that. / Boop! / Boop! / I'm sorry Dave, I'm afraid I can't do that. / Boop!"

* Given an array of integers, will replace all numbers containing a 0 digit but not containing a 1 digit nor divisible by 3 with string "Beep!"
  * Example input: "20"
  * Output: "I'm sorry Dave, I'm afraid I can't do that. / Boop! / 2 / I'm sorry Dave, I'm afraid I can't do that. / 4 / 5 / I'm sorry Dave, I'm afraid I can't do that. / 7 / 8 / I'm sorry Dave, I'm afraid I can't do that. / Boop! / Boop! / I'm sorry Dave, I'm afraid I can't do that. / Boop! / Boop! / I'm sorry Dave, I'm afraid I can't do that. / Boop! / Boop! / I'm sorry Dave, I'm afraid I can't do that. / Boop! / Beep!"

* Program will return the list of integers with preceding exceptions in ascending or descending order as specified by the user.

* Program will accept a name from the user and replace all instances of "Dave" with the user's name.

* Program will replace integers according to rules listed above, but with option to print the list in random order.
  * Example input: "10"
  * Output example: "2 / I'm sorry, Dave, I'm afraid I can't do that. / I'm sorry, Dave, I'm afraid I can't do that. / 5 / 7 / 4 / I'm sorry, Dave, I'm afraid I can't do that. / Boop! / Boop! I'm sorry, Dave, I'm afraid I can't do that. / 8" (corresponding to the permutation (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10) -> (2, 0, 3, 5, 7, 4, 6, 1, 10, 9, 8))


***

## Setup Instructions

1. Clone this GitHub repository to your local machine.
2. Open file _/beep-boop/index.html_ in your web browser of choice.

***

## Technology Employed

* HTML
* Custom CSS styling
* Bootstrap CSS
* JavaScript
* jQuery

***

##### Legal


Copyright (c) 2018 [Joseph Friesen](mailto:friesen.josephc@gmail.com) All Rights Reserved.
