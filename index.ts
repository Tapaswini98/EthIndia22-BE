// Import Logger from Config
import logger from './config/logger';
import { REVIEW_CONTRACT_ADDRESS, REVIEWER_ABI, HTTPS_MODE_INTERVAL, 
    COMMUNITYDAO_CONTRACT_ABI, MODE, NETWORK, NETWORK_HTTPS_URL, RECON_INTERVAL, COMMUNITYDAO_CONTRACT_ADDRESS } from "./utils/constants";
import EventListener from "./utils/listener";
import { AbiItem } from "web3-utils";

let communitydao_contract_listener;
let contribution_contract_listener;

const main = async () => {
    logger.info("Started process");
    try {
        communitydao_contract_listener = new EventListener(NETWORK_HTTPS_URL, COMMUNITYDAO_CONTRACT_ABI as AbiItem[], COMMUNITYDAO_CONTRACT_ADDRESS);
        // contribution_contract_listener = new EventListener(NETWORK_HTTPS_URL, REVIEWER_ABI as AbiItem[], REVIEW_CONTRACT_ADDRESS);
        communitydao_contract_listener.listenOnHttps(HTTPS_MODE_INTERVAL as number);
        // contribution_contract_listener.listenOnHttps(HTTPS_MODE_INTERVAL as number);
    } catch (err) {
      logger.error(`NETWORK: ${NETWORK} - EVNT: Error in Main \n ${err}`);
    }
  };
  
  main();
  