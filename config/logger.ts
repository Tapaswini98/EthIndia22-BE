/** Required External Modules */
import bunyan from "bunyan";
import { HOSTNAME, LOG_LEVEL } from "../utils/constants";

const applogger = bunyan.createLogger({
  name: "evm-web3-listener",
  hostname: HOSTNAME,
  streams: [
    {
      level: LOG_LEVEL,
      stream: process.stdout,
    },
  ],
});

export default applogger;
