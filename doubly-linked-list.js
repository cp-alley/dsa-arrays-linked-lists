/** Node: node for a doubly linked list. */

class Node {
  val = null;
  next = null;
  prev = null;

  constructor(val, prev = null, next = null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }

}

class DoublyLinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** get(idx) returns a node at the given index */

  _get(idx) {
    if (idx >= this.length || idx < 0) throw new Error("Index is invalid");

    let i = 0;
    let current = this.head;

    while (i < this.length) {
      if (i === idx) return current.val;

      current = current.next;
      i++;
    }
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val, this.tail, null);
    if (this.head === null) this.head = newNode;
    if (this.tail !== null) this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val, null, this.head);
    if (this.tail === null) this.tail = newNode;
    if (this.head !== null) this.head.prev = newNode;
    this.head = newNode;
    this.length += 1;
  }

  /** pop(): remove last item & return its value */

  pop() {

  }

  /** shift(): remove first item & return its value */

  shift() {

  }

  /** getAt(idx): get val at idx.*/

  getAt(idx) {

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** return average (mean) of list values. */

  average() {

  }
}

module.exports = DoublyLinkedList;
