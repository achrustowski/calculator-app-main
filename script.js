"use strict";

const calculate = (v1, operator, v2) => {
  let result = ``;

  if (operator === `add`) {
    result = parseFloat(v1) + parseFloat(v2);
  }
  if (operator === `subtract`) {
    result = parseFloat(v1) - parseFloat(v2);
  }
  if (operator === `multiply`) {
    result = parseFloat(v1) * parseFloat(v2);
  }
  if (operator === `divide`) {
    result = parseFloat(v1) / parseFloat(v2);
  }

  return result;
};
//Declaring variables

let display = document.querySelector(`input`);

const body = document.querySelector(`.body`);
const themeDarkToggle = document.querySelector(`.theme-dark`);
const themeLightToggle = document.querySelector(`.theme-light`);
const themeRetroToggle = document.querySelector(`.theme-retro`);
const themeBar = document.querySelector(`.theme-bar`);
const toggleBackgr = document.querySelectorAll(`.theme`);
const inputBar = document.querySelector(`.input-bar`);
const inputDigits = document.getElementById(`calc-input`);
const smallBtn = document.querySelectorAll(`.small`);
const keypadGrid = document.querySelector(`.keypad-grid`);

//Selecting buttons

//Row one
const seven = document.getElementById(`seven`);
const eight = document.querySelector(`.eight`);
const nine = document.querySelector(`.nine`);
const deleteBtn = document.querySelector(`.delete`);

//Row two
const four = document.querySelector(`.four`);
const five = document.querySelector(`.five`);
const six = document.querySelector(`.six`);
const plus = document.querySelector(`.plus`);

//Row three
const one = document.querySelector(`.one`);
const two = document.querySelector(`.two`);
const three = document.querySelector(`.three`);
const minus = document.querySelector(`.minus`);

//Row four
const dot = document.querySelector(`.dot`);
const zero = document.querySelector(`.zero`);
const divide = document.querySelector(`.divide`);
const multiply = document.querySelector(`.multiply`);

//Row five
const resetBtn = document.querySelector(`.reset`);
const equalsBtn = document.querySelector(`.equals`);

//Changing interface with toggle buttons

//Dark theme set up
themeDarkToggle.addEventListener(`click`, function () {
  //Changing background color
  body.classList.remove(`active-background-light`);
  body.classList.remove(`active-background-retro`);

  //Changing toggle button position
  themeLightToggle.classList.add(`disabled-toggle`);
  themeRetroToggle.classList.add(`disabled-toggle`);
  themeDarkToggle.classList.remove(`disabled-toggle`);
  themeDarkToggle.classList.add(`active-toggle`);

  //Changing toggle button background
  toggleBackgr.forEach((toggle) =>
    toggle.classList.remove(`active-keypad-background-light`)
  );
  toggleBackgr.forEach((toggle) =>
    toggle.classList.remove(`active-keypad-background-retro`)
  );

  //Changing font color for theme bar
  themeBar.classList.remove(`active-color-light`);
  themeBar.classList.remove(`active-color-retro`);

  //Changing font color for small buttons (except Del)
  smallBtn.forEach((small) => small.classList.add(`active-color-dark`));
  smallBtn.forEach((small) => small.classList.remove(`active-color-light`));
  smallBtn.forEach((small) => small.classList.remove(`active-color-retro`));

  //Changing font color for equals button
  equalsBtn.classList.remove(`active-equals-color-retro`);

  //Changing font color for the digit in input bar
  inputDigits.classList.add(`active-color-white`);
  inputDigits.classList.remove(`active-color-light`);
  inputDigits.classList.remove(`active-color-retro`);

  //Changing background for the input bar
  inputBar.classList.add(`active-input-bar-dark`);
  inputBar.classList.remove(`active-input-bar-retro`);
  inputBar.classList.remove(`active-input-bar-light`);

  //Changing background for the keypad grid
  keypadGrid.classList.remove(`active-keypad-background-light`);
  keypadGrid.classList.remove(`active-keypad-background-retro`);

  //Changing background color for small buttons (except Del)
  smallBtn.forEach((small) =>
    small.classList.remove(`active-key-background-light`)
  );
  smallBtn.forEach((small) =>
    small.classList.remove(`active-key-background-retro`)
  );

  //Changing background color for reset, delete and equals
  resetBtn.classList.remove(`active-res-del-background-light`);
  resetBtn.classList.remove(`active-res-del-background-retro`);
  deleteBtn.classList.remove(`active-res-del-background-light`);
  deleteBtn.classList.remove(`active-res-del-background-retro`);
  equalsBtn.classList.remove(`active-equals-background-light`);
  equalsBtn.classList.remove(`active-equals-background-retro`);

  //Changing shadow color for small buttons (except Del)
  smallBtn.forEach((small) =>
    small.classList.remove(`active-key-shadow-light`)
  );
  smallBtn.forEach((small) =>
    small.classList.remove(`active-key-shadow-retro`)
  );

  //Changing shadow color for reset and delete
  resetBtn.classList.remove(`active-res-del-shadow-light`);
  resetBtn.classList.remove(`active-res-del-shadow-retro`);
  deleteBtn.classList.remove(`active-res-del-shadow-light`);
  deleteBtn.classList.remove(`active-res-del-shadow-retro`);
  equalsBtn.classList.remove(`active-equals-shadow-light`);
  equalsBtn.classList.remove(`active-equals-shadow-retro`);
});

