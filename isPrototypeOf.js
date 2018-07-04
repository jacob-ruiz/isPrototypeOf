// Main function
var isPrototypeOf = function(protoObj, instanceObj) {
  // check if instanceObj doesn't have a proto
  if (!Object.getPrototypeOf(instanceObj)) {
    return false;
  }
  var isEqual = Object.getPrototypeOf(instanceObj) === protoObj;

  if (isEqual) {
    // base case
    return isEqual;
  } else {
    // recursive case
    return isPrototypeOf(protoObj, Object.getPrototypeOf(instanceObj));
  }
}
