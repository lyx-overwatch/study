/**
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *  给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 */

// 双指针法
var reverseList = function (head) {
  if (!head) return head;
  let pre = null;
  let cur = head;
  while (cur) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
};

// 递归法
var reverseList = function (head) {
  // 递归退出条件
  if (!head || !head.next) return head;
  // 我剩下的子节点已经是反转了的链表了
  const res = reverseList(head.next);
  // 现在就是我跟上面这个反转了的链表做反转，我的下一个节点应当指向我，比如 我目前是 1， 现在是1 -> 2, 反转链表的效果是 2 -> 1,所以 1.next.next = 1;
  head.next.next = head;
  // 我的下一个节点指向 null;
  head.next = null;
  return res;
};

/**
  reverseList: head=1 ---入栈
    reverseList: head=2 ---入栈
	    reverseList: head=3 ---入栈
		    reverseList:head=4 ---入栈
			    reverseList:head=5  ---入栈
					 |
          return 5  ---出栈
          5.next = null
				4.next.next->4，即5->4
        4.next = null  ---出栈
			3.next.next->3，即4->3
      3.next = null  ---出栈
		2.next.next->2，即3->2
    2.next = null  ---出栈
	1.next.next->1，即2->1
  1.next = null  ---出栈
 */
