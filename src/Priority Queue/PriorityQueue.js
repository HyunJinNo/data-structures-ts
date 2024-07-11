/**
 * An unbounded priority queue based on a priority heap.
 */
export default class PriorityQueue {
  /**
   * @param {(a: T, b: T) => number} compareFn
   */
  constructor(compareFn) {
    this._compareFn = compareFn;
    this.heap = [];
    this._size = 0;
  }

  /**
   * Retrieves, but does not remove, the head of this priority queue
   * or returns null if this priority queue is empty.
   *
   * Time Complexity: O(1)
   * @returns {T} the head of this priority queue, or null if this priority queue is empty
   */
  peek = () => {
    if (this._size === 0) {
      return null;
    } else {
      return this.heap[0];
    }
  };

  /**
   * Returns the number of elements in this priority queue.
   *
   * Time Complexity: O(1)
   * @returns {number} the number of elements in this priority queue.
   */
  size = () => this._size;

  /**
   * Returns true if this priority queue contains no elements.
   *
   * Time Complexity: O(1)
   * @returns {boolean} true if this priority queue contains no elements
   */
  isEmpty = () => (this._size === 0 ? true : false);

  /**
   * Inserts the specified element into this priority queue.
   *
   * Time Complexity: O(log N)
   * @param {T} value the element to add
   */
  enqueue = (value) => {
    this._size++;
    this.heap = [...this.heap, value];
    this.bubbleUp();
  };

  bubbleUp = () => {
    let index = this._size - 1;
    const element = this.heap[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (this._compareFn(parent, element) > 0) {
        this.heap[parentIndex] = element;
        this.heap[index] = parent;
        index = parentIndex;
      } else {
        break;
      }
    }
  };

  /**
   * Retrieves and removes the head of this priority queue.
   * This methods throws an exception if this priority queue is empty.
   *
   * Time Complexity: O(log N)
   * @returns {T} the head of this priority queue
   */
  dequeue = () => {
    if (this._size === 0) {
      throw new Error("The deque is empty");
    } else {
      this._size--;
      const element = this.heap[0];
      const end = this.heap.pop();

      if (this._size > 0) {
        this.heap[0] = end;
        this.sinkDown();
      }

      return element;
    }
  };

  sinkDown = () => {
    let index = 0;
    const element = this.heap[index];

    while (true) {
      const left = index * 2 + 1;
      const right = index * 2 + 2;
      let leftChild = null;
      let rightChild = null;
      let swap = null;

      if (left < this._size) {
        leftChild = this.heap[left];
        if (this._compareFn(element, leftChild) > 0) {
          swap = left;
        }
      } else {
        break;
      }

      if (right < this._size) {
        rightChild = this.heap[right];
        if (swap === null) {
          if (this._compareFn(element, rightChild) > 0) {
            swap = right;
          }
        } else if (swap !== null) {
          if (this._compareFn(leftChild, rightChild) > 0) {
            swap = right;
          }
        }
      }

      if (swap === null) {
        break;
      } else {
        this.heap[index] = this.heap[swap];
        this.heap[swap] = element;
        index = swap;
      }
    }
  };

  /**
   * Removes all of the elements from this priority queue.
   * The priority queue will be empty after this call returns.
   *
   * Time Complexity: O(1)
   */
  clear = () => {
    this.heap = [];
    this._size = 0;
  };
}
