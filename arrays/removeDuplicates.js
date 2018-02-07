// Write a JavaScript function removeDuplicates that removes duplicate values fom an array.

function removeDuplicates(){
  var newAray = []
  for (var i = 0; i < arr.length; i++){
    if (newAray.indexOf(arr[i]) == -1) {
      newArray.push(arr[i])
    }
  }
  return newAray
}

// DO NOT DELETE
module.exports = removeDuplicates;
