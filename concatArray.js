const { template } = require('@babel/core')

function concatArray(array1, array2) {
  if (array1 == null && array2 == null) {
    return undefined
  } 
  if ( array1 === [] && array2 === []){
    return []  
  } 
  if ((array1 == null|| array2 == null) || (array1 == []|| array2 == []) ) {
    return array1??array2
  }
 return array1.concat(array2)
}

module.exports = concatArray
