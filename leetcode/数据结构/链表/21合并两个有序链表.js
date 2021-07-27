/**
 *  function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

*/

// 递归法
var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  if (!l1 && !l2) return null;
  const pre = l1.val;
  const next = l2.val;
  let newHead;
  let res;
  if (pre <= next) {
    newHead = new ListNode(pre);
    res = mergeTwoLists(l1.next, l2);
  } else {
    newHead = new ListNode(next);
    res = mergeTwoLists(l1, l2.next);
  }
  newHead.next = res;
  return newHead;
};
