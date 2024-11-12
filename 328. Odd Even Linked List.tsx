1st loop connect 

1 to 3
node 2 is gone ?
loop to end size  and take last odd


1 to 3

2 to lastIndex 
last Index =2


/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function oddEvenList(head: ListNode | null): ListNode | null {
    let isOdd = true;
    let currentNode = head;
    let lastOddNode = null;
    let size = 0;
    while (currentNode != null) {
        if (isOdd) {
            lastOddNode = currentNode;
        }
        currentNode = currentNode.next;

        isOdd = !isOdd;

        size++;
    }
    console.log("size", size)
    console.log("lastOddNode", lastOddNode)
    let current = head;
    for (let i = 0; i < size; i++) {
        console.log("current", current)
        if (current && current?.next) {
            lastOddNode.next = current?.next;
            // lastOddNode = lastOddNode.next;
        console.log(" current.next",  current.next)
        console.log(" current?.next?.next",  current?.next?.next)

            current.next = current?.next?.next;
            current = current.next;
        }
    }
    return head;
};