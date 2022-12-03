"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
class Event {
    constructor(address, blockHash, blockNumber, logIndex, removed, transactionHash, transactionIndex, transactionLogIndex, type, id, returnValues, event, signature, raw) {
        this.address = address;
        this.blockHash = blockHash;
        this.blockNumber = blockNumber;
        this.logIndex = logIndex;
        this.removed = removed;
        this.transactionHash = transactionHash;
        this.transactionIndex = transactionIndex;
        this.transactionLogIndex = transactionLogIndex;
        this.type = type;
        this.id = id;
        this.returnValues = returnValues;
        this.event = event;
        this.signature = signature;
        this.raw = raw;
    }
}
exports.Event = Event;
