"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventPayload = void 0;
class EventPayload {
    constructor(id, type, details, retries) {
        this.id = id;
        this.type = type;
        this.details = details;
        this.retries = retries;
    }
}
exports.EventPayload = EventPayload;
