/**
 * Sort an array in javascript without using .sort()
 * @author Rahul Sharma.
 */

Array.prototype.customSort = function () {
    const arr = this;
    let sorted = false; // keep track if arr is sorted
    let i = 0; // index of element

    // keep looping until array is sorted
    while (!sorted) {
        sorted = true
        for (let i = 0; i < arr.length; i++) {
            // if current element is greater than next element
            if (arr[i] > arr[i + 1]) { 
                sorted = false;
                // replace values of i and i+1
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;                
            }
        }
    }
};
const arr = [6, 8, 2, 1, 6];
arr.customSort();
console.log(arr); // returns [ 1, 2, 6, 6, 8 ]