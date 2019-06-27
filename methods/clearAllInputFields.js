import getDomElements from "../helper/getDomElements.js";

//#region empty all input fields
const clearAllInputFields = () => {
  getDomElements.cardName.value = '';
  getDomElements.cvv.value = '';
  getDomElements.cardNumber.value = '';
};
//#endregion

export default clearAllInputFields;