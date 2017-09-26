const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        let node = new Node(data);
        if (this.length) {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        } else {
            this._head = node;
            this._tail = node;
        }
        this.length++;
        return this;
    }

    head() {
        return this._head.data
    }

    tail() {
        return this._tail.data
    }

    at(index) {
        let currentNode = this._head;
        let loopIndex = 0;
        while (loopIndex != index) {
            currentNode = currentNode.next;
            loopIndex++;
        }
        return currentNode.data;
    }

    insertAt(index, data) {
        let newNode = new Node(data);
        let count = 0;
        let currentNode = this._head;
        while (count < index) {
            currentNode = currentNode.next;
            count++;
        }
        let beforeNode = currentNode.prev;
        if(!beforeNode && !currentNode.next){this._head = newNode;
            this._tail = newNode;  this.length++; return this;}
        newNode.next = beforeNode.next;
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        if (newNode.next != null)
            newNode.next.prev = newNode;
        this.length++;
        return this;
    }

    isEmpty() {
        if (this._head) {
            return false
        }
        return true

    }

    clear() {
        this.length = 0;
        this._head.data = null;
        this._tail.data = null;
        return this;
    }

    deleteAt(index) {
        let currentNode = this._head;
        let loopIndex = 0;
        let beforeNodeToDelete = null;
        let afterNodeToDelete = null;

        while (loopIndex != index) {
            currentNode = currentNode.next;
            loopIndex++;
        }
        beforeNodeToDelete = currentNode.prev;
        afterNodeToDelete = currentNode.next;
        if(!beforeNodeToDelete && !afterNodeToDelete ){ currentNode = null;return this;}
        beforeNodeToDelete.next = afterNodeToDelete;
        afterNodeToDelete.prev = beforeNodeToDelete;
        currentNode = null;
        this.length--;
        return this;
    }

    reverse() {
        this._tail = this._head;
        while (this._head != null) {
            let temp = this._head.next;
            this._head.next = this._head.prev;
            this._head.prev = temp;
            if (!temp) {
                break;
            }
            this._head = temp;
        }
        return this;
    }

    indexOf(value) {
        if (this._head.data) {
            let currentNode = this._head;
            let counter = 0;
            while (currentNode && currentNode.data !== value) {
                currentNode = currentNode.next;
                counter++;
            }
            if (counter === this.length) {
                return -1
            } else {
                return counter;
            }

        }


    }

}

module.exports = LinkedList;
