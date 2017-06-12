import { Injectable } from '@angular/core';

import { Email } from './email';

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
        response: null
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
        response: null
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
        response: null
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
        response: null
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
        response: null
      }
    ],
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
        response: null
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
        response: null
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
        response: null
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
        response: null
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
        response: null
      }
    ]
  ]


  constructor() {}

}
