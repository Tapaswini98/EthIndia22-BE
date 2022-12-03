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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../config/logger"));
const redis = __importStar(require("./redis"));
const constants_1 = require("../utils/constants");
const transform_1 = require("./transform");
const RESYNC_EVENT = "RESYNC | EVNT: ";
class ReconService {
    constructor(communitydao_service, reviewer_service) {
        this.communitydao_service = communitydao_service;
        this.reviewer_service = reviewer_service;
    }
    resync(seconds) {
        setInterval(async () => {
            logger_1.default.debug(`NETWORK: ALL - ${RESYNC_EVENT} Resyncing in progress ....`);
            this.getEvents(this.communitydao_service, constants_1.COMMUNITYDAO_CONTRACT_ABI);
            this.getEvents(this.reviewer_service, constants_1.REVIEWER_ABI);
        }, seconds * 1000);
    }
    async getEvents(eventService, abi) {
        try {
            if (eventService.web3) {
                let latestBlock = await eventService.web3.eth.getBlockNumber();
                let storedLatestBlock = await redis.getCurrentBlock(constants_1.RECON_NETWORK_LATEST_BLOCK_NUMBER_KEY);
                logger_1.default.info(`NETWORK: ${constants_1.NETWORK} | ${RESYNC_EVENT} Resyncing from block ${storedLatestBlock}`);
                if (storedLatestBlock && storedLatestBlock < latestBlock) {
                    let events = await eventService.sync(storedLatestBlock, latestBlock);
                    events.forEach(async (event) => {
                        await (0, transform_1.transform)(event, abi, eventService.web3);
                    });
                }
                redis.setCurrentBlock(constants_1.RECON_NETWORK_LATEST_BLOCK_NUMBER_KEY, latestBlock);
                logger_1.default.info(`NETWORK: ${constants_1.NETWORK} | ${RESYNC_EVENT} Resynced to block ${latestBlock}`);
            }
        }
        catch (err) {
            logger_1.default.error(`NETWORK: ${constants_1.NETWORK} | EVNT: Error in ReconService | ${err}`);
            throw err;
        }
    }
}
exports.default = ReconService;
