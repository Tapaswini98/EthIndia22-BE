import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";
import { PushInput } from "../models/push_input";
import { KEY, PUSH_CHANNEL_ADDRESS } from "../utils/constants";

export const sendNotification = async (pushInput: PushInput) => {
  const key = KEY // channel private key
  const Pkey = `0x${key}`;
  const signer = new ethers.Wallet(Pkey);
  try {
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer,
      type: 3, // target
      identityType: 2, // direct payload
      notification: {
        title: pushInput.notification_title,
        body: pushInput.notification_body
      },
      payload: {
        title: pushInput.payload_title,
        body: pushInput.payload_body,
        cta: pushInput.payload_cta,
        img: pushInput.payload_img
      },
      recipients: `eip155:5:${pushInput.reciever}`, // recipient address
      channel: `eip155:5:${PUSH_CHANNEL_ADDRESS}`, // your channel address
      env: 'staging'
    });

    // apiResponse?.status === 204, if sent successfully!
    console.log('API repsonse: ', apiResponse);
  } catch (err) {
    console.log('Error: ', err);
  }
}