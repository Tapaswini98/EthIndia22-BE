"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventDetails = void 0;
class EventDetails {
    constructor(name, filterId, nodeName, indexedParameters, nonIndexedParameters, transactionHash, logIndex, blockNumber, blockHash, address, status, eventSpecificationSignature, networkName, id) {
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
exports.EventDetails = EventDetails;
