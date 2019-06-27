import getDomElements from "../helper/getDomElements.js";

//#region show proper card image
const checkWhichCardImage = (str) => {
  if (str[0] === '3') return getDomElements.amexImg.classList.remove('hidden');
  if (str[0] === '4') return getDomElements.visaImg.classList.remove('hidden');
  if (str[0] === '5') return getDomElements.masterImg.classList.remove('hidden');
};
//#endregion

export default checkWhichCardImage;