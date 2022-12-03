export class Event {
  address: String;
  blockHash: String;
  blockNumber: Number;
  logIndex: Number;
  removed: Boolean;
  transactionHash: String;
  transactionIndex: Number;
  transactionLogIndex: String;
  type: String;
  id: String;
  returnValues: any;
  event: String;
  signature: String;
  raw: any;

  constructor(
    address: String,
    blockHash: String,
    blockNumber: Number,
    logIndex: Number,
    removed: Boolean,
    transactionHash: String,
    transactionIndex: Number,
    transactionLogIndex: String,
    type: String,
    id: String,
    returnValues: any,
    event: String,
    signature: String,
    raw: any
  ) {
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
