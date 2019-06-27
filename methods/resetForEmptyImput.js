import bools from "../helper/bools.js";
import getDomElements from "../helper/getDomElements.js";
import removeBorderAndErrorMessage from "./removeBorderAndErrorMessage.js";

//#region reset bools, confirm button and field borders if it's empty
const resetForEmptyImput = (inputField) => {
  bools[inputField.id] = false;
  getDomElements.confirmBtn.classList.add('disabled');
  getDomElements.confirmBtn.setAttribute("disabled", "disabled");
  return removeBorderAndErrorMessage(inputField);
};
//#endregion

export default resetForEmptyImput;