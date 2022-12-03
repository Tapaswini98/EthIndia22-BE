"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Logger service
const logger_1 = __importDefault(require("../config/logger"));
const constants_1 = require("../utils/constants");
class EventService {
    constructor(web3, contract) {
        this.web3 = web3;
        this.contract = contract;
    }
    watch(fromBlock = "latest") {
        logger_1.default.info(`NETWORK: ${constants_1.NETWORK} | SERVICE: EventService | EVENT: Watching for new events...`);
        return this.contract.events.allEvents({ fromBlock: fromBlock }, (err, event) => {
            if (err) {
                logger_1.default.error(`NETWORK: ${constants_1.NETWORK} | SERVICE: EventService | EVENT: Error in EventService when watching for new events | `, err);
                throw err;
            }
            else {
                logger_1.default.debug(`NETWORK: ${constants_1.NETWORK} | SERVICE: EventService | EVENT: Event Captured -`, event);
            }
        });
    }
    async sync(fromBlock, toBlock) {
        logger_1.default.info(`NETWORK: ${constants_1.NETWORK} | SERVICE: EventService | EVENT: Syncing old events from block ${fromBlock} to block ${toBlock}`);
        let events = [];
        if (toBlock > fromBlock) {
            if (toBlock - fromBlock > 1500) {
                for (let index = fromBlock; index <= toBlock; index += 1500) {
                    let localFromBlock = index;
                    let localToBlock = index + 1500 > toBlock ? toBlock : index + 1500;
                    let localEvents = await this.contract.getPastEvents("allEvents", { fromBlock: localFromBlock, toBlock: localToBlock });
                    events = events.concat(localEvents);
                }
            }
            else {
                let localEvents = await this.contract.getPastEvents("allEvents", { fromBlock: fromBlock, toBlock: toBlock });
                events = events.concat(localEvents);
            }
        }
        logger_1.default.info(`NETWORK: ${constants_1.NETWORK} | SERVICE: EventService | EVENT: Events Captured -`, events);
        return events;
    }
    newBlock() {
        logger_1.default.debug(`NETWORK: ${constants_1.NETWORK} | SERVICE: EventService | EVENT: Watching for new blocks... `);
        if (this.web3 !== undefined) {
            return this.web3.eth.subscribe("newBlockHeaders", (err, result) => {
                if (err) {
                    logger_1.default.error(`NETWORK: ${constants_1.NETWORK} | SERVICE: EventService | EVENT: Error in EventService when fetching new block | `, err);
                }
                else {
                    logger_1.default.info(`NETWORK: ${constants_1.NETWORK} | SERVICE: EventService | EVENT: New block created ${result.number}`);
                }
            });
        }
        else {
            logger_1.default.error(`NETWORK: ${constants_1.NETWORK} | SERVICE: EventService | EVENT: Web3 is undefined. Probably one or more inputs to constructor are missing.`);
            process.exit(1);
        }
    }
}
exports.default = EventService;
