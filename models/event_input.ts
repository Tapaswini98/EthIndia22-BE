export class EventInput {
    indexed: Boolean;
    internalType: String;
    name: String;
    type: String;
  
    constructor(
      indexed: Boolean,
      internalType: String,
      name: String,
      type: String
    ) {
      this.indexed = indexed;
      this.internalType = internalType;
      this.name = name;
      this.type = type;
    }
}