import disableOrEnableMonths from "./disableOrEnableMonths.js";
import selectCurrentMonth from "./selectCurrentMonth.js";
import getDomElements from "../helper/getDomElements.js";
import date from "../helper/date.js";

//#region year butotn action
const yearBtnClicked = () => {
  disableOrEnableMonths(getDomElements.selectedYear, getDomElements.selectedMonth, date.currentYear);
  if (getDomElements.selectedYear.value === date.currentYear) selectCurrentMonth();
};
//#endregion

export default yearBtnClicked;