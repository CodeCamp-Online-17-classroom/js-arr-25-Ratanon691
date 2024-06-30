const inventory = [
  { name: 'apples', quantity: 2 },
  { name: 'bananas', quantity: 0 },
  { name: 'cherries', quantity: 5 }
];
function searchForCherries(arr, searchName) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === searchName) {
      console.log(arr[i])
      return
    }
  }
  console.log(`There is no ${searchName} in the inventory`)
}


