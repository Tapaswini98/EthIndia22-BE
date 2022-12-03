"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** Required External Modules */
const bunyan_1 = __importDefault(require("bunyan"));
const constants_1 = require("../utils/constants");
const applogger = bunyan_1.default.createLogger({
    name: "evm-web3-listener",
    hostname: constants_1.HOSTNAME,
    streams: [
        {
            level: constants_1.LOG_LEVEL,
            stream: process.stdout,
        },
    ],
});
exports.default = applogger;
