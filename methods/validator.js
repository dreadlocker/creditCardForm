import regex from "../regex.js";
import resetForEmptyImput from "./resetForEmptyImput.js";
import addOrRemoveError from "./addOrRemoveError.js";

//#region chech for valid card name && CVV
const validator = (reg, inputField) => {
  if (inputField.value === '' || (inputField.id === "cvv" && inputField.value.length < 3)) {
    return resetForEmptyImput(inputField);
  }

  inputField.value = inputField.value.toUpperCase();

  if (inputField.id === 'cardName') {
    if (regex.twoNamesRegex.test(inputField.value)) {
      addOrRemoveError(reg, inputField);
    }
  } else { // inputField.id === 'cvv'
    addOrRemoveError(reg, inputField);
  }
};
//#endregion

export default validator;