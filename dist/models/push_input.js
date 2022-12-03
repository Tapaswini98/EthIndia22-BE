"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushInput = void 0;
class PushInput {
    constructor(reciever, notification_title, notification_body, payload_title, payload_body, payload_cta, payload_img) {
        this.reciever = reciever;
        this.notification_title = notification_title;
        this.notification_body = notification_body;
        this.payload_title = payload_title;
        this.payload_body = payload_body;
        this.payload_cta = payload_cta;
        this.payload_img = payload_img;
    }
}
exports.PushInput = PushInput;
