import getDomElements from "../helper/getDomElements.js";

//#region disabled Confirm button
const disabledOrEnableConfirmBtn = (option) => {
  if (option) {
    getDomElements.confirmBtn.classList.remove('disabled');
    getDomElements.confirmBtn.removeAttribute("disabled", "disabled");
    return;
  }
  getDomElements.confirmBtn.classList.add('disabled');
  getDomElements.confirmBtn.setAttribute("disabled", "disabled");
};
//#endregion

export default disabledOrEnableConfirmBtn;