import getDomElements from "../helper/getDomElements.js";
import date from "../helper/date.js";

//#region disable previous months of current year
const disablePreviousMonthsOfCurrentYear = () => {
  const HTMLOptionsCollectionArr = getDomElements.selectedMonth.options;
  for (const option of HTMLOptionsCollectionArr) {
    if (option.value === date.currentMonth) {
      break;
    }

    option.setAttribute('disabled', 'disabled');
  }
};
//#endregion

export default disablePreviousMonthsOfCurrentYear;