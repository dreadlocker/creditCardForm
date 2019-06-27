const gatheringMethods = {
  byClass: className => document.getElementsByClassName(className),
  byId: id => document.getElementById(id),
  byTag: tag => document.getElementsByTagName(tag)
};

export default gatheringMethods;