import bools from "../helper/bools.js";

//#region reset helper booleans
const resetHelperBools = () => {
  bools.cardName = false;
  bools.cvv = false;
  bools.cardNumber = false;
};
//#endregion

export default resetHelperBools;