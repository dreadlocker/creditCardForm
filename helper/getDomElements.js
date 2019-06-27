import gatheringMethods from "./gatheringMethods.js";

const getDomElements = {
  selectedYear: gatheringMethods.byId('year'),
  selectedMonth: gatheringMethods.byId('month'),
  creditCardFormWrapper: gatheringMethods.byId('creditCardForm'),
  success: gatheringMethods.byId('success'),
  cardName: gatheringMethods.byId('cardName'),
  cvv: gatheringMethods.byId('cvv'),
  cardNumber: gatheringMethods.byId('cardNumber'),
  confirmBtn: gatheringMethods.byId('confirm'),
  clearBtn: gatheringMethods.byId('clear'),
  amexImg: gatheringMethods.byId('amex'),
  masterImg: gatheringMethods.byId('master'),
  visaImg: gatheringMethods.byId('visa'),
  allErrors: gatheringMethods.byClass('error'),
  allPassed: gatheringMethods.byClass('passed'),
  errorP: gatheringMethods.byClass('errorP'),
  creditCardChildren: gatheringMethods.byId('credit_cards').children,
}

export default getDomElements;