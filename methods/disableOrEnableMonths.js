import disablePreviousMonthsOfCurrentYear from "./disablePreviousMonthsOfCurrentYear.js";

//#region disable or enable previous months
const disableOrEnableMonths = (yearSel, monthSel, currYear) => {
  if (yearSel.value !== currYear) {
    const disabledOptionsArr = monthSel.children;

    for (const option of disabledOptionsArr) {
      if (option.disabled) {
        option.removeAttribute('disabled');
        option.disabled = false;
        continue;
      }
      break;
    }
    return;
  }

  disablePreviousMonthsOfCurrentYear();
};
//#endregion

export default disableOrEnableMonths;