//#region check if card number is divided by 10 without remainder
const luhnCheck = (el) => {
  if (el.value === '') return;

  const elValue = el.value.replace(/\s/g, '');
  if (elValue.length >= 12) {
    return elValue.split('').reduceRight((acc, value, index, arr) => {
      let newValue = +value;
      const indexation = arr.length - index;

      if (indexation && indexation % 2 === 0) {
        newValue = newValue * 2;
        if (newValue > 9) newValue -= 9;
      }
      return acc + newValue;
    }, 0) % 10 === 0;
  }
};
//#endregion

export default luhnCheck;