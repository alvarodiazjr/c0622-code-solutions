/* exported includes */
/*
- loop through the array.
- if any element in the array is equal to value return true,
- if not return false.
*/
function includes(array, value){
  for(var i = 0; i < array.length; i++){
    if(array[i] === value){
      return true;
    }
  }
  return false;
}
