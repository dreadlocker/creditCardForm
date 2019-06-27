//#region add white spaces when typing in Card Number input field
const addWhiteSpaces = (element) => {
if (element.value.length === 4) return element.value += ' ';
if (element.value.length === 9) return element.value += ' ';
if (element.value.length === 14) return element.value += ' ';
};
//#endregion

export default addWhiteSpaces;