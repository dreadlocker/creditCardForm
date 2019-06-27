import getDomElements from "../helper/getDomElements.js";

//#region hide all card images
const hideCardImages = () => {
  getDomElements.amexImg.classList.add('hidden');
  getDomElements.masterImg.classList.add('hidden');
  getDomElements.visaImg.classList.add('hidden');
};
//#endregion

export default hideCardImages;