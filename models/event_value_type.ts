import BigNumber from "bignumber.js";
import logger from "../config/logger";

export class EventValueType {
  type: String;
  value: any;
  
  constructor(type: String, value: any) {
    this.type = type;
    try {
      switch (type) {
        case "string":
        case "bytes32":
        case "address":
          this.value = String(value);
          break;
        case "uint256":
          this.value = new BigNumber(value.toString()).toFixed();
          break;
        case "bool":
          this.value = Boolean(value) ? 1 : 0;
          break;
        case "uint256[]":
          let tempValForUint256: EventValueType[] = [];
          value.forEach((element: any) => {
            tempValForUint256.push(
              new EventValueType("uint256", new BigNumber(element.toString()).toFixed())
            );
          });
          this.value = tempValForUint256;
          break;
        case "uint256[][]":
          let tempValForUint256Matrix: EventValueType[] = [];
          Object.entries(value).forEach(([key, element]) => {
            tempValForUint256Matrix.push(
                  new EventValueType("uint256[]", element)
                );
          })
          this.value = tempValForUint256Matrix;
          break;
        case "address[]":
          let tempValForAddress: EventValueType[] = [];
          value.forEach((element: String) => {
            tempValForAddress.push(
              new EventValueType("address", String(element))
            );
          });
          this.value = tempValForAddress;
          break;
      }
    } catch (err) {
      logger.error(err);
    }
  }
}
  