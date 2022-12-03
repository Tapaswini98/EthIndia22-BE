// Import required web3 modules
import Web3 from "web3";
import { Contract, EventData} from "web3-eth-contract";

// Import Logger service
import logger from "../config/logger";
import { NETWORK } from "../utils/constants";

// Import EventEmitter from node:events
import EventEmitter from "node:events";

export default class EventService {
  web3: Web3;
  contract: Contract;

  constructor(
    web3: Web3,
    contract: Contract
  ) {
    this.web3 = web3;
    this.contract = contract;
  }

  watch(fromBlock: number | string = "latest"): EventEmitter {
    logger.info(`NETWORK: ${NETWORK} | SERVICE: EventService | EVENT: Watching for new events...`);
    return this.contract.events.allEvents(
      { fromBlock: fromBlock },
      (err: Error, event: EventData) => {
        if (err) {
          logger.error(
            `NETWORK: ${NETWORK} | SERVICE: EventService | EVENT: Error in EventService when watching for new events | `,
            err
          );
          throw err;
        } else {
          logger.debug(`NETWORK: ${NETWORK} | SERVICE: EventService | EVENT: Event Captured -`, event);
        }
      }
    );
  }

  async sync(fromBlock: number, toBlock: number): Promise<EventData[]> {
    logger.info(`NETWORK: ${NETWORK} | SERVICE: EventService | EVENT: Syncing old events from block ${fromBlock} to block ${toBlock}`);
    let events: EventData[] = [];
    if (toBlock > fromBlock) {
      if (toBlock - fromBlock > 1500) {
        for (let index = fromBlock; index <= toBlock; index += 1500) {
          let localFromBlock = index;
          let localToBlock = index + 1500 > toBlock ? toBlock : index + 1500;
          let localEvents = await this.contract.getPastEvents("allEvents", { fromBlock: localFromBlock, toBlock: localToBlock });
          events = events.concat(localEvents);
        }
      } else {
        let localEvents = await this.contract.getPastEvents("allEvents", { fromBlock: fromBlock, toBlock: toBlock });
        events = events.concat(localEvents);
      }
    }
    logger.info(`NETWORK: ${NETWORK} | SERVICE: EventService | EVENT: Events Captured -`, events);
    return events;
  }

  newBlock() {
    logger.debug(
      `NETWORK: ${NETWORK} | SERVICE: EventService | EVENT: Watching for new blocks... `
    );
    if (this.web3 !== undefined) {
      return this.web3.eth.subscribe(
        "newBlockHeaders",
        (err: Error, result: any) => {
          if (err) {
            logger.error(
              `NETWORK: ${NETWORK} | SERVICE: EventService | EVENT: Error in EventService when fetching new block | `,
              err
            );
          } else {
            logger.info(`NETWORK: ${NETWORK} | SERVICE: EventService | EVENT: New block created ${result.number}`);
          }
        }
      );
    } else {
      logger.error(`NETWORK: ${NETWORK} | SERVICE: EventService | EVENT: Web3 is undefined. Probably one or more inputs to constructor are missing.`);
      process.exit(1);
    }
  }
}
