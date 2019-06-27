import gatheringMethods from "../helper/gatheringMethods.js";
import disabledOrEnableConfirmBtn from "./disabledOrEnableConfirmBtn.js";
import getDomElements from "../helper/getDomElements.js";

//#region Confirm button action
const submitAllInputs = () => {
  if (gatheringMethods.byClass('passed').length !== gatheringMethods.byTag('input').length) {
    disabledOrEnableConfirmBtn();
    return;
  }

  disabledOrEnableConfirmBtn('dis');
  getDomElements.creditCardFormWrapper.classList.add('hideWrapper');
  getDomElements.success.classList.add('showSuccess');
  setTimeout(() => {
    creditCardForm.style.display = "none";
  }, 900);
};
//#endregion

export default submitAllInputs;