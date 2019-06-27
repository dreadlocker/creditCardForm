import getDomElements from "../helper/getDomElements.js";

//#region error message if credit card doesn't exist
const doesCreditCardExist = () => {
  const firstChar = getDomElements.cardNumber.value[0];
  if (firstChar !== '3' && firstChar !== '4' && firstChar !== '5' && firstChar !== undefined) {
    return getDomElements.cardNumber.nextElementSibling.nextElementSibling.classList.remove('hidden');
  }
  getDomElements.cardNumber.nextElementSibling.nextElementSibling.classList.add('hidden');
};
//#endregion

export default doesCreditCardExist;