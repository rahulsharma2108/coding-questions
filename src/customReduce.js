/**
 * Custom reduce function implementation.
 * @author Rahul Sharma.
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const initVal = 0;

Array.prototype.customReduce = function (callbackFn, initvalue) {
  const arr = this;
  // console.log(arr);
  let prev, sum;

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      if (initvalue !== undefined) {
        prev = initvalue;
        current = arr[i];
      } else {
        prev = arr[i];
        current = arr[i + 1];
      }
    } else {
      prev = sum;
      current = arr[i];
    }
    sum = callbackFn(prev, current, i);
  }
  return sum;
};

const sumOfArr = arr.customReduce((prev, current) => {
  return prev + current;
}, initVal);
