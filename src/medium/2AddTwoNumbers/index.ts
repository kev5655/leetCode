class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let result = (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
    let rest = result >= 10 ? 1 : 0;
    let curr: ListNode | null = result >= 10 ? new ListNode(result - 10) : new ListNode(result);
    const listNode: ListNode | null = curr;

    let index = 0;
    while (l1 !== null || l2 !== null) {
        l1 = l1 !== null ? l1.next : null;
        l2 = l2 !== null ? l2.next : null;

        result = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + rest;
        if (l1 == null && l2 == null && result === 0) break;

        if (result >= 10) {
            rest = 1;
            curr.next = new ListNode(result - 10);
        } else {
            rest = 0;
            curr.next = new ListNode(result);
        }
        // console.log(listNode)

        curr = curr.next;
        index++;
        console.log(`${index}`);
        console.log(listNode);
        if (!(l1 !== null || l2 !== null) && rest !== 0) {
            curr.next = new ListNode(rest);
        }
    }

    return listNode;
}
// const l1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(5, new ListNode(6)))))
// const l2 = new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(5, new ListNode(6)))))

// const l1 = new ListNode(
//     9,
//     new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))),
// );
// const l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));

const l1 = new ListNode(0);
const l2 = new ListNode(0);

//[9,9,9,9,9,9,9], l2 = [9,9,9,9]
let result = addTwoNumbers(l1, l2);
console.log(
    `${result?.val} -> 
    ${result?.next?.val} -> 
    ${result?.next?.next?.val} -> 
    ${result?.next?.next?.next?.val} -> 
    ${result?.next?.next?.next?.next?.val} -> 
    ${result?.next?.next?.next?.next?.next?.val} -> 
    ${result?.next?.next?.next?.next?.next?.next?.val} ->
    ${result?.next?.next?.next?.next?.next?.next?.next?.val} ->
    ${result?.next?.next?.next?.next?.next?.next?.next?.next?.val} ->
    ${result?.next?.next?.next?.next?.next?.next?.next?.next?.next?.val}`,
);

// while(result !== null) {
//     console.log(result);
//     result = result.next
// }
