function quickSort(arr) {
    // 递归停止的基准条件
    if (arr.length <= 1) {
        return arr;
    } else {
        let mid = arr[0];
        let smallArr = [];
        let bigArr = [];
        // 注意基准元素不再参与循环，否则可能产生死循环
        for (let index = 1; index < arr.length; index++) {
            let item = arr[index];
            if (item <= mid) {
                smallArr.push(item)
            } else {
                bigArr.push(item);
            }
        }
        return quickSort(smallArr).concat([mid]).concat(quickSort(bigArr));
    }
}

// 实现快速排序时，请随机地选择用作基准值的元素。快速排序的平均运行时间为O(n logn)
console.log(quickSort([3,4,5,2,1,6]));