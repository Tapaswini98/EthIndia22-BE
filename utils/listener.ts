// Import web3 related items
import Web3 from "web3";
import { AbiItem } from "web3-utils";
import { EventData } from "web3-eth-contract";

// Import current MODE from constants
import { MODE, NETWORK, NETWORK_LATEST_BLOCK_NUMBER_KEY } from "./constants";

// Import required custom services
import EventService from "../services/event";
import * as redis from "../services/redis";

// Impport logger
import logger from "../config/logger";

export default class EventListener {
  contractABI: AbiItem[];
  event_service: EventService;

  constructor(
    web3URI: string,
    contractABI: AbiItem[],
    contractAddress: string
  ) {
    try {
      let web3;
      let contract;
      if (web3URI !== undefined) {
        web3 = new Web3(new Web3.providers.HttpProvider(web3URI, {}));
        if (contractAddress !== undefined) {
          contract = new web3.eth.Contract(contractABI, contractAddress);
        } else {
          throw Error("Contract Address not defined. Exiting...");
        }
        this.contractABI = contractABI;
        this.event_service = new EventService(web3, contract);
      } else {
        throw Error("Node RPC URL not defined. Exiting...");
      }
    } catch (err) {
      logger.error(`NETWORK: ${NETWORK} | SERVICE: EventListener.constructor() | ERR: ${err}`);
      process.exit(1);
    }
  }

  // To be used when listener mode is WSS i.e. useHttps = false
  async listen() {
    try {
      let latestBlock = await this.event_service.web3.eth.getBlockNumber();
      let storedLatestBlock = await redis.getCurrentBlock(NETWORK_LATEST_BLOCK_NUMBER_KEY);
      if (storedLatestBlock && storedLatestBlock < latestBlock) {
      }
      this.event_service
          .watch()
          .on("data", async (event: EventData) => {
            
          })
          .on("error", (err: Error) => {
            throw err;
          });
        this.event_service.newBlock().on("data", async (block) => {
          await redis.setCurrentBlock(NETWORK_LATEST_BLOCK_NUMBER_KEY, block.number);
        });
    } catch (err) {
      logger.error(`NETWORK: ${NETWORK} | SERVICE: EventListener.listen() | ERR: ${err}`);
      process.exit(1);
    }
  }

  // To be used when listener mode is HTTPS i.e. useHttps = true
  async listenOnHttps(interval: number = 5000) {
    try {
      setInterval(async () => {
        if (this.event_service.web3) {
          let latestBlock = await this.event_service.web3.eth.getBlockNumber();
          let storedLatestBlock = await redis.getCurrentBlock(NETWORK_LATEST_BLOCK_NUMBER_KEY);
          latestBlock -= 7; // Gives a confirmation of 7 blocks
          if (storedLatestBlock && storedLatestBlock < latestBlock) {
            let events = await this.event_service.sync(storedLatestBlock, latestBlock);
          }
          await redis.setCurrentBlock(NETWORK_LATEST_BLOCK_NUMBER_KEY, latestBlock);
        }
      }, interval);
    } catch (err) {
      logger.error(`NETWORK: ${NETWORK} | SERVICE: EventListener.listenOnHttps() | ERR: ${err}`);
      process.exit(1);
    }
  }
}
