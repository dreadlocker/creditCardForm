import disabledOrEnableConfirmBtn from "./disabledOrEnableConfirmBtn.js";
import preventEnterAndSpaceClick from "./preventEnterAndSpaceClick.js";
import getDomElements from "../helper/getDomElements.js";

//#region enable Confirm Button
const enableConfirmButton = () => {
  disabledOrEnableConfirmBtn('dis');
  getDomElements.confirmBtn.removeEventListener('keydown', preventEnterAndSpaceClick);
};
//#endregion

export default enableConfirmButton;