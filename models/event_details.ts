import { EventValueType } from "./event_value_type";

export class EventDetails {
    name: String;
    filterId: String;
    nodeName: String;
    indexedParameters: Array<EventValueType>;
    nonIndexedParameters: Array<EventValueType>;
    transactionHash: String;
    logIndex: Number;
    blockNumber: Number;
    blockHash: String;
    address: String;
    status: String;
    eventSpecificationSignature: String;
    networkName: String;
    id: String;
  
    constructor(
      name: String,
      filterId: String,
      nodeName: String,
      indexedParameters: Array<EventValueType>,
      nonIndexedParameters: Array<EventValueType>,
      transactionHash: String,
      logIndex: Number,
      blockNumber: Number,
      blockHash: String,
      address: String,
      status: String,
      eventSpecificationSignature: String,
      networkName: String,
      id: String
    ) {
      this.name = name;
      this.filterId = filterId;
      this.nodeName = nodeName;
      this.indexedParameters = indexedParameters;
      this.nonIndexedParameters = nonIndexedParameters;
      this.transactionHash = transactionHash;
      this.logIndex = logIndex;
      this.blockNumber = blockNumber;
      this.blockHash = blockHash;
      this.address = address;
      this.status = status;
      this.eventSpecificationSignature = eventSpecificationSignature;
      this.networkName = networkName;
      this.id = id;
    }
}