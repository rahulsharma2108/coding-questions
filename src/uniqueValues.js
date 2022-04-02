function findUniqueElements(arr){
    const newSet = new Set(arr);
    return Array.from(newSet);
  }
  
  findUniqueElements([2,3,5,2,3])
  
  function findUniqueElementsWithoutSet(arr){
    const uniqueArr = [];
    for(let i=0; i < arr.length; i++){
      if(uniqueArr.indexOf(arr[i]) === -1){
        uniqueArr.push(arr[i])
      }
    }
    return uniqueArr
  }
  findUniqueElementsWithoutSet([2,3,5,2,3])