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
// Import web3 related items
const web3_1 = __importDefault(require("web3"));
// Import current MODE from constants
const constants_1 = require("./constants");
// Import required custom services
const event_1 = __importDefault(require("../services/event"));
const redis = __importStar(require("../services/redis"));
// Impport logger
const logger_1 = __importDefault(require("../config/logger"));
class EventListener {
    constructor(web3URI, contractABI, contractAddress) {
        try {
            let web3;
            let contract;
            if (web3URI !== undefined) {
                web3 = new web3_1.default(new web3_1.default.providers.HttpProvider(web3URI, {}));
                if (contractAddress !== undefined) {
                    contract = new web3.eth.Contract(contractABI, contractAddress);
                }
                else {
                    throw Error("Contract Address not defined. Exiting...");
                }
                this.contractABI = contractABI;
                this.event_service = new event_1.default(web3, contract);
            }
            else {
                throw Error("Node RPC URL not defined. Exiting...");
            }
        }
        catch (err) {
            logger_1.default.error(`NETWORK: ${constants_1.NETWORK} | SERVICE: EventListener.constructor() | ERR: ${err}`);
            process.exit(1);
        }
    }
    // To be used when listener mode is WSS i.e. useHttps = false
    async listen() {
        try {
            let latestBlock = await this.event_service.web3.eth.getBlockNumber();
            let storedLatestBlock = await redis.getCurrentBlock(constants_1.NETWORK_LATEST_BLOCK_NUMBER_KEY);
            if (storedLatestBlock && storedLatestBlock < latestBlock) {
            }
            this.event_service
                .watch()
                .on("data", async (event) => {
            })
                .on("error", (err) => {
                throw err;
            });
            this.event_service.newBlock().on("data", async (block) => {
                await redis.setCurrentBlock(constants_1.NETWORK_LATEST_BLOCK_NUMBER_KEY, block.number);
            });
        }
        catch (err) {
            logger_1.default.error(`NETWORK: ${constants_1.NETWORK} | SERVICE: EventListener.listen() | ERR: ${err}`);
            process.exit(1);
        }
    }
    // To be used when listener mode is HTTPS i.e. useHttps = true
    async listenOnHttps(interval = 5000) {
        try {
            setInterval(async () => {
                if (this.event_service.web3) {
                    let latestBlock = await this.event_service.web3.eth.getBlockNumber();
                    let storedLatestBlock = await redis.getCurrentBlock(constants_1.NETWORK_LATEST_BLOCK_NUMBER_KEY);
                    latestBlock -= 7; // Gives a confirmation of 7 blocks
                    if (storedLatestBlock && storedLatestBlock < latestBlock) {
                        let events = await this.event_service.sync(storedLatestBlock, latestBlock);
                    }
                    await redis.setCurrentBlock(constants_1.NETWORK_LATEST_BLOCK_NUMBER_KEY, latestBlock);
                }
            }, interval);
        }
        catch (err) {
            logger_1.default.error(`NETWORK: ${constants_1.NETWORK} | SERVICE: EventListener.listenOnHttps() | ERR: ${err}`);
            process.exit(1);
        }
    }
}
exports.default = EventListener;
