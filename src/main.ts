import Deque from "./Deque";

const deque = new Deque<number>();
for (let x = 10; x <= 10; x++) {
  deque.addLast(x);
}

while (!deque.isEmpty()) {
  console.log(deque.removeFirst());
}
