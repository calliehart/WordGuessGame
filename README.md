# WordGuessGame

## What the project does

This project is a game that:

1. Generates a random word from a list of country names
2. Shows users "_" for number of letters to guess
3. Compares what letter users type to the unknown word and previously guessed letters and assigns accordingly
4. If word is guessed within allowed guesses, user wins, message is displayed and wins stat is updated. If user loses game displays message.

## Problem:
A way to create a game that takes user input via the keyboard and compares it to data hidden from the user. This data is only viewable if the user matches it.

## Solution: 
- Keep the list of hidden data, the country names, in an array
- Set up and event listener to receive the user input information of keyed letters
- Test if the keyed letter is found in the word
- Check the status of the winning parameters

### Author: 
Callie Hart (https://calliehart.github.io/)




