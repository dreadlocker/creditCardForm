import getDomElements from "../helper/getDomElements.js";

//#region clear all input fields styles
const clearAllErroPassedMessages = () => {
  const allErrorsArr = Array.from(getDomElements.allErrors);
  const allPassedArr = Array.from(getDomElements.allPassed);
  const errorPArr = Array.from(getDomElements.errorP);
  const creditCardChildren = Array.from(getDomElements.creditCardChildren);

  for (const iterator of allErrorsArr) iterator.classList.remove('error');
  for (const iterator of allPassedArr) iterator.classList.remove('passed');
  for (const iterator of errorPArr) iterator.classList.add('hidden');
  for (const iterator of creditCardChildren) iterator.classList.add('hidden');
};
//#endregion

export default clearAllErroPassedMessages;