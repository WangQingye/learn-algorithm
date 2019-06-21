function search(arr, item) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] > item) {
            high = mid - 1;
        } else if (arr[mid] < item) {
            low = mid + 1;
        } else if (arr[mid] == item) {
            return mid;
        }
    }
    return -1;
}

console.log(search([1,2,3,4,5,6], 3));
console.log(search([1,2,3,4,5,6], 7));

// 复杂度 O(logN)