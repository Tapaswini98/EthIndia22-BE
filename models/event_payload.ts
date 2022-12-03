import { EventDetails } from "./event_details";

export class EventPayload {
    id: String;
    type: String;
    details: EventDetails;
    retries: Number;
  
    constructor(
      id: String,
      type: String,
      details: EventDetails,
      retries: Number
    ) {
      this.id = id;
      this.type = type;
      this.details = details;
      this.retries = retries;
    }
}