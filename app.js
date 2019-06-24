/**
 * Rules - per cc name;
 * example: 1) starts with; 2) max digit lenght;
 * all - luhn check;
 *
 *
 */

//  const test = {
//    validation: {

//    },
//    rules: {

//    },
//    resetInputs() {

//    },
//    submitInputs() {

//    }
//  }

//#region helper object
const gatheringMethods = {
  byClass: className => document.getElementsByClassName(className),
  byId: id => document.getElementById(id),
  byTag: tag => document.getElementsByTagName(tag)
};
const helper = {
  getDomElements: {
    selectedYear: gatheringMethods.byId('year'),
    selectedMonth: gatheringMethods.byId('month'),
    creditCardFormWrapper: gatheringMethods.byId('creditCardForm'),
    success: gatheringMethods.byId('success'),
    cardName: gatheringMethods.byId('cardName'),
    cvv: gatheringMethods.byId('cvv'),
    cardNumber: gatheringMethods.byId('cardNumber'),
    confirmBtn: gatheringMethods.byId('confirm'),
    clearBtn: gatheringMethods.byId('clear'),
    amexImg: gatheringMethods.byId('amex'),
    masterImg: gatheringMethods.byId('master'),
    visaImg: gatheringMethods.byId('visa'),
    allErrors: gatheringMethods.byClass('error'),
    allPassed: gatheringMethods.byClass('passed'),
    errorP: gatheringMethods.byClass('errorP'),
    creditCardChildren: gatheringMethods.byId('credit_cards').children,
  },
  bools: {
    cardName: false,
    cvv: false,
    cardNumber: false,
  },
  date: {
    currentMonth: new Date().getMonth().toString(),
    currentYear: new Date().getFullYear().toString(),
  },
  regex: {
    regName: /^[A-Z]{3,}(-[A-Z]{3,})?\s[A-Z]{3,}(-[A-Z]{3,})?$/,
    regCVV: /^(\d{3,4})$/,
    twoNamesRegex: /.{3,}\s.{3,}/,
  }
};
//#endregion

//#region select current month on page load
function disablePreviousMonthsOfCurrentYear() {
  const HTMLOptionsCollectionArr = helper.getDomElements.selectedMonth.options;
  for (const option of HTMLOptionsCollectionArr) {
    if (option.value === helper.date.currentMonth) {
      break;
    }

    option.setAttribute('disabled', 'disabled');
  }
}

disablePreviousMonthsOfCurrentYear();
//#endregion

//#region select current month of current year
function selectCurrentMonth() {
  return helper.getDomElements.selectedMonth.options[helper.date.currentMonth].selected = "selected";
}

selectCurrentMonth();
//#endregion

//#region select current year on page load
function selectCurrentYear() {
  const HTMLOptionsCollectionArr = helper.getDomElements.selectedYear.options;

  for (const option of HTMLOptionsCollectionArr) {
    if (option.value === helper.date.currentYear) {
      option.selected = 'selected';
      break;
    }

    option.setAttribute('disabled', 'disabled');
  }
}
selectCurrentYear();
//#endregion

//#region Clear button action
helper.getDomElements.clearBtn.addEventListener('click', resetAllInputs);

function resetAllInputs() {
  clearAllInputFields();
  clearAllErroPassedMessages();
  disablePreviousMonthsOfCurrentYear();
  selectCurrentYear();
  resetHelperBools();
  disabledOrEnableConfirmBtn();

  helper.getDomElements.confirmBtn.addEventListener('keydown', preventEnterAndSpaceClick);
}
//#endregion

//#region empty all input fields
function clearAllInputFields() {
  helper.getDomElements.cardName.value = '';
  helper.getDomElements.cvv.value = '';
  helper.getDomElements.cardNumber.value = '';
}

//#endregion

//#region clear all input fields styles
function clearAllErroPassedMessages() {
  const allErrorsArr = Array.from(helper.getDomElements.allErrors);
  const allPassedArr = Array.from(helper.getDomElements.allPassed);
  const errorPArr = Array.from(helper.getDomElements.errorP);
  const creditCardChildren = Array.from(helper.getDomElements.creditCardChildren);

  for (const iterator of allErrorsArr) iterator.classList.remove('error');
  for (const iterator of allPassedArr) iterator.classList.remove('passed');
  for (const iterator of errorPArr) iterator.classList.add('hidden');
  for (const iterator of creditCardChildren) iterator.classList.add('hidden');
}

