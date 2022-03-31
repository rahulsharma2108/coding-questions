/**
 * Reverse an array
 * @author Rahul Sharma.
 */

// Inputs => Outputs
// ['a', 'b', 'c', 'd', 'e'] => ['e','d','c','b','a']

const arr = ['a', 'b', 'c', 'd', 'e'];

function reverseArr(data) {
  const arr = [...data];
  let firstIndex = 0;
  let lastIndex = arr.length - 1;
  while (firstIndex < lastIndex) {
    const temp = arr[firstIndex];
    arr[firstIndex] = arr[lastIndex];
    arr[lastIndex] = temp;
    firstIndex++;
    lastIndex--;
  }
  return arr;
}
reverseArr(arr);
