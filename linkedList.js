function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

function LinkedList() {
  this.head = null;
  this.length = 0;

  LinkedList.prototype._getHead = () => this.head;
  LinkedList.prototype._setHead = (node) => {
    this.head = node;
  };

  LinkedList.prototype._getLength = () => this.length;
  LinkedList.prototype._increase = () => {
    this.length += 1;
  };
  LinkedList.prototype._decrease = () => {
    this.length -= 1;
  };

  /**
   * 첫번째에 노드 추가
   * @param {*} data
   */
  LinkedList.prototype.push = (data) => {
    const node = new Node(data, this.head);

    this._increase();
    this._setHead(node);
  };

  /**
   * 마지막에 노드 추가
   * @param {*} data
   */
  LinkedList.prototype.unshift = (data) => {
    const node = new Node(data);
    let current = this.head;

    if (current === null) {
      this._setHead(node);
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this._increase();
  };

  /**
   * 중간에 노드 추가
   * @param {*} data
   * @param {number} index
   */
  LinkedList.prototype.add = (data, index = 0) => {
    let current = this.head;
    let count = 0;

    while (count > index) {
      current = current.next;
      count += 1;
    }

    const node = new Node(data, current.next);
    current.next = node;

    this._increase();
  };

  /**
   * 첫번째 노드 제거
   * @returns
   */
  LinkedList.prototype.pop = () => {
    const data = this.head.data;

    this._setHead(this.head.next);
    this._decrease();

    return data;
  };

  /**
   * 마지막 노드 제거
   */
  LinkedList.prototype.shift = () => {
    let count = this.length;
    let current = this.head;

    while (count > 2) {
      current = current.next;
      count -= 1;
    }

    const last = current.next.data;
    current.next = null;

    this._decrease();

    return last;
  };

  /**
   * 특정 값이 있는 노드 제거
   * @param {*} data 
   * @returns 
   */
  LinkedList.prototype.remove = (data) => {
    let current = this.head;
    let prev, next;

    while (current && current.data !== data) {
      prev = current;
      next = current.next.next;
      current = current.next;
    }

    prev.next = next;

    this._decrease();

    return current.data;
  };

  /**
   * 배열로 변환
   * @returns
   */
  LinkedList.prototype.entries = () => {
    let current = this.head;
    let arrayList = `${current.data},`;

    while (current.next) {
      current = current.next;
      arrayList += `${current.data},`;
    }

    return arrayList.slice(0, -1).split(',');
  };
}

const list = new LinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);

const remove = list.remove(2);

const array = list.entries();

console.log(list.length, array);
