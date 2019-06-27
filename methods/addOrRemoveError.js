import bools from "../helper/bools.js";
import disabledOrEnableConfirmBtn from "./disabledOrEnableConfirmBtn.js";
import preventEnterAndSpaceClick from "./preventEnterAndSpaceClick.js";
import enableConfirmButton from "./enableConfirmButton.js";
import getDomElements from "../helper/getDomElements.js";

//#region add or remove error of input field
const addOrRemoveError = (reg, inputField) => {
  if (!reg.test(inputField.value)) {
    inputField.nextElementSibling.classList.remove('hidden');
    inputField.classList.add('error');
    inputField.classList.remove('passed');
    disabledOrEnableConfirmBtn();

    getDomElements.confirmBtn.addEventListener('keydown', preventEnterAndSpaceClick);
    return;
  }

  inputField.nextElementSibling.classList.add('hidden');
  inputField.classList.remove('error');
  inputField.classList.add('passed');
  (inputField.id === 'cardName') ? bools.cardName = true: bools.cvv = true;
  if (bools.cardName && bools.cvv && bools.cardNumber) enableConfirmButton();
};
//#endregion

export default addOrRemoveError;