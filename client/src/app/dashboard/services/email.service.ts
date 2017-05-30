import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { ConversationService } from './conversation.service';

import { Email } from './email'

@Injectable()
export class EmailService {

  emails: Array<Email> = [
    {
      id:"1234",
      from: "jackson@mail.com",
      to: "process@insurance.com",
      subject: "a nice little subject",
      text: "Please issue a certificate of insurance for: Lakewood Park Apartments, Attn: Liza Schumer 1001 Pine Wood Lane Durham, NC 27703 Please email the completed coi to Lakewood@realestateassoc.com, kaseylm4@gmail.com and cc: lbarraga@bbt.com.  Thank you.",
      requestType: "Add to Policy",
      status:"Active",
      entities: {
        vin: "657657",
        license: "5677567567",
        ssn: "567658345"
      }
    },
    {
      id:"1245",
      from: "donald@mail.com",
      to: "process@insurance.com",
      subject: "please do this",
      text: "Pommy ipsum chaps Essex girls warts and all bit of a div jolly chips The Hounds of Baskerville, golly yorkshire pudding gobsmacked one would like grab a jumper one would be honoured to. And thus bugger working class the fuzz two weeks on't trot bloke pants eton mess, could murder a pint completely starkers lost her marbles jolly good lass. Bloody shambles old girl supper scrubber half-inch it golly gosh, twiglets who brought loaf skive wibbly-wobbly timey-wimey stuff, golly bloody mary tip-top Sherlock. Horses for courses clock round the earhole hard cheese old boy marmite smeg head, marmite copper nutter.",
      requestType: "Remove from Policy",
      status:"Complete",
      entities: {
        vin: null,
        license: "4234234234",
        ssn: "234234234"
      }
    },
    {
      id:"1256",
      from: "benito@mail.com",
      to: "process@insurance.com",
      subject: "can you add this person?",
      text: "Mocha so, aftertaste medium, irish french press cappuccino black trifecta. Turkish caramelization, caffeine cultivar, aromatic aftertaste café au lait flavour brewed. Extra, ut grinder spoon mocha, a so sweet grounds aged. Dark brewed carajillo grinder so decaffeinated brewed. Barista, carajillo, kopi-luwak crema fair trade shop half and half macchiato redeye. So, filter, cup shop, aromatic percolator irish con panna siphon. Sweet, java aged black, sit brewed extraction id spoon. Cinnamon qui, filter skinny doppio mocha frappuccino. White single shot beans cream milk strong, caramelization milk decaffeinated wings acerbic coffee. Seasonal qui lungo, java, white affogato chicory grinder ristretto. blue mountain organic. Robust, froth irish id white mazagran aged kopi-luwak. Irish aftertaste beans iced id aroma acerbic.",
      requestType: "Add to Policy",
      status:"Rejected",
      entities: {
        vin: "",
        license: "345",
        ssn: "23423454345"
      }
    }
  ]

  emailChange: Subject<any> = new Subject<any>();
  emailsUpdate: Subject<any> = new Subject<any>();

  constructor(public conversationService:ConversationService) {
    for(let i of this.emails){
      let message = i.text
      this.conversationService.sendMessage(message).subscribe(response => {
        if(response[0].intents[0]){
          i.requestType = response[0].intents[0].intent
        }
      })
    }
  }

  getEmails(){
    return this.emails
  }

  switchEmail(email){
    this.emailChange.next(email)
  }

}
