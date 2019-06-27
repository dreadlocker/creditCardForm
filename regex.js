const regex = {
  regName: /^[A-Z]{3,}(-[A-Z]{3,})?\s[A-Z]{3,}(-[A-Z]{3,})?$/,
  regCVV: /^(\d{3,4})$/,
  twoNamesRegex: /.{3,}\s.{3,}/,
};

export default regex;