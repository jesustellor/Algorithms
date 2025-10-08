// this is a binary search algorithm that searches for a target value in a sorted array
function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] < target) {
      low = mid + 1;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      return mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6));

// in a list of 10 elements, the time complexity is O(log n)
// log base 2 10 = 2 to the power of what equals 10
// using the change of base formual, allows us to turn a logarithm to a different base, the formula is
// log base b (a) = ln(a) / ln(b)
// Using this formual our equation becomes
// x = ln(10) / ln(2)             x = 2.302585 / 0.693147 = 3.321928
// log base 2 10 = 3.321928 or approximately 3 computations to get to the target.
// 2^3.321928 = 10 or close to it

// ln(x) what power do i need to raise e to in order to get to x, where e = 2.718281828459045235 
// ln(x) = (e^y = x)
// still learning.

// ln(10) = 2.302585092994045684
// ln(2) = 0.693147180559945309
