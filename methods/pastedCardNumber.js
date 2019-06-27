import getDomElements from "../helper/getDomElements.js";

//#region pated card number validation
const pastedCardNumber = () => {
  const clipboardData = event.clipboardData.getData('Text');
  setTimeout(() => {
    getDomElements.cardNumber.value = '';
    getDomElements.cardNumber.value = clipboardData.match(/\d{4}/g).join(' ');
  }, 0);
};
//#endregion

export default pastedCardNumber;