import logger from '../config/logger';
import * as redis from './redis';
import EventService from './event';
import { COMMUNITYDAO_CONTRACT_ABI, REVIEWER_ABI, RECON_NETWORK_LATEST_BLOCK_NUMBER_KEY, NETWORK } from '../utils/constants';
import { transform } from './transform';

const RESYNC_EVENT = "RESYNC | EVNT: ";

export default class ReconService {
    communitydao_service: EventService;
    reviewer_service: EventService;

    constructor(
        communitydao_service: EventService,
        reviewer_service: EventService,
    ) {
        this.communitydao_service = communitydao_service;
        this.reviewer_service = reviewer_service;
    }

    resync(seconds: number) {
        setInterval(async () => {
            logger.debug(`NETWORK: ALL - ${RESYNC_EVENT} Resyncing in progress ....`);
            this.getEvents(this.communitydao_service, COMMUNITYDAO_CONTRACT_ABI);
            this.getEvents(this.reviewer_service, REVIEWER_ABI);
        }, seconds * 1000);
    }

    async getEvents(eventService: EventService, abi: any) {
        try {
            if (eventService.web3) {
                let latestBlock = await eventService.web3.eth.getBlockNumber();
                let storedLatestBlock = await redis.getCurrentBlock(RECON_NETWORK_LATEST_BLOCK_NUMBER_KEY);
                logger.info(`NETWORK: ${NETWORK} | ${RESYNC_EVENT} Resyncing from block ${storedLatestBlock}`);
                if (storedLatestBlock && storedLatestBlock < latestBlock) {
                    let events = await eventService.sync(storedLatestBlock, latestBlock);
                    events.forEach(async (event) => {
                        await transform(event, abi, eventService.web3)
                    })
                }
                redis.setCurrentBlock(RECON_NETWORK_LATEST_BLOCK_NUMBER_KEY, latestBlock);
                logger.info(`NETWORK: ${NETWORK} | ${RESYNC_EVENT} Resynced to block ${latestBlock}`);
            }
        } catch (err: any) {
            logger.error(
                `NETWORK: ${NETWORK} | EVNT: Error in ReconService | ${err}`
            );
            throw err;
        }
    }
}