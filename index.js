var recipes = {};
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newObject = {};
  Object.assign(newObject, object);
  delete newObject[key];
  //console.log(newObject);
  //console.log(object);
  return newObject;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return object;
}
