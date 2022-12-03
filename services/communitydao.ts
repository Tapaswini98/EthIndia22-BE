import Web3 from "web3";
import * as dotenv from 'dotenv';
import { Contract, EventData } from 'web3-eth-contract';
import { AbiItem } from 'web3-utils';
import { EventValueType } from "../models/event_value_type";
import { EventDetails } from "../models/event_details";
import { COMMUNITYDAO_CONTRACT_ABI, NETWORK, COMMUNITYDAO_CONTRACT_ADDRESS } from "../utils/constants";

dotenv.config();

export default class CommunityDaoService {
    web3: Web3;
    community_dao_contract: Contract;

    constructor(web3: Web3) {
        this.web3 = web3;
        this.community_dao_contract = new web3.eth.Contract(COMMUNITYDAO_CONTRACT_ABI as AbiItem[], COMMUNITYDAO_CONTRACT_ADDRESS);
    }

    async transformCommunityDaoIssuedEvent(rawData: EventData) {
        let indexedParameters: Array<EventValueType> = [];
        let nonIndexedParameters: Array<EventValueType> = [];
        return new EventDetails(
            rawData.event,
            rawData.event.concat("Event"),
            NETWORK,
            indexedParameters,
            nonIndexedParameters,
            rawData.transactionHash,
            rawData.logIndex,
            rawData.blockNumber,
            rawData.blockHash,
            rawData.address,
            "CONFIRMED",
            rawData.signature,
            NETWORK,
            "log_" + rawData.signature
        )
    }
}
