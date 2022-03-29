// find second smallest number

function findSecondSmallest(arr) {
  let smallest = Number.MAX_VALUE;
  let secondSmallest = Number.MAX_VALUE;

  for (let i = 0; i < arr.length; i++) {
    const currentValue = arr[i];
    if (currentValue < smallest) {
      secondSmallest = smallest;
      smallest = currentValue;
    }
    if (currentValue > smallest && currentValue < secondSmallest) {
      secondSmallest = currentValue;
    }
  }
  return secondSmallest;
}

console.log(findSecondSmallest([5, 6, 4, 1, -1]));
