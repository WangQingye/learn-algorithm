function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let item = target - nums[i];
        let itemIndex = nums.indexOf(item);
        if (itemIndex !== -1 && itemIndex !== i) {
            return [i, itemIndex];
        }
    }
}

// indexOf 底层是线性查找，所以这里的实际运行速度还是On2。
// 所以最好的是模拟一个hash表（对象）

function twoSum1(nums, target) {
    let resultObj = {};
    for (let i = 0; i < nums.length; i++) {
        let item = target - nums[i];
        if (resultObj[item] == undefined) {
            resultObj[item] = i;
        }
    }
    for (let k = 0; k < nums.length; k++) {
        let item1 = nums[k];
        if (resultObj[item1] !== undefined && resultObj[item1] !== k) {
            return [k,resultObj[item1]];
        }
    }
}

console.log(twoSum1([3,3,3], 6));