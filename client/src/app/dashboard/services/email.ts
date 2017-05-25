import { Entities } from './entities'

export class Email {
  constructor(
    public id: string,
    public from: string,
    public to: string,
    public subject: string,
    public text: string,
    public requestType: string,
    public status: string,
    public entities: Entities
  ) {
    // Left blank
  }
}
