import getDomElements from "../helper/getDomElements.js";
import resetAllInputs from "./resetAllInputs.js";
import submitAllInputs from "./submitAllInputs.js";
import preventEnterAndSpaceClick from "./preventEnterAndSpaceClick.js";
import cardValidationCheck from "./cardValidationCheck.js";
import pastedCardNumber from "./pastedCardNumber.js";
import yearBtnClicked from "./yearBtnClicked.js";
import validator from "./validator.js";
import regex from "../helper/regex.js";

//#region addEventListeners
const eventListeners = () => {
  getDomElements.clearBtn.addEventListener('click', resetAllInputs);
  getDomElements.confirmBtn.addEventListener('click', submitAllInputs);
  getDomElements.confirmBtn.addEventListener('keydown', preventEnterAndSpaceClick);
  getDomElements.cardNumber.addEventListener('keyup', cardValidationCheck);
  getDomElements.cardNumber.addEventListener('paste', pastedCardNumber);
  getDomElements.selectedYear.addEventListener('change', yearBtnClicked);
  getDomElements.cardName.addEventListener('input', () => validator(regex.regName, getDomElements.cardName));
  getDomElements.cvv.addEventListener('input', () => validator(regex.regCVV, getDomElements.cvv));
};
//#endregion

export default eventListeners;