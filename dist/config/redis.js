"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = __importDefault(require("redis"));
const constants_1 = require("../utils/constants");
const client = redis_1.default.createClient({
    host: constants_1.REDIS_HOSTNAME,
});
exports.default = client;