//Light theme setup
themeLightToggle.addEventListener(`click`, function () {
  //Changing background color
  body.classList.remove(`active-background-dark`);
  body.classList.remove(`active-background-retro`);
  body.classList.add(`active-background-light`);

  //Changing toggle button position
  themeLightToggle.classList.remove(`disabled-toggle`);
  themeDarkToggle.classList.add(`disabled-toggle`);
  themeRetroToggle.classList.add(`disabled-toggle`);

  //Changing toggle button background
  toggleBackgr.forEach((toggleBackgr) =>
    toggleBackgr.classList.add(`active-keypad-background-light`)
  );
  toggleBackgr.forEach((toggle) =>
    toggle.classList.remove(`active-keypad-background-retro`)
  );

  //Changing font color for theme bar
  themeBar.classList.add(`active-color-light`);
  themeBar.classList.remove(`active-color-retro`);

  //Changing font color for small buttons (except Del)
  smallBtn.forEach((small) => small.classList.remove(`active-color-dark`));
  smallBtn.forEach((smallBtn) => smallBtn.classList.add(`active-color-light`));
  smallBtn.forEach((small) => small.classList.remove(`active-color-retro`));

  //Changing font color for equals button
  equalsBtn.classList.remove(`active-equals-color-retro`);

  //Changing font color for the digit in input bar
  inputDigits.classList.remove(`active-color-white`);
  inputDigits.classList.add(`active-color-light`);
  inputDigits.classList.remove(`active-color-retro`);

  //Changing background for the input bar
  inputBar.classList.remove(`active-input-bar-dark`);
  inputBar.classList.remove(`active-input-bar-retro`);
  inputBar.classList.add(`active-input-bar-light`);

  //Changing background for the keypad grid
  keypadGrid.classList.add(`active-keypad-background-light`);
  keypadGrid.classList.remove(`active-keypad-background-retro`);

  //Changing background color for small buttons (except Del)
  smallBtn.forEach((small) =>
    small.classList.add(`active-key-background-light`)
  );
  smallBtn.forEach((small) =>
    small.classList.remove(`active-key-background-retro`)
  );

  //Changing background color for reset and delete
  resetBtn.classList.add(`active-res-del-background-light`);
  resetBtn.classList.remove(`active-res-del-background-retro`);
  deleteBtn.classList.add(`active-res-del-background-light`);
  deleteBtn.classList.remove(`active-res-del-background-retro`);
  equalsBtn.classList.add(`active-equals-background-light`);
  equalsBtn.classList.remove(`active-equals-background-retro`);

  //Changing shadow color for small buttons (except Del)
  smallBtn.forEach((small) => small.classList.add(`active-key-shadow-light`));
  smallBtn.forEach((small) =>
    small.classList.remove(`active-key-shadow-retro`)
  );

  //Changing shadow color for reset and delete
  resetBtn.classList.add(`active-res-del-shadow-light`);
  resetBtn.classList.remove(`active-res-del-shadow-retro`);
  deleteBtn.classList.add(`active-res-del-shadow-light`);
  deleteBtn.classList.remove(`active-res-del-shadow-retro`);
  equalsBtn.classList.add(`active-equals-shadow-light`);
  equalsBtn.classList.remove(`active-equals-shadow-retro`);
});

