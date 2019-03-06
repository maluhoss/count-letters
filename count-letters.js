function countLetters(string){
  var splitStr = string.split(" ").join("");
  var object = {};


  for (var i = 0; i < splitStr.length ; i++) {

    if (object[splitStr[i]] === undefined){
    object[splitStr[i]] = 1
  }
  else {
    object[splitStr[i]] += 1
  }

  }
  return object;
}
