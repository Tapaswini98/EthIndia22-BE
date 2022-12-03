import client from "../config/redis";
import logger from "../config/logger";
import { NETWORK } from "../utils/constants";

export const setCurrentBlock = (network: string, blocknumber: Number) => {
  client.set(network, blocknumber.toString(), (err, reply) => {
    if (err) throw err;
    if (reply === "OK")
      logger.info(
        `NETWORK: ${NETWORK} | SERVICE: RedisService | EVENT: Set current block number as ${blocknumber}`
      );
  });
};

export const getCurrentBlock = (network: string) => {
  let currentBlock = new Promise<number | null>((resolve, reject) => {
    client.get(network, (err, reply) => {
      if (err) reject(err);
      if (reply === null) resolve(null);
      if (reply !== null) resolve(parseInt(reply));
    });
  });
  return currentBlock;
};
