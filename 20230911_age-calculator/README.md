# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Bonus: See the age numbers animate to their final number when the form is submitted

### Screenshot

![Mobile](https://github.com/peiyi-c/Frontend_Mentor/assets/73789013/3046bc72-66e2-4e5a-961f-a4fa1732b808)
![Desktop](https://github.com/peiyi-c/Frontend_Mentor/assets/73789013/f3b3f505-98f9-40fb-a4dc-91b3e58e4434)

### Links

- Live Site URL: [Live site URL](https://peiyi-c.github.io/Frontend_Mentor/20230911_age-calculator/)
## My process

### Built with

- Semantic HTML5 markup
- CSS Grid, CSS Variables...
- Mobile-first workflow

### What I learned

I wanted to practice validation check in this project. The checking flow can be divided into two parts:

- **Before the user click on submit**, number value in DD/MM/YYYY fields will be checked if they lie in the valid range upon input and change.(days must be 1-31, month must be 1-12, years cannot be greater than current year)
  
- **After the user click on submit**, it will be checked if all the required fields are filled, if the date (combination of DD/MM/YYYY) exists and if the date was in the past.

- Only when all input values pass the check will the app calculate the age. Otherwise it will throw error messages.


### Continued development

Add extra animations to the final number when the form is submitted to level up UX.

### Useful resources

- [Resource](https://bobbyhadz.com/blog/javascript-referenceerror-moment-is-not-defined#referenceerror-moment-is-not-defined-in-the-browser) - This helped me to solved the ReferenceError when importing moment.js 

## Author

- Website - [Pei-Yi C.]((https://github.com/peiyi-c)

  
