//#region animation
const creditCardFormWrapper = document.getElementById('creditCardForm');
const success = document.getElementById('success');

//#region get 3 input fields
const cardName = document.getElementById('owner');
const cvv = document.getElementById('cvv');
const cardNumber = document.getElementById('cardNumber');
//#endregion

//#region Clear button action
const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', clearAllInputs);

function clearAllInputs() {
  cardName.value = '';
  cvv.value = '';
  cardNumber.value = '';
  const allErrorsArr = Array.from(document.getElementsByClassName('error'));
  const allPassedArr = Array.from(document.getElementsByClassName('passed'));
  const errorPArr = Array.from(document.getElementsByClassName('errorP'));
  const credit_cardsChildren = Array.from(document.getElementById('credit_cards').children);

  for (const iterator of allErrorsArr) iterator.classList.remove('error');
  for (const iterator of allPassedArr) iterator.classList.remove('passed');
  for (const iterator of errorPArr) iterator.classList.add('hidden');
  for (const iterator of credit_cardsChildren) iterator.classList.add('hidden');

  cardNameBool = false;
  cvvBool = false;
  cardNumberBool = false;
  dateBool = false;
  confirmBtn.classList.add('disabled');
}
//#endregion

//#region Confirm button action
const confirmBtn = document.getElementById('confirm');
confirmBtn.addEventListener('click', submitAllInputs);

function submitAllInputs() {
  creditCardFormWrapper.classList.add('hideWrapper');
  success.classList.add('showSuccess');
  setTimeout(() => {
    creditCardForm.style.display = "none";
  }, 900);
}
//#endregion
//#endregion

//#region chech for valid card name && CVV
const regName = /^[A-Z]{3,}\s[A-Z]{3,}$/;
const regcvv = /^(\d{3,4})$/;
cardName.addEventListener('input', () => validator(regName, cardName));
cvv.addEventListener('input', () => validator(regcvv, cvv));

function validator(reg, inputField) {
  if (!reg.test(inputField.value)) {
    inputField.nextElementSibling.classList.remove('hidden');
    inputField.classList.add('error');
    inputField.classList.remove('passed');
    confirmBtn.classList.add('disabled');
  } else {
    inputField.nextElementSibling.classList.add('hidden');
    inputField.classList.remove('error');
    inputField.classList.add('passed');
    (inputField.id === 'owner') ? cardNameBool = true: cvvBool = true;
    if (cardNameBool && cvvBool && cardNumberBool && dateBool) confirmBtn.classList.remove('disabled');
  }
}
//#endregion

//#region card bools
let cardNameBool = false;
let cvvBool = false;
let cardNumberBool = false;
let dateBool = false;
//#endregion

//#region card Images
const allImages = document.getElementsByClassName('images');
const amexImg = document.getElementById('amex');
const masterImg = document.getElementById('master');
const visaImg = document.getElementById('visa');
//#endregion

//#region add white spaces when typing in Card Number input field
function addWhiteSpaces(element) {
  if (element.value.length === 4) return element.value += ' ';
  if (element.value.length === 9) return element.value += ' ';
  if (element.value.length === 14) return element.value += ' ';
}
//#endregion

//#region show proper card image
function checkWhichCardImage(str) {
  if (str[0] === '3') amexImg.classList.remove('hidden');
  if (str[0] === '4') visaImg.classList.remove('hidden');
  if (str[0] === '5') masterImg.classList.remove('hidden');
}
//#endregion

//#region card number validation
cardNumber.addEventListener('input', cardValidationCheck);
function cardValidationCheck() {
  amexImg.classList.add('hidden');
  masterImg.classList.add('hidden');
  visaImg.classList.add('hidden');
  
  addWhiteSpaces(cardNumber);
  checkWhichCardImage(cardNumber.value);

  if (!luhnCheck(cardNumber)) {
    cardNumber.classList.add('error');
    cardNumber.classList.remove('passed');
    confirmBtn.classList.add('disabled');
    return;
  }

  cardNumber.classList.remove('error');
  cardNumber.classList.add('passed');
  cardNumberBool = true;
  if (cardNameBool && cvvBool && cardNumberBool && dateBool) confirmBtn.classList.remove('disabled');
}
//#endregion

//#region pated card number validation
cardNumber.addEventListener('paste', pastedCardNumber);
function pastedCardNumber() {
  const clipboardData = event.clipboardData.getData('Text');
  setTimeout(() => {
    cardNumber.value = '';
    this.value = clipboardData.match(/\d{4}/g).join(' ');
  }, 0);
}
//#endregion

//#region check if card number is divided by 10 without remainder
function luhnCheck(el) {
  if (el.value === '') return;

  const elValue = el.value.replace(/\s/g, '')
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

//#region chech for valid date
const expirationDate = document.getElementById('expiration-date');
expirationDate.addEventListener('click', validationDate);

function validationDate() {
  const selectedMonth = document.getElementById('month');
  const selectedYear = document.getElementById('year');
  const getCurrentMounth = new Date().getMonth();
  const currentMonth = (getCurrentMounth.toString().length === 1) ? `0${getCurrentMounth + 1}` : getCurrentMounth + 1;
  const currentYear = new Date().getFullYear();
  const currentMilliseconds = (new Date(`${currentMonth}/01//${currentYear}`).getTime());
  const selectedMilliseconds = (new Date(`${selectedMonth.value}/01//${selectedYear.value}`).getTime());
  const nextFiveYearsInMilliseconds = 159168240000;
  const dateDifference = selectedMilliseconds - currentMilliseconds;
  if (dateDifference < 0 || dateDifference >= nextFiveYearsInMilliseconds) {
    selectedMonth.classList.add('error');
    selectedYear.classList.add('error');
    selectedMonth.classList.remove('passed');
    selectedYear.classList.remove('passed');
    confirmBtn.classList.add('disabled');
    return;
  }
  selectedMonth.classList.remove('error');
  selectedYear.classList.remove('error');
  selectedMonth.classList.add('passed');
  selectedYear.classList.add('passed');
  dateBool = true;
  if (cardNameBool && cvvBool && cardNumberBool && dateBool) confirmBtn.classList.remove('disabled');
}
//#endregion