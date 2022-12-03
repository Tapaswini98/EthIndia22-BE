export class PushInput {
    reciever: string;
    notification_title: string;
    notification_body: string;
    payload_title: string;
    payload_body: string;
    payload_cta: string;
    payload_img: string;
  
    constructor(
        reciever: string,
        notification_title: string,
        notification_body: string,
        payload_title: string,
        payload_body: string,
        payload_cta: string,
        payload_img: string
        
    ) {
      this.reciever = reciever;
      this.notification_title = notification_title;
      this.notification_body = notification_body;
      this.payload_title = payload_title;
      this.payload_body = payload_body;
      this.payload_cta = payload_cta;
      this.payload_img = payload_img;
    }
}