//#region ignore clicking Confirm button with Enter or Space
const preventEnterAndSpaceClick = () => {
  if (event.keyCode === 13 || event.keyCode === 32) event.preventDefault();
};
//#endregion

export default preventEnterAndSpaceClick;