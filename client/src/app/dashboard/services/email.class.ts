export class Email {
  constructor(
    public set: string,
    public id: string,
    public from: string,
    public to: string,
    public subject: string,
    public text: string,
    public requestType: string,
    public status: string,
    public entities:any,
    public response: string,
    public timestamp: any
  ) {
    // Left blank
  }
}
