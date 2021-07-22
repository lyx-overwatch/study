/**
 给定一个头结点为 head 的非空单链表，返回链表的中间结点。

如果有两个中间结点，则返回第二个中间结点。

 */

// 一般方法
var middleNode = function (head) {
  let ori = head;
  const len = getLength(head);
  let mid = Math.floor(len / 2);
  while (mid > 0) {
    ori = ori.next;
    mid--;
  }
  return ori;
};

const getLength = (head) => {
  let len = 0;
  while (head) {
    head = head.next;
    len++;
  }
  return len;
}

// 快慢指针法
var middleNode = function (head) {
  let slow = Object.assign({}, head);
  let fast = Object.assign({}, head);

  while (fast.next && fast.next.next) {
    // 慢指针走一步，快指针走两步
    slow = slow.next;
    fast = fast.next.next;
  }
  return fast.next ? slow.next : slow;
};