
if (this._head.data) {
    let currentNode = this._head;
    let counter = 0;
    while (currentNode && currentNode.data !== value) {
        currentNode= currentNode.next;
        counter++;
        if (counter > this.length) {
            return -1
        }
    }
    return counter;

}