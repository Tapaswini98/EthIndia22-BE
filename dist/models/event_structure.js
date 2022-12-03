"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventStructure = void 0;
class EventStructure {
    constructor(event) {
        this.anonymous = event.anonymous;
        this.inputs = event.inputs;
        this.name = event.name;
        this.type = event.type;
    }
}
exports.EventStructure = EventStructure;
