// this Algorithm is slow and inefficient when searching large arrays
function simpleSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return arr[i];
    }
  }
}

console.log(simpleSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9));

// in a list of 10 elements, the time complexity is O(n) linear
// in this case it would take it O(9) or 9 computations, n represents the number of loops in the algorithm
// O(n^2) if there is a nested loop, becasue the inner loops runs n times for each of the n itterations of the outer
// loop
// the bigger the list the longer it will take to find the target.
