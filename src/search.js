/**
 * @param {Array} arr
 * @param {number} el
 */
function binarySearch(arr, el) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const item = arr[mid];

    console.log({ low, high, mid, item });

    if (item === el) {
      return mid;
    }

    if (item > el) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7));
