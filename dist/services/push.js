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
exports.sendNotification = void 0;
const PushAPI = __importStar(require("@pushprotocol/restapi"));
const ethers = __importStar(require("ethers"));
const constants_1 = require("../utils/constants");
const key = constants_1.KEY; // channel private key
const Pkey = `0x${key}`;
const signer = new ethers.Wallet(Pkey);
const sendNotification = async (pushInput) => {
    try {
        console.log(constants_1.KEY, "PK");
        const apiResponse = await PushAPI.payloads.sendNotification({
            signer,
            type: 3,
            identityType: 2,
            notification: {
                title: pushInput.notification_title,
                body: pushInput.notification_body
            },
            payload: {
                title: pushInput.payload_title,
                body: pushInput.payload_body,
                cta: pushInput.payload_cta,
                img: pushInput.payload_img
            },
            recipients: `eip155:5:${pushInput.reciever}`,
            channel: `eip155:5:${constants_1.PUSH_CHANNEL_ADDRESS}`,
            env: 'staging'
        });
        // apiResponse?.status === 204, if sent successfully!
        console.log('API repsonse: ', apiResponse);
    }
    catch (err) {
        console.log('Error: ', err);
    }
};
exports.sendNotification = sendNotification;
