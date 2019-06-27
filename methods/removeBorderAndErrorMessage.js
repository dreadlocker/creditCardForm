//#region remove border and error message
const removeBorderAndErrorMessage = (inputField) => {
inputField.classList.remove('error');
inputField.classList.remove('passed');
inputField.nextElementSibling.classList.add('hidden');
};
//#endregion

export default removeBorderAndErrorMessage;