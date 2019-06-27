import disablePreviousMonthsOfCurrentYear from "./disablePreviousMonthsOfCurrentYear.js";
import selectCurrentMonth from "./selectCurrentMonth.js";
import selectCurrentYear from "./selectCurrentYear.js";
import eventListeners from "./eventListeners.js";

//#region initialize
const init = () => {
  disablePreviousMonthsOfCurrentYear();
  selectCurrentMonth();
  selectCurrentYear();
  eventListeners();
};
// //#endregion

export default init;