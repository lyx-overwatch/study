/**
 * 
 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 */

var removeNthFromEnd = function (head, n) {
  if (n === 1 && head.next === null) return null;
  let left = head;
  let right = Object.assign({}, head);
  while (n > 0 && right) {
    right = right.next;
    n--;
  }
  // 右指针右移n次为空，说明删除的是头结点
  if (!right) return head.next;
  while (right.next) {
    right = right.next;
    left = left.next;
  }
  left.next = left.next.next;
  return head;
};