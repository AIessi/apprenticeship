import Node from './node,js';

export default class LinkedList {
    constructor() {
        this.listHead = null;
    }

    prepend(data) {
        let tmp  = null;
        if(this.listHead != null) tmp = this.listHead;
        this.listHead = new Node(data);
        this.listHead.nextNode = tmp;
    }

    append(data) {
        if(this.listHead == null) this.prepend(data);
        else {
            let tmp = this.listHead;
            while(tmp.nextNode != null) tmp = tmp.nextNode;
            tmp.nextNode = new Node(data);
        }
    }

    size() {
        let tmp = this.listHead;
        let counter = 0;
        while(tmp != null) {
            counter++;
            tmp = tmp.nextNode;
        }
        return counter;
    }

    head() {
        return this.listHead;
    }

    tail() {
        let tmp = this.listHead;
        while(tmp.nextNOde != null) tmp = tmp.nextNode;
        return tmp;
    }

    at(index) {
        let tmp = this.listHead;
        for(let i = 0; i < index; i++) {
            tmp = tmp.nextNode;
            if(tmp == null) return "There is no item for this index";
        }
        return tmp;
    }

    pop() {
        let cur = this.listHead;
        let prev = null;
        while(cur.nextNode != null) {
            prev = cur;
            cur = cur.nextNode;
        }
        prev.nextNode = null;
    }

    contains(value) {
        let tmp = this.listHead;
        while(tmp != null) {
            if(tmp.data === value) return true;
            tmp = tmp.nextNode;
        }
        return false;
    }

    find(value) {
        let tmp = this.listHead;
        let index = 0;
        while(tmp != null) {
            if(tmp.data === value) return index;
            tmp = tmp.nextNode;
            index++;
        }
        return value;
    }

    toString() {
        let tmp = this.listHead;
        let stringlist = "";
        while(tmp != null) {
            stringList += `(${tmp.value}) -> `;
            tmp = tmp.nextNode;
        }
        return (stringList += "null");
    }
}
