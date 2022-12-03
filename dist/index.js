"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Logger from Config
const logger_1 = __importDefault(require("./config/logger"));
const recon_1 = __importDefault(require("./services/recon"));
const constants_1 = require("./utils/constants");
const listener_1 = __importDefault(require("./utils/listener"));
let recon_service;
let tournament_contract_listener;
let contribution_contract_listener;
const main = async () => {
    logger_1.default.info("Started process");
    try {
        recon_service = new recon_1.default(new listener_1.default(constants_1.NETWORK_HTTPS_URL, constants_1.COMMUNITYDAO_CONTRACT_ABI, constants_1.COMMUNITYDAO_CONTRACT_ADDRESS).event_service, new listener_1.default(constants_1.NETWORK_HTTPS_URL, constants_1.REVIEWER_ABI, constants_1.REVIEW_CONTRACT_ADDRESS).event_service);
        tournament_contract_listener = new listener_1.default(constants_1.NETWORK_HTTPS_URL, constants_1.COMMUNITYDAO_CONTRACT_ABI, constants_1.COMMUNITYDAO_CONTRACT_ADDRESS);
        contribution_contract_listener = new listener_1.default(constants_1.NETWORK_HTTPS_URL, constants_1.REVIEWER_ABI, constants_1.REVIEW_CONTRACT_ADDRESS);
        tournament_contract_listener.listenOnHttps(constants_1.HTTPS_MODE_INTERVAL);
        contribution_contract_listener.listenOnHttps(constants_1.HTTPS_MODE_INTERVAL);
        recon_service.resync(constants_1.RECON_INTERVAL);
    }
    catch (err) {
        logger_1.default.error(`NETWORK: ${constants_1.NETWORK} - EVNT: Error in Main \n ${err}`);
    }
};
main();
