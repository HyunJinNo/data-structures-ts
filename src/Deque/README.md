<h1>Deque</h1>

<p>
  <b><i>Deque</i></b> is a linear collection that supports element insertion and removal at both ends. The name deque is short for "double ended queue" and is usually pronounced "deck".
</p>

## How to Use (Examples)
- **Declaration**
  ```ts
  const deque = new Deque<number>();
  ```
- <b>Methods</b>
  - **getFirst()**:
    Retrieves, but does not remove, the first element of this deque.
    This method differs from peekFirst( ) only in that it throws an exception
    if this deque is empty.
      
    Time Complexity: O(1)
    ```ts
    // [10, 20, 30, 40, 50]
    const firstNum: number = deque.getFirst(); // 10
    ```
  - **getLast()**:
    Retrieves, but does not remove, the last element of this deque.
    This method differs from peekLast( ) only in that it throws an exception
    if this deque is empty.

    Time Complexity: O(1)
    ```ts
    // [10, 20, 30, 40, 50]
    const lastNum: number = deque.getLast(); // 50
    ```
  - **peekFirst()**:
    Retrieves, but does not remove, the first element of this deque,
    or returns null if this deque is empty.

    Time Complexity: O(1)
    ```ts
    // [10, 20, 30, 40, 50]
    const firstNum: number = deque.peekFirst(); // 10
    ```
  - **peekLast()**:
    Retrieves, but does not remove, the last element of this deque,
    or returns null if this deque is empty.

    Time Complexity: O(1)
    ```ts
    // [10, 20, 30, 40, 50]
    const lastNum: number = deque.peekLast(); // 50
    ```
  - **size()**:
    Returns the number of elements in this deque.

    Time Complexity: O(1)
    ```ts
    // [10, 20, 30, 40, 50]
    const size: number = deque.size(); // 5
    ```
  - **isEmpty()**:
    Returns true if this deque contains no elements.

    Time Complexity: O(1)
    ```ts
    // [10, 20, 30, 40, 50]
    while (!deque.isEmpty()) {
      ...
    }
    ```
  - **addFirst(value: T)**:
    Inserts the specified element at the front of this deque.

    Time Complexity: O(1)
    ```ts
    // Before addFirst(): [20, 30, 40, 50]
    deque.addFirst(10);
    // After addFirst(): [10, 20, 30, 40, 50]
    ```
  - **addLast(value: T)**:
    Inserts the specified element at the end of this deque.

    Time Complexity: O(1)
    ```ts
    // Before addLast(): [10, 20, 30, 40]
    deque.addLast(50);
    // After addLast(): [10, 20, 30, 40, 50]
    ```
  - **removeFirst()**:
    Retrieves and removes the first element of this deque.
    This method throws an exception if this deque is empty.

    Time Complexity: O(1)
    ```ts
    // Before removeFirst(): [10, 20, 30, 40, 50]
    const firstNum: number = deque.removeFirst(); // 10
    // After removeFirst(): [20, 30, 40, 50]
    ```
  - **removeLast()**:
    Retrieves and removes the last element of this deque.
    This methods throws an exception if this deque is empty.

    Time Complexity: O(1)
    ```ts
    // Before removeLast(): [10, 20, 30, 40, 50]
    const lastNum: number = deque.removeLast(); // 50
    // After removeLast(): [10, 20, 30, 40]
    ```
  - **clear()**:
    Removes all of the elements from this deque.
    The deque will be empty after this call returns.

    Time Complexity: O(1)
    ```ts
    // Before clear(): [10, 20, 30, 40, 50]
    deque.clear();
    // After clear(): []
    ```