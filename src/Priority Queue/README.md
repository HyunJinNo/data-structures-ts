<h1>Priority Queue</h1>

<p>
  <b><i>Priority Queue</i></b> is an unbounded priority queue based on a priority heap.
</p>

## How to Use (Examples)
- **Declaration**
  ```ts
  // Increasing order
  // Input: 31 51 3 41 65 91
  // Output: 3 31 41 51 65 91
  const pq = new PriorityQueue<number>((a: number, b: number) => a - b);
  ```
  ```ts
  // Decreasing order
  // Input: 31 51 3 41 65 91
  // Output: 91 65 51 41 31 3
  const pq = new PriorityQueue<number>((a: number, b: number) => b - a);
  ```
- **Methods (Incresing order)**
  - **peek()**:
    Retrieves, but does not remove, the head of this priority queue
    or returns null if this priority queue is empty.

    Time Complexity: O(1)
    ```ts
    // [31, 51, 3, 41, 65, 91]
    const num: number = pq.peek(); // 3
    ```
  - **size()**:
    Returns the number of elements in this priority queue.

    Time Complexity: O(1)
    ```ts
    // [31, 51, 3, 41, 65, 91]
    const size: number = pq.size(); // 6
    ```
  - **isEmpty()**:
    Returns true if this priority queue contains no elements.

    Time Complexity: O(1)
    ```ts
    while (!pq.isEmpty()) {
      ...
    }
    ```
  - **enqueue(value: T)**:
    Inserts the specified element into this priority queue.

    Time Complexity: O(log N)
    ```ts
    // Before enqueue(): 3 31 41 51 65 91
    pq.enqueue(50);
    // After enqueue(): 3 31 41 (50) 51 65 91
    ```
  - **dequeue()**:
    Retrieves and removes the head of this priority queue.
    This methods throws an exception if this priority queue is empty.

    Time Complexity: O(log N)
    ```ts
    // Before dequeue(): [31, 51, 3, 41, 65, 91]
    const num: number = pq.dequeue(); // 3
    // After dequeue(): [31, 51, 41, 65, 91]
    ```
  - **clear()**:
    Removes all of the elements from this priority queue.
    The priority queue will be empty after this call returns.

    Time Complexity: O(1)
    ```ts
    // Before clear(): [31, 51, 3, 41, 65, 91]
    pq.clear();
    // After clear(): [31, 51, 3, 41, 65, 91]
    ```