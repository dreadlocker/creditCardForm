import clearAllInputFields from "./clearAllInputFields.js";
import clearAllErroPassedMessages from "./clearAllErroPassedMessages.js";
import disablePreviousMonthsOfCurrentYear from "./disablePreviousMonthsOfCurrentYear.js";
import selectCurrentYear from "./selectCurrentYear.js";
import resetHelperBools from "./resetHelperBools.js";
import disabledOrEnableConfirmBtn from "./disabledOrEnableConfirmBtn.js";
import preventEnterAndSpaceClick from "./preventEnterAndSpaceClick.js";
import getDomElements from "../helper/getDomElements.js";

//#region Clear button action
const resetAllInputs = () => {
  clearAllInputFields();
  clearAllErroPassedMessages();
  disablePreviousMonthsOfCurrentYear();
  selectCurrentYear();
  resetHelperBools();
  disabledOrEnableConfirmBtn();

  getDomElements.confirmBtn.addEventListener('keydown', preventEnterAndSpaceClick);
};
//#endregion

export default resetAllInputs;