const arr = [1,2,3,"als"]

arr[1];

arr.push(3)

arr[1] = 4;

function f1(a) {
  a[0] = 7;
}

f1(arr)

console.log(arr)

const arr2 = arr;

arr[1] = 11;

console.log(arr2)