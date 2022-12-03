export class EventStructure {
    anonymous: Boolean;
    inputs: {
      indexed: Boolean;
      internalType: string;
      name: string;
      type: string;
    }[];
    name: string;
    type: string;
  
    constructor(event: any) {
      this.anonymous = event.anonymous;
      this.inputs = event.inputs;
      this.name = event.name;
      this.type = event.type;
    }
}
  