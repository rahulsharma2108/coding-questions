const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.reject(3);

function checkPromises(arr) {
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

checkPromises([promise1, promise2, promise3])
  .then(() => {
    console.log('Passed');
  })
  .catch(() => {
    console.log('failed');
  });
