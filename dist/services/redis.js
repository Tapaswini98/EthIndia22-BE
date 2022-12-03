"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentBlock = exports.setCurrentBlock = void 0;
const redis_1 = __importDefault(require("../config/redis"));
const logger_1 = __importDefault(require("../config/logger"));
const constants_1 = require("../utils/constants");
const setCurrentBlock = (network, blocknumber) => {
    redis_1.default.set(network, blocknumber.toString(), (err, reply) => {
        if (err)
            throw err;
        if (reply === "OK")
            logger_1.default.info(`NETWORK: ${constants_1.NETWORK} | SERVICE: RedisService | EVENT: Set current block number as ${blocknumber}`);
    });
};
exports.setCurrentBlock = setCurrentBlock;
const getCurrentBlock = (network) => {
    let currentBlock = new Promise((resolve, reject) => {
        redis_1.default.get(network, (err, reply) => {
            if (err)
                reject(err);
            if (reply === null)
                resolve(null);
            if (reply !== null)
                resolve(parseInt(reply));
        });
    });
    return currentBlock;
};
exports.getCurrentBlock = getCurrentBlock;