//#endregion

//#region reset helper booleans
function resetHelperBools() {
  helper.bools.cardName = false;
  helper.bools.cvv = false;
  helper.bools.cardNumber = false;
}

//#endregion

//#region disabled Confirm button
function disabledOrEnableConfirmBtn(option) {
  if (option) {
    helper.getDomElements.confirmBtn.classList.remove('disabled');
    helper.getDomElements.confirmBtn.removeAttribute("disabled", "disabled");
    return;
  }
  helper.getDomElements.confirmBtn.classList.add('disabled');
  helper.getDomElements.confirmBtn.setAttribute("disabled", "disabled");
}
//#endregion

//#region Confirm button action
helper.getDomElements.confirmBtn.addEventListener('click', submitAllInputs);

function submitAllInputs() {
  if (gatheringMethods.byClass('passed').length !== gatheringMethods.byTag('input').length) {
    disabledOrEnableConfirmBtn();
    return;
  }

  disabledOrEnableConfirmBtn('dis');
  helper.getDomElements.creditCardFormWrapper.classList.add('hideWrapper');
  helper.getDomElements.success.classList.add('showSuccess');
  setTimeout(() => {
    creditCardForm.style.display = "none";
  }, 900);
}

//#endregion

//#region ignore clicking Confirm button with Enter or Space
helper.getDomElements.confirmBtn.addEventListener('keydown', preventEnterAndSpaceClick);

function preventEnterAndSpaceClick() {
  if (event.keyCode === 13 || event.keyCode === 32) event.preventDefault();
}

//#endregion

//#region chech for valid card name && CVV
helper.getDomElements.cardName.addEventListener('input', () => validator(helper.regex.regName, helper.getDomElements.cardName));
helper.getDomElements.cvv.addEventListener('input', () => validator(helper.regex.regCVV, helper.getDomElements.cvv));

function validator(reg, inputField) {
  if (inputField.value === '' || (inputField.id === "cvv" && inputField.value.length < 3)) {
    return resetForEmptyImput(inputField);
  }

  inputField.value = inputField.value.toUpperCase();

  if (inputField.id === 'cardName') {
    if (helper.regex.twoNamesRegex.test(inputField.value)) {
      addOrRemoveError(reg, inputField);
    }
  } else { // inputField.id === 'cvv'
    addOrRemoveError(reg, inputField);
  }
}

//#endregion

//#region reset bools, confirm button and field borders if it's empty
function resetForEmptyImput(inputField) {
  helper.bools[inputField.id] = false;
  helper.getDomElements.confirmBtn.classList.add('disabled');
  helper.getDomElements.confirmBtn.setAttribute("disabled", "disabled");
  return removeBorderAndErrorMessage(inputField);
}

//#endregion

//#region add or remove error of input field
function addOrRemoveError(reg, inputField) {
  if (!reg.test(inputField.value)) {
    inputField.nextElementSibling.classList.remove('hidden');
    inputField.classList.add('error');
    inputField.classList.remove('passed');
    disabledOrEnableConfirmBtn();

    helper.getDomElements.confirmBtn.addEventListener('keydown', preventEnterAndSpaceClick);
    return;
  }

  inputField.nextElementSibling.classList.add('hidden');
  inputField.classList.remove('error');
  inputField.classList.add('passed');
  (inputField.id === 'cardName') ? helper.bools.cardName = true: helper.bools.cvv = true;
  if (helper.bools.cardName && helper.bools.cvv && helper.bools.cardNumber) enableConfirmButton();
}

//#endregion

//#region remove border and error message
function removeBorderAndErrorMessage(inputField) {
  inputField.classList.remove('error');
  inputField.classList.remove('passed');
  inputField.nextElementSibling.classList.add('hidden');
}

//#endregion

//#region enable Confirm Button
function enableConfirmButton() {
  disabledOrEnableConfirmBtn('dis');
  helper.getDomElements.confirmBtn.removeEventListener('keydown', preventEnterAndSpaceClick);
}

//#endregion

//#region add white spaces when typing in Card Number input field
function addWhiteSpaces(element) {
  if (element.value.length === 4) return element.value += ' ';
  if (element.value.length === 9) return element.value += ' ';
  if (element.value.length === 14) return element.value += ' ';
}

//#endregion

//#region card number validation
helper.getDomElements.cardNumber.addEventListener('keyup', cardValidationCheck);

