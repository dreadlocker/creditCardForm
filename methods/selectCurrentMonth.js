import getDomElements from "../helper/getDomElements.js";
import date from "../helper/date.js";

//#region select current month of current year on page load
const selectCurrentMonth = () => {
  return getDomElements.selectedMonth.options[date.currentMonth].selected = "selected";
};
//#endregion

export default selectCurrentMonth;