/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let num1 = '',
        num2 = '',
        node1 = l1,
        node2 = l2;
    while (node1) {
        num1 += String(node1.val)
        node1 = node1.next
    }
    while (node2) {
        num2 += String(node2.val)
        node2 = node2.next
    }
    num1 = num1.split("").reverse().join("");
    num2 = num2.split("").reverse().join("");
    console.log('num1', num1);
    console.log('num2', num2);
    let num3 = Number(num1) + Number(num2);
    console.log('num3', num3);
    num3 = new Number(num3).toLocaleString().replace(/\,/g,"");
    let num3Arr = String(num3).split("").reverse();
    console.log('num3Arr', num3Arr);
    let i = num3Arr.length;
    let nodes = [];
    while (i >= 0) {
        let node = new ListNode(num3Arr[i - 1])
        if (nodes[i]) {
            node.next = nodes[i];
        }
        nodes[i - 1] = node;
        i--;
    }
    console.log(nodes[0]);
    return nodes[0];
};

function createNode(arr) {
    let nodesArr = [];
    for (let index = arr.length - 1; index >= 0; index--) {
        const element = arr[index];
        let node = new ListNode(element);
        if (nodesArr[index+1]) {
            node.next = nodesArr[index+1];
        }
        nodesArr[index] = node;
    }
    return nodesArr[0];
}
// let a = new ListNode(1);
// let b = new ListNode(0);
// let c = new ListNode(0);
// let g = new ListNode(0);
// let h = new ListNode(0);
// let i = new ListNode(0);
// let j = new ListNode(0);
// let k = new ListNode(0);
// let l = new ListNode(1);

// let d = new ListNode(4);
// let e = new ListNode(6);
// let f = new ListNode(5);
// a.next = b;
// b.next = c;
// c.next = g;
// g.next = h;
// h.next = i;
// i.next = j;
// j.next = k;
// k.next = l;



// d.next = e;
// e.next = f;
addTwoNumbers(createNode([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]),createNode([5,6,4]));