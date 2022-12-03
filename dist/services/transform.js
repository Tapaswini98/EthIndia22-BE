"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transform = void 0;
const logger_1 = __importDefault(require("../config/logger"));
const event_details_1 = require("../models/event_details");
const event_value_type_1 = require("../models/event_value_type");
const constants_1 = require("../utils/constants");
const event_structure_1 = require("../models/event_structure");
const push_1 = require("./push");
const transform = async (rawData, abi, web3) => {
    let eventDetails;
    if (rawData.event == 'TournamentIssued') {
        eventDetails = await transformCommunityDaoIssuedEvent(rawData);
        console.log(eventDetails, "eventDetails");
        (0, push_1.sendNotification)({
            reciever: eventDetails.address,
            notification_title: 'Title',
            notification_body: 'Body',
            payload_title: '',
            payload_body: 'body',
            payload_cta: '',
            payload_img: ''
        });
    }
    else {
        let eventStructure = new event_structure_1.EventStructure(abi.find((object) => object.name === rawData.event));
        let indexedParameters = [];
        let nonIndexedParameters = [];
        eventStructure === null || eventStructure === void 0 ? void 0 : eventStructure.inputs.forEach((element) => {
            if (element.indexed)
                indexedParameters.push(new event_value_type_1.EventValueType(element.type, rawData.returnValues[element.name]));
            else
                nonIndexedParameters.push(new event_value_type_1.EventValueType(element.type, rawData.returnValues[element.name]));
        });
        eventDetails = new event_details_1.EventDetails(rawData.event, rawData.event.concat("Event"), constants_1.NETWORK, indexedParameters, nonIndexedParameters, rawData.transactionHash, rawData.logIndex, rawData.blockNumber, rawData.blockHash, rawData.address, "CONFIRMED", rawData.signature, constants_1.NETWORK, "log_" + rawData.signature);
    }
    logger_1.default.info(`NETWORK: ${constants_1.NETWORK} | SERVICE: TransformService | EVNT: Event Transformed | `, eventDetails);
};
exports.transform = transform;
function transformCommunityDaoIssuedEvent(rawData) {
    throw new Error("Function not implemented.");
}
