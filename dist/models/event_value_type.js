"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventValueType = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const logger_1 = __importDefault(require("../config/logger"));
class EventValueType {
    constructor(type, value) {
        this.type = type;
        try {
            switch (type) {
                case "string":
                case "bytes32":
                case "address":
                    this.value = String(value);
                    break;
                case "uint256":
                    this.value = new bignumber_js_1.default(value.toString()).toFixed();
                    break;
                case "bool":
                    this.value = Boolean(value) ? 1 : 0;
                    break;
                case "uint256[]":
                    let tempValForUint256 = [];
                    value.forEach((element) => {
                        tempValForUint256.push(new EventValueType("uint256", new bignumber_js_1.default(element.toString()).toFixed()));
                    });
                    this.value = tempValForUint256;
                    break;
                case "uint256[][]":
                    let tempValForUint256Matrix = [];
                    Object.entries(value).forEach(([key, element]) => {
                        tempValForUint256Matrix.push(new EventValueType("uint256[]", element));
                    });
                    this.value = tempValForUint256Matrix;
                    break;
                case "address[]":
                    let tempValForAddress = [];
                    value.forEach((element) => {
                        tempValForAddress.push(new EventValueType("address", String(element)));
                    });
                    this.value = tempValForAddress;
                    break;
            }
        }
        catch (err) {
            logger_1.default.error(err);
        }
    }
}
exports.EventValueType = EventValueType;