function cardValidationCheck() {
  hideCardImages();
  doesCreditCardExist();
  checkWhichCardImage(helper.getDomElements.cardNumber.value);

  if (helper.getDomElements.cardNumber.value === '') {
    resetForEmptyImput(helper.getDomElements.cardNumber);
  }

  if (helper.getDomElements.cardNumber.value.length > 19) helper.getDomElements.cardNumber.value = helper.getDomElements.cardNumber.value.slice(0, 19);
  if (event.keyCode !== 8) addWhiteSpaces(helper.getDomElements.cardNumber);
  if (helper.getDomElements.cardNumber.value.length < 13) return removeBorderAndErrorMessage(helper.getDomElements.cardNumber);

  if (!luhnCheck(helper.getDomElements.cardNumber)) {
    helper.getDomElements.cardNumber.classList.add('error');
    helper.getDomElements.cardNumber.classList.remove('passed');
    disabledOrEnableConfirmBtn();

    helper.getDomElements.confirmBtn.addEventListener('keydown', preventEnterAndSpaceClick);
    helper.getDomElements.cardNumber.nextElementSibling.classList.remove('hidden');
    return;
  }

  helper.getDomElements.cardNumber.classList.remove('error');
  helper.getDomElements.cardNumber.classList.add('passed');
  helper.bools.cardNumber = true;
  helper.getDomElements.cardNumber.nextElementSibling.classList.add('hidden');
  if (helper.bools.cardName && helper.bools.cvv && helper.bools.cardNumber) enableConfirmButton();
}

//#endregion

//#region hide all card images
function hideCardImages() {
  helper.getDomElements.amexImg.classList.add('hidden');
  helper.getDomElements.masterImg.classList.add('hidden');
  helper.getDomElements.visaImg.classList.add('hidden');
}

//#endregion

//#region error message if credit card doesn't exist
function doesCreditCardExist() {
  const firstChar = helper.getDomElements.cardNumber.value[0];
  if (firstChar !== '3' && firstChar !== '4' && firstChar !== '5' && firstChar !== undefined) {
    return helper.getDomElements.cardNumber.nextElementSibling.nextElementSibling.classList.remove('hidden');
  } 
    helper.getDomElements.cardNumber.nextElementSibling.nextElementSibling.classList.add('hidden');
}

//#endregion

//#region show proper card image
function checkWhichCardImage(str) {
  if (str[0] === '3') return helper.getDomElements.amexImg.classList.remove('hidden');
  if (str[0] === '4') return helper.getDomElements.visaImg.classList.remove('hidden');
  if (str[0] === '5') return helper.getDomElements.masterImg.classList.remove('hidden');
}

//#endregion

//#region pated card number validation
helper.getDomElements.cardNumber.addEventListener('paste', pastedCardNumber);

function pastedCardNumber() {
  const clipboardData = event.clipboardData.getData('Text');
  setTimeout(() => {
    helper.getDomElements.cardNumber.value = '';
    this.value = clipboardData.match(/\d{4}/g).join(' ');
  }, 0);
}

//#endregion

//#region check if card number is divided by 10 without remainder
function luhnCheck(el) {
  if (el.value === '') return;

  const elValue = el.value.replace(/\s/g, '');
  if (elValue.length >= 12) {
    return elValue.split('').reduceRight((acc, value, index, arr) => {
      let newValue = +value;
      const indexation = arr.length - index;

      if (indexation && indexation % 2 === 0) {
        newValue = newValue * 2;
        if (newValue > 9) newValue -= 9;
      }
      return acc + newValue;
    }, 0) % 10 === 0;
  }
}

//#endregion

//#region year butotn action
helper.getDomElements.selectedYear.addEventListener('change', yearBtnClicked);

function yearBtnClicked() {
  disableOrEnableMonths(helper.getDomElements.selectedYear, helper.getDomElements.selectedMonth, helper.date.currentYear);
  if (helper.getDomElements.selectedYear.value === helper.date.currentYear) selectCurrentMonth();
}

//#endregion

//#region disable or enable previous months
function disableOrEnableMonths(yearSel, monthSel, currYear) {
  if (yearSel.value !== currYear) {
    const disabledOptionsArr = monthSel.children;

    for (const option of disabledOptionsArr) {
      if (option.disabled) {
        option.removeAttribute('disabled');
        option.disabled = false;
        continue;
      }

      break;
    }

    return;
  }

  disablePreviousMonthsOfCurrentYear();
}

//#endregion