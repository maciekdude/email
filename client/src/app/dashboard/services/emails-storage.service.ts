import { Injectable } from '@angular/core';

import { Email } from './email.class';

@Injectable()
export class EmailsStorageService {

  emails: [Array<Email>] = [
    [
      {
        id:"1234",
        from: "regisco@mail.com",
        to: "process@insurance.com",
        subject: "Add New Driver To Policy",
        text: "Add Irvine Brahams to fleet policy #: UL32953 , car policy: 050-632-200, zip: 32940, VIN: JHMZE2H73AS009608, License: 4382913, P#:(321) 321-2145 Thanks!!",
        requestType: null,
        status:"Incomplete",
        entities: {
          Zip_Code: null,
          Cell_Number: null,
          LIC: null,
          PL_Policy: null,
          CL_Policy: null,
          First_Name: null,
          Last_Name: null,
          Vin_Number: null
        },
        response: null,
        timestamp: new Date("June 7, 2017 10:13:00")
      },
      {
        id:"1234",
        from: "gjisl@mail.com",
        to: "process@insurance.com",
        subject: "Add to fleet policy #: UL60273",
        text: "Hey, can you please add Abbott Rout to fleet policy #: UL60273 , car policy: 050-632-200, zip: 60273 Appreciate it",
        requestType: null,
        status:"Incomplete",
        entities: {
          Zip_Code: null,
          Cell_Number: null,
          LIC: null,
          PL_Policy: null,
          CL_Policy: null,
          First_Name: null,
          Last_Name: null,
          Vin_Number: null
        },
        response: null,
        timestamp: new Date("June 7, 2017 10:13:00")
      },
      {
        id:"1234",
        from: "hello@mail.com",
        to: "process@insurance.com",
        subject: "Remove driver",
        text: "Please delete Nina Prahl from fleet policy #: UL52145 , VIN: JH4KA7550NC033894, License: 9410030, P#:(468) 376-9558 Thanks!",
        requestType: null,
        status:"Incomplete",
        entities: {
          Zip_Code: null,
          Cell_Number: null,
          LIC: null,
          PL_Policy: null,
          CL_Policy: null,
          First_Name: null,
          Last_Name: null,
          Vin_Number: null
        },
        response: null,
        timestamp: new Date("June 6, 2017 10:13:00")
      },
      {
        id:"1234",
        from: "henry@mail.com",
        to: "process@insurance.com",
        subject: "Move drive Zelda Laimable",
        text: "Please move Zelda Laimable to fleet policy #: UL41947 , car policy: 050-672-200, zip: 41947, VIN: 1N6AA06B74N530577, License: 6078258, P#:(464) 256-9757 Thanks!!",
        requestType: null,
        status:"Incomplete",
        entities: {
          Zip_Code: null,
          Cell_Number: null,
          LIC: null,
          PL_Policy: null,
          CL_Policy: null,
          First_Name: null,
          Last_Name: null,
          Vin_Number: null
        },
        response: null,
        timestamp: new Date("June 5, 2017 10:13:00")
      },
      {
        id:"1234",
        from: "admin@mail.com",
        to: "process@insurance.com",
        subject: "Delete driver- Marlo Dodshun",
        text: "Please delete Marlo Dodshun from fleet policy #: UL87534 , car policy: 053-932-600, zip: 80151, VIN: KM8SC73E94U774838, License: 2950048, P#:(732) 351-7698 Thanks",
        requestType: null,
        status:"Incomplete",
        entities: {
          Zip_Code: null,
          Cell_Number: null,
          LIC: null,
          PL_Policy: null,
          CL_Policy: null,
          First_Name: null,
          Last_Name: null,
          Vin_Number: null
        },
        response: null,
        timestamp: new Date("June 4, 2017 10:13:00")
      }
    ],
    [
      {
        id:"1234",
        from: "kyle@mail.com",
        to: "process@acme.com",
        subject: "Return MacBook",
        text: "I need to return a device for Dave Miller. The device serial number is V83G82QVF2DV. The return address is 302 June Road Dallas, TX 75353.",
        requestType: null,
        status:"Incomplete",
        entities: {
          Zip: null,
          State: null,
          City: null,
          Street_Number: null,
          Last_Name: null,
          First_Name: null,
          Serial_Number: null
        },
        response: null,
        timestamp: new Date("June 7, 2017 10:13:00")
      },
      {
        id:"1234",
        from: "dan@mail.com",
        to: "process@acme.com",
        subject: "Returning computer for Sharon",
        text: "I’m returning a computer with the serial number J68A87DUT6GF for Sharon Robinson. The return address is 06 Forest Dale Terrace Fort Worth, TX 76110.",
        requestType: null,
        status:"Incomplete",
        entities: {
          Zip: null,
          State: null,
          City: null,
          Street_Number: null,
          Last_Name: null,
          First_Name: null,
          Serial_Number: null
        },
        response: null,
        timestamp: new Date("June 6, 2017 10:13:00")
      },
      {
        id:"1234",
        from: "tyler@mail.com",
        to: "process@acme.com",
        subject: "Returning computer",
        text: "Sending back a computer with SN# H72F78DOV3DP for Mildred Bailey. The address is 80 Leroy Lane Trenton, NJ 80695.",
        requestType: null,
        status:"Incomplete",
        entities: {
          Zip: null,
          State: null,
          City: null,
          Street_Number: null,
          Last_Name: null,
          First_Name: null,
          Serial_Number: null
        },
        response: null,
        timestamp: new Date("June 5, 2017 10:13:00")
      },
      {
        id:"1234",
        from: "jackson@mail.com",
        to: "process@acme.com",
        subject: "Returning a device",
        text: "I need to return a device for Melissa King. The device serial number is Y76T60MJV0MC.",
        requestType: null,
        status:"Incomplete",
        entities: {
          Zip: null,
          State: null,
          City: null,
          Street_Number: null,
          Last_Name: null,
          First_Name: null,
          Serial_Number: null
        },
        response: null,
        timestamp: new Date("June 4, 2017 10:13:00")
      }
    ]
  ]


  constructor() {}

}
