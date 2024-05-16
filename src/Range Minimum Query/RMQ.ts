export default class RMQ {
  private _size: number; // 배열의 길이
  private _rangeMin: Array<number>; // 각 구간의 최소치

  constructor(arr: Array<number>) {
    this._size = arr.length;
    this._rangeMin = Array<number>(this._size * 4);
    this.init(arr, 0, this._size - 1, 1);
  }

  /**
   * node 노드가 arr[left..right] 배열을 표현할 때
   * node를 루트로 하는 서브트리를 초기화하고, 이 구간의 최소치를 반환한다.
   * @param arr 배열
   * @param left 시작 인덱스
   * @param right 끝 인덱스
   * @param node 루트
   */
  private init = (
    arr: Array<number>,
    left: number,
    right: number,
    node: number
  ): number => {
    if (left === right) {
      this._rangeMin[node] = arr[left];
      return this._rangeMin[node];
    }

    const mid = Math.floor((left + right) / 2);
    const leftMin = this.init(arr, left, mid, node * 2);
    const rightMin = this.init(arr, mid + 1, right, node * 2 + 1);

    this._rangeMin[node] = Math.min(leftMin, rightMin);
    return this._rangeMin[node];
  };

  /**
   * node가 표현하는 범위 arr[nodeLeft..nodeRight]가 주어질 때,
   * 이 범위와 arr[left..right]의 교집합의 최소치를 구한다.
   */
  private _query = (
    left: number,
    right: number,
    node: number,
    nodeLeft: number,
    nodeRight: number
  ): number => {
    // 두 구간이 겹치지 않으면 아주 큰 값을 반환한다: 무시됨
    if (right < nodeLeft || nodeRight < left) {
      return Number.MAX_SAFE_INTEGER;
    }

    // node가 표현하는 범위가 arr[left..right]에 완전히 포함되는 경우
    if (left <= nodeLeft && nodeRight <= right) {
      return this._rangeMin[node];
    }

    // 양쪽 구간을 나눠서 푼 뒤 결과를 합친다.
    const mid = Math.floor((nodeLeft + nodeRight) / 2);
    return Math.min(
      this._query(left, right, node * 2, nodeLeft, mid),
      this._query(left, right, node * 2 + 1, mid + 1, nodeRight)
    );
  };

  /**
   * query()을 외부에서 호출하기 위한 인터페이스
   */
  public query = (left: number, right: number): number => {
    return this._query(left, right, 1, 0, this._size - 1);
  };

  /**
   * arr[index] = newValue로 바뀌었을 때 node를 루트로 하는
   * 구간 트리를 갱신하고 노드가 표현하는 구간의 최소치를 반환한다.
   * @param index
   * @param newValue
   * @param node
   * @param nodeLeft
   * @param nodeRight
   */
  private _update = (
    index: number,
    newValue: number,
    node: number,
    nodeLeft: number,
    nodeRight: number
  ): number => {
    // index가 노드가 표현하는 구간과 상관없는 경우엔 무시한다.
    if (index < nodeLeft || nodeRight < index) {
      return this._rangeMin[node];
    }

    // 트리의 leaf까지 내려온 경우
    if (nodeLeft === nodeRight) {
      this._rangeMin[node] = newValue;
      return newValue;
    }

    const mid = Math.floor((nodeLeft + nodeRight) / 2);
    return Math.min(
      this._update(index, newValue, node * 2, nodeLeft, mid),
      this._update(index, newValue, node * 2 + 1, mid + 1, nodeRight)
    );
  };

  /**
   * update()을 외부에서 호출하기 위한 인터페이스
   */
  public update = (index: number, newValue: number): number => {
    return this._update(index, newValue, 1, 0, this._size - 1);
  };
}
