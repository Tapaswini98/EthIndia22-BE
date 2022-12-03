import redis from "redis";
import { REDIS_HOSTNAME } from "../utils/constants";

const client = redis.createClient({
  host: REDIS_HOSTNAME,
});

export default client;