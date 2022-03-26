/**
 * Implement custom promise.all function which will take an array of promises and return a Promise after executing all Promises.
 * @author Rahul Sharma.
 */

const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.reject(3);

function customPromiseAll(arr) {
  const promisesArr = [];

  return new Promise((resolve, reject) => {
    for (let j = 0; j < arr.length; j++) {
      arr[j]
        .then((value) => {
          promisesArr.push(value);
          if (promisesArr.length === arr.length) {
            resolve();
          }
        })
        .catch(function (error) {
          reject(error);
        });
    }
  });
}

customPromiseAll([promise1, promise2, promise3])
  .then(() => {
    console.log('Passed');
  })
  .catch(() => {
    console.log('failed');
  });
