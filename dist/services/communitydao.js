"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const event_details_1 = require("../models/event_details");
const constants_1 = require("../utils/constants");
dotenv.config();
class TournamentService {
    constructor(web3) {
        this.web3 = web3;
        this.community_dao_contract = new web3.eth.Contract(constants_1.COMMUNITYDAO_CONTRACT_ABI, constants_1.COMMUNITYDAO_CONTRACT_ADDRESS);
    }
    async transformCommunityDaoIssuedEvent(rawData) {
        let indexedParameters = [];
        let nonIndexedParameters = [];
        return new event_details_1.EventDetails(rawData.event, rawData.event.concat("Event"), constants_1.NETWORK, indexedParameters, nonIndexedParameters, rawData.transactionHash, rawData.logIndex, rawData.blockNumber, rawData.blockHash, rawData.address, "CONFIRMED", rawData.signature, constants_1.NETWORK, "log_" + rawData.signature);
    }
}
exports.default = TournamentService;
