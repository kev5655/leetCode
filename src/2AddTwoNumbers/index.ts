

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
 }
 

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let listNode: ListNode | null = null;
    let rest = 0;

    while(l1 !== null || l2 !== null){
        const result = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + rest;

        if(result >= 10) {
            rest = 1
            listNode = (listNode === null) ? new ListNode(result - 10) :  new ListNode(result -10, listNode)
        } else {
            rest = 0
            listNode = (listNode === null) ? new ListNode(result) :  new ListNode(result, listNode)
        }
        // console.log(listNode)

        l1 = (l1 !== null) ? l1.next : null;
        l2 = (l2 !== null) ? l2.next : null;

        if(!(l1 !== null || l2 !== null) && rest !== 0) {
            listNode = (listNode === null) ? new ListNode(rest) :  new ListNode(rest, listNode)
        }
        
    }
    let temp = null
    let result = new ListNode(listNode?.val)
    do {
        temp = listNode?.val
        result = new ListNode(temp, result)
    } while(temp !== null)

    return result;
};
// const l1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(5, new ListNode(6)))))
// const l2 = new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(5, new ListNode(6)))))

const l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))))
const l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))

//[9,9,9,9,9,9,9], l2 = [9,9,9,9]
let result = addTwoNumbers(l1, l2)
while(result !== null) {
    console.log(result.val);
    result = result.next
}