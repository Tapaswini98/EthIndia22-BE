import logger from "../config/logger";
import { EventData } from 'web3-eth-contract';
import { AbiItem } from 'web3-utils';
import Web3 from "web3";
import { EventDetails } from "../models/event_details";
import { EventValueType } from "../models/event_value_type";
import { NETWORK } from "../utils/constants";
import { EventStructure } from "../models/event_structure";
import { sendNotification } from "./push";



export const transform = async (rawData: EventData, abi: AbiItem[], web3: Web3) => {
  let eventDetails;
  if (rawData.event == 'TournamentIssued'){
    eventDetails = await transformCommunityDaoIssuedEvent(rawData)
    console.log(eventDetails,"eventDetails");
    
    sendNotification({
      reciever: eventDetails.address,
      notification_title: 'Title',
      notification_body: 'Body',
      payload_title: '',
      payload_body: 'body',
      payload_cta: '',
      payload_img: ''
    })
  }
  else {
    let eventStructure: EventStructure = new EventStructure(
      abi.find((object: any) => object.name === rawData.event)
    );
    let indexedParameters: Array<EventValueType> = [];
    let nonIndexedParameters: Array<EventValueType> = [];
    eventStructure?.inputs.forEach((element) => {
      if (element.indexed)
        indexedParameters.push(
          new EventValueType(element.type, rawData.returnValues[element.name])
        );
      else
        nonIndexedParameters.push(
          new EventValueType(element.type, rawData.returnValues[element.name])
        );
    });
    eventDetails = new EventDetails(
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
    );
  }
  logger.info(`NETWORK: ${NETWORK} | SERVICE: TransformService | EVNT: Event Transformed | `, eventDetails);
}
function transformCommunityDaoIssuedEvent(rawData: EventData): any {
  throw new Error("Function not implemented.");
}