//Retro theme set up
themeRetroToggle.addEventListener(`click`, function () {
  //Changing background color
  body.classList.remove(`active-background-dark`);
  body.classList.remove(`active-background-light`);
  body.classList.add(`active-background-retro`);

  //Changing toggle button position
  themeRetroToggle.classList.remove(`disabled-toggle`);
  themeDarkToggle.classList.add(`disabled-toggle`);
  themeLightToggle.classList.add(`disabled-toggle`);

  //Changing toggle button background
  toggleBackgr.forEach((toggleBackgr) =>
    toggleBackgr.classList.remove(`active-keypad-background-light`)
  );
  toggleBackgr.forEach((toggle) =>
    toggle.classList.add(`active-keypad-background-retro`)
  );

  //Changing font color for theme bar
  themeBar.classList.remove(`active-color-light`);
  themeBar.classList.add(`active-color-retro`);

  //Changing font color for small buttons (except Del)
  smallBtn.forEach((smallBtn) =>
    smallBtn.classList.remove(`active-color-light`)
  );
  smallBtn.forEach((small) => small.classList.add(`active-color-retro`));

  //Changing font color for equals button
  equalsBtn.classList.add(`active-equals-color-retro`);

  //Changing font color for the digit in input bar
  inputDigits.classList.remove(`active-color-white`);
  inputDigits.classList.remove(`active-color-light`);
  inputDigits.classList.add(`active-color-retro`);

  //Changing background for the input bar
  inputBar.classList.remove(`active-input-bar-dark`);
  inputBar.classList.add(`active-input-bar-retro`);
  inputBar.classList.remove(`active-input-bar-light`);

  //Changing background for the keypad grid
  keypadGrid.classList.remove(`active-keypad-background-light`);
  keypadGrid.classList.add(`active-keypad-background-retro`);

  //Changing background color for small buttons (except Del)
  smallBtn.forEach((small) =>
    small.classList.remove(`active-key-background-light`)
  );
  smallBtn.forEach((small) =>
    small.classList.add(`active-key-background-retro`)
  );

  //Changing background color for reset and delete
  resetBtn.classList.remove(`active-res-del-background-light`);
  resetBtn.classList.add(`active-res-del-background-retro`);
  deleteBtn.classList.remove(`active-res-del-background-light`);
  deleteBtn.classList.add(`active-res-del-background-retro`);
  equalsBtn.classList.remove(`active-equals-background-light`);
  equalsBtn.classList.add(`active-equals-background-retro`);

  //Changing shadow color for small buttons (except Del)
  smallBtn.forEach((small) =>
    small.classList.remove(`active-key-shadow-light`)
  );
  smallBtn.forEach((small) => small.classList.add(`active-key-shadow-retro`));

  //Changing shadow color for reset and delete
  resetBtn.classList.remove(`active-res-del-shadow-light`);
  resetBtn.classList.add(`active-res-del-shadow-retro`);
  deleteBtn.classList.remove(`active-res-del-shadow-light`);
  deleteBtn.classList.add(`active-res-del-shadow-retro`);
  equalsBtn.classList.remove(`active-equals-shadow-light`);
  equalsBtn.classList.add(`active-equals-shadow-retro`);
});

// resetBtn.addEventListener("click", function () {
//   inputDigits.textContent = 0;
// });

//Creating responses for individual keys
keypadGrid.addEventListener(`click`, (e) => {
  //Addressing only button click events
  if (e.target.matches(`button`)) {
    //assigning event target to a variable
    const key = e.target;
    //returns the HTML target
    // console.log(key);

    //reading data attribute of data-action class and assigning it to a variable
    const action = key.dataset.action;
    //logging action to the console gives data-action for individual keys: +, -, *, /
    // console.log(action);

    //retrieving content of a pressed key
    let keyContent = key.textContent;
    //retrieving content of the displayed number
    // let displayedNum = display.value;
    let displayedNum = display.value;

    //storing previously hit key in a variable
    const previousKeyType = keypadGrid.dataset.previousKeyType;

    if (!action) {
      if (
        display.value === `0` ||
        previousKeyType === `operator` ||
        previousKeyType === `calculate`
      ) {
        display.value = keyContent;
      } else {
        display.value = displayedNum + keyContent;
      }

      keypadGrid.dataset.previousKeyType = `number`;
    }

    if (action === `decimal`) {
      if (!display.value.includes(`.`)) {
        display.value = displayedNum + `.`;
      } else if (
        previousKeyType === `operator` ||
        previousKeyType === `calculate`
      ) {
        display.value = `0.`;
      }

      keypadGrid.dataset.previousKeyType = `decimal`;
    }

    if (action === `delete`) {
      if (display.value !== ``) {
        display.value = display.value.slice(0, -1);
      }
      if (display.value === ``) {
        display.value = `0`;
      }
      keypadGrid.dataset.previousKeyType = `delete`;
    }

    if (
      action === `add` ||
      action === `subtract` ||
      action === `multiply` ||
      action === `divide`
    ) {
      const firstValue = keypadGrid.dataset.firstValue;
      const operator = keypadGrid.dataset.operator;
      const secondValue = displayedNum;

      if (
        firstValue &&
        action &&
        previousKeyType !== `operator` &&
        previousKeyType !== `calculate`
      ) {
        const calcValue = calculate(firstValue, operator, secondValue);
        display.value = calcValue;
        keypadGrid.dataset.firstValue = calcValue;
      } else {
        keypadGrid.dataset.firstValue = displayedNum;
      }
      console.log(firstValue, secondValue, operator, action, previousKeyType);
      keypadGrid.dataset.operator = action;
      keypadGrid.dataset.previousKeyType = `operator`;
    }

    if (action === `calculate`) {
      let firstValue = keypadGrid.dataset.firstValue;
      const operator = keypadGrid.dataset.operator;
      let secondValue = displayedNum;

      display.value = calculate(firstValue, operator, secondValue);

      keypadGrid.dataset.previousKeyType = `calculate`;
    }

    if (action === `clear`) {
      display.value = `0`;
    }
    console.log(previousKeyType);
  }
});
