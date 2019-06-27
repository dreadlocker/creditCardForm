import getDomElements from "../helper/getDomElements.js";
import date from "../helper/date.js";

//#region select current year on page load
const selectCurrentYear = () => {
  const HTMLOptionsCollectionArr = getDomElements.selectedYear.options;

  for (const option of HTMLOptionsCollectionArr) {
    if (option.value === date.currentYear) {
      option.selected = 'selected';
      break;
    }

    option.setAttribute('disabled', 'disabled');
  }
};
//#endregion

export default selectCurrentYear;