import hideCardImages from "./hideCardImages.js";
import doesCreditCardExist from "./doesCreditCardExist.js";
import checkWhichCardImage from "./checkWhichCardImage.js";
import resetForEmptyImput from "./resetForEmptyImput.js";
import addWhiteSpaces from "./addWhiteSpaces.js";
import removeBorderAndErrorMessage from "./removeBorderAndErrorMessage.js";
import disabledOrEnableConfirmBtn from "./disabledOrEnableConfirmBtn.js";
import enableConfirmButton from "./enableConfirmButton.js";
import luhnCheck from "./luhnCheck.js";
import preventEnterAndSpaceClick from "./preventEnterAndSpaceClick.js";
import getDomElements from "../helper/getDomElements.js";
import bools from "../helper/bools.js";

//#region card number validation
const cardValidationCheck = () => {
  hideCardImages();
  doesCreditCardExist();
  checkWhichCardImage(getDomElements.cardNumber.value);

  if (getDomElements.cardNumber.value === '') {
    resetForEmptyImput(getDomElements.cardNumber);
  }

  if (getDomElements.cardNumber.value.length > 19) getDomElements.cardNumber.value = getDomElements.cardNumber.value.slice(0, 19);
  if (event.keyCode !== 8) addWhiteSpaces(getDomElements.cardNumber);
  if (getDomElements.cardNumber.value.length < 13) return removeBorderAndErrorMessage(getDomElements.cardNumber);

  if (!luhnCheck(getDomElements.cardNumber)) {
    getDomElements.cardNumber.classList.add('error');
    getDomElements.cardNumber.classList.remove('passed');
    disabledOrEnableConfirmBtn();

    getDomElements.confirmBtn.addEventListener('keydown', preventEnterAndSpaceClick);
    getDomElements.cardNumber.nextElementSibling.classList.remove('hidden');
    return;
  }

  getDomElements.cardNumber.classList.remove('error');
  getDomElements.cardNumber.classList.add('passed');
  bools.cardNumber = true;
  getDomElements.cardNumber.nextElementSibling.classList.add('hidden');
  if (bools.cardName && bools.cvv && bools.cardNumber) enableConfirmButton();
};
//#endregion

export default cardValidationCheck;