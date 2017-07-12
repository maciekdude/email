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
        },
        {
          id:"1234",
          from: "dt120@mail.com",
          to: "process@insurance.com",
          subject: "Add Correna Jost",
          text: "Please add Correna Jost to company policy UL32101. PL Policy no is 050-632-200 and operates in zip code 37993 with a VIN number of JH4KA4540LC016127.",
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
        },
        {
          id:"1234",
          from: "car@mail.com",
          to: "process@insurance.com",
          subject: "Add Winna Sego",
          text: "Please add Winna Sego who operates in zip code 62749 with a VIN number of 1FTZX1722XKA76091.",
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
          from: "drivers100@mail.com",
          to: "process@insurance.com",
          subject: "Remove Gobell",
          text: "Remove Patsy Gobell with a VIN number of 3VWSE29M82M028637.",
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
          from: "jackson@mail.com",
          to: "process@insurance.com",
          subject: "Move driver to company policy",
          text: "Please add Cory Mance to company policy UL44854. PL Policy Number is 050-634-300 and the zip code is 47344.",
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
          from: "admins@mail.com",
          to: "process@insurance.com",
          subject: "Add - Keefe Laverock",
          text: "Please add Keefe Laverock to company policy UL38104. PL Policy no is 050-632-200 and operates in zip code 70284 with a VIN number of 1D4GP24R57B255713.",
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
        },
        {
          id:"1234",
          from: "tomas@mail.com",
          to: "process@acme.com",
          subject: "Add Driver",
          text: "Add Meredeth Bourdice with PL Policy Number of 050-632-200 and company policy of UL24638.",
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
          from: "dan12@mail.com",
          to: "process@acme.com",
          subject: "Remove Driver",
          text: "Remove Karilynn Cossans with PL Policy Number of 050-672-200.",
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
          from: "tyler32@mail.com",
          to: "process@acme.com",
          subject: "Modify Policy Number 050-632-200",
          text: "Modify Tracee Toleman with company Policy Number of 050-632-200.",
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
          from: "jackson12@mail.com",
          to: "process@acme.com",
          subject: "Delete Alexi Danilovich",
          text: "Delete Alexi Danilovich from fleet policy #: UL26080 , car policy: 050-632-200, zip: 42442, VIN: JH4DC2391XS001749, License: 5221614, P#:(714) 479-7792 Appreciate it.",
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
        },
        {
          id:"1234",
          from: "ellen321@mail.com",
          to: "process@acme.com",
          subject: "Delete Trumaine Giddy",
          text: "Delete Trumaine Giddy from fleet policy #: UL35996 , car policy: 050-632-200, zip: 95089, VIN: WDBAB53A5FA150364, License: 6538363, P#:(446) 636-8468 Appreciate it.",
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
          from: "jackson12@mail.com",
          to: "process@acme.com",
          subject: "Delete Alexi Danilovich",
          text: "Delete Alexi Danilovich from fleet policy #: UL26080 , car policy: 050-632-200, zip: 42442, VIN: JH4DC2391XS001749, License: 5221614, P#:(714) 479-7792 Appreciate it.",
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
          from: "herman231@mail.com",
          to: "process@acme.com",
          subject: "Delete driver from fleety policy UL30763",
          text: "Please delete Ninnetta Shilito from fleet policy #: UL30763 , car policy: 050-632-200, zip: 80788, VIN: 3HSCWAPRXBN366331, License: 9238443, P#:(665) 616-2227 Thanks!!",
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
          from: "charlie2104@mail.com",
          to: "process@acme.com",
          subject: "Remove driver",
          text: "Remove Gratia Crinion from fleet policy #: UL4783 , car policy: 050-632-200, zip: 78750, VIN: 2P4GH2535SR296546, License: 8079110, P#:(427) 849-7375 Thanks!!",
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
        },
        {
          id:"1234",
          from: "eliana329@mail.com",
          to: "process@acme.com",
          subject: "Delete driver from policy",
          text: "Please remove Clarine Dugall from fleet policy #: UL97425 , car policy: 051-634-200, zip: 84073, VIN: JH4KA7550NC033894, License: 4530647, P#:(676) 640-5911 Appreciate it!",
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
          from: "sysadmin@mail.com",
          to: "process@acme.com",
          subject: "Remove Wilden Croal",
          text: "Please remove Wilden Croal from fleet policy #: UL11971 , car policy: 050-632-200, zip: 83843, VIN: JH4KA7551MC045888, License: 9550612, P#:(914) 826-1154 Appreciate it!",
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
          from: "kevin@mail.com",
          to: "process@acme.com",
          subject: "Remove driver from our policy!",
          text: "Delete Marijn Chiechio from fleet policy #: UL57028 , car policy: 050-634-300, zip: 83427, VIN: 5FPYK1F48DB012070, License: 2319697, P#:(229) 668-3013 Appreciate it.",
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
          from: "insurance@mail.com",
          to: "process@acme.com",
          subject: "Add driver to policy",
          text: "Hey, can you please add Hillard Bigby to fleet policy #: UL20872 , car policy: 050-632-200, zip: 20872, VIN: 4A3AK24FX6E028812, License: 6454001, P#:(609) 365-3666 Thanks!!",
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
        },
        {
          id:"1234",
          from: "kellyanne@mail.com",
          to: "process@acme.com",
          subject: "Move this driver",
          text: "Please move Rube Mughal to fleet policy #: UL20124 , car policy: 050-632-200, zip: 20124, VIN: 1GCHK29U86E255778, License: 5819435, P#:(361) 562-2528 Thanks!!",
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
          from: "administration@mail.com",
          to: "process@acme.com",
          subject: "Add Selina Cail",
          text: "Hey, can you please add Selina Cail to fleet policy #: UL47943 , car policy: 050-634-300, zip: 47943, VIN: 1HGEM21292L047875, License: 2923944, P#:(517) 532-2177 Thanks!!",
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
          from: "insuranceadmin@mail.com",
          to: "process@acme.com",
          subject: "Add Neall Schaffler",
          text: "Add Neall Schaffler to fleet policy #: UL51098 , car policy: 053-631-300, zip: 51098, VIN: SHSRD78875U336227, License: 1608666, P#:(639) 902-2555 Thanks!",
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
          from: "sheetal@mail.com",
          to: "process@acme.com",
          subject: "Add Lezley Ogborn",
          text: "Hey, can you please add Lezley Ogborn to fleet policy #: UL18838 , car policy: 050-672-200, zip: 18838, VIN: 1G8AY12P84Z202013, License: 9110575, P#:(711) 473-9692 Thanks!",
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
        },
        {
          id:"1234",
          from: "office@mail.com",
          to: "process@acme.com",
          subject: "Move Dasha",
          text: "Please move Dasha Morrott to fleet policy #: UL29185 , car policy: 053-932-600, zip: 29185, VIN: WAULF78K89N032914, License: 3321693, P#:(354) 282-8748 Thanks!!",
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
          from: "officeadmin@mail.com",
          to: "process@acme.com",
          subject: "Move Driver Please",
          text: "Please move Zelda Laimable to fleet policy #: UL41947 , car policy: 050-672-200, zip: 41947, VIN: 1N6AA06B74N530577, License: 6078258, P#:(464) 256-9757 Thanks!",
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
          from: "office-admin@mail.com",
          to: "process@acme.com",
          subject: "Move driver",
          text: "Please move Rosaline Fancet to fleet policy #: UL79293 , car policy: 053-631-300, zip: 79293, VIN: JH4DB1550PS001359, License: 2592366, P#:(632) 872-8853 Thanks!",
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
          from: "adminstration-office@mail.com",
          to: "process@acme.com",
          subject: "Move driver please",
          text: "Move Ruprecht Antosik to fleet policy #: UL27839 , car policy: 051-532-110, zip: 27839, VIN: 1G8ZF52801Z328015, License: 7115641, P#:(866) 933-4588 Thanks!!",
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
        },
        {
          id:"1234",
          from: "office@mail.com",
          to: "process@acme.com",
          subject: "Move Zelda Laimable",
          text: "Can you move Zelda Laimable to fleet policy #: UL41947 , car policy: 050-672-200, zip: 41947, VIN: 1N6AA06B74N530577, License: 6078258, P#:(464) 256-9757 Thanks!",
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
          from: "claims-office@mail.com",
          to: "process@acme.com",
          subject: "Move Sawyer Dymoke",
          text: "Hey, can you please move Sawyer Dymoke to fleet policy #: UL63243 , car policy: 050-632-200, zip: 63243, VIN: 5N1AA08A64N729252, License: 3788914, P#:(747) 656-7012 Thanks!!",
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
          from: "processing-office@mail.com",
          to: "process@acme.com",
          subject: "Add Lindsy Luckcock",
          text: "Add Lindsy Luckcock to fleet policy #: UL52999 , car policy: 053-932-600, zip: 52999, VIN: 1G8ZH528X2Z310309, License: 5150394, P#:(962) 461-1035 Thanks!",
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
          from: "drivers@mail.com",
          to: "process@acme.com",
          subject: "Add driver to policy",
          text: "Please add Wenda Castanie to fleet policy #: UL40742 , car policy: 050-672-200, zip: 40742, VIN: KM8JN72DX7U587496, License: 8062164, P#:(604) 677-8973 Thanks!",
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
        },
        {
          id:"1234",
          from: "jeff_32@mail.com",
          to: "process@acme.com",
          subject: "Add driver",
          text: "Hey, can you please add Corliss Sayburn to fleet policy #: UL19123 , car policy: 053-932-600, zip: 19123, VIN: JH4DC4340RS000837, License: 6159472, P#:(982) 257-8893 Thanks!!",
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
          from: "andersen320@mail.com",
          to: "process@acme.com",
          subject: "Can you add a driver",
          text: "Hi, can you please add Glenine Chidgey to fleet policy #: UL90667 , car policy: 051-532-110, zip: 90667, VIN: 1N6SD16S8NC343640, License: 6394631, P#:(814) 971-9202 Thanks!!",
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
          from: "desktop21@mail.com",
          to: "process@acme.com",
          subject: "Move Driver",
          text: "Please move Rube Mughal to fleet policy #: UL20124 , car policy: 050-632-200, zip: 20124, VIN: 1GCHK29U86E255778, License: 5819435, P#:(361) 562-2528",
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
          from: "processing@mail.com",
          to: "process@acme.com",
          subject: "Add Eleni Barreau",
          text: "Add Eleni Barreau to fleet policy #: UL94693 , car policy: 050-634-300, zip: 94693, VIN: WBAVB13506PT22180, License: 2466320, P#:(455) 941-4814 Thanks!!",
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
        },
        {
          id:"1234",
          from: "office@mail.com",
          to: "process@acme.com",
          subject: "Add driver",
          text: "Add Beauregard Vosse to fleet policy #: UL45009 , car policy: 050-632-200, zip: 45009, VIN: WAUD2AFD7DN006931, License: 3036692, P#:(632) 813-7263 Thanks",
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
          from: "adminoffice@mail.com",
          to: "process@acme.com",
          subject: "Remove driver",
          text: "Remove Gar De Leek from fleet policy #: UL49009 , car policy: 053-631-300, zip: 59246, VIN: 2FAFP73W1WX172908, License: 3452385, P#:(563) 766-8681 Thanks!!",
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
          from: "administration-office@mail.com",
          to: "process@acme.com",
          subject: "Delete Brear Curbishley",
          text: "Delete Brear Curbishley from fleet policy #: UL60704 , car policy: 050-632-200, zip: 41811, VIN: 4T1FA38P85U039442, License: 4826870, P#:(335) 363-5133 Appreciate it.",
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
          from: "offices@mail.com",
          to: "process@acme.com",
          subject: "Remove driver",
          text: "Remove Myrwyn Winchurch from fleet policy #: UL96905 , car policy: 051-634-200, zip: 86857, VIN: 5HD1GX4117K301958, License: 9671036, P#:(741) 893-2029 Thanks!!",
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
        },
        {
          id:"1234",
          from: "claims-office@mail.com",
          to: "process@acme.com",
          subject: "Remove the driver",
          text: "Delete Aldridge Sevier from fleet policy #: UL93652 , car policy: 053-932-600, zip: 75506, VIN: 2FTPX27LXXCA40319, License: 1590100, P#:(547) 786-3056 Appreciate it.",
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
      },
      {
        id:"1234",
        from: "admin@mail.com",
        to: "process@acme.com",
        subject: "Return device",
        text: "I need to return a device for Mary Smith. The device serial number is X65Z83QMG7NR. The return address is 98 Roxbury Plaza Florence, SC 29505.",
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
      },
      {
        id:"1234",
        from: "desktops@mail.com",
        to: "process@acme.com",
        subject: "Need to return device",
        text: "I need to return a device for Linda Williams. The device serial number is X58O47HKT3SY. The return address is 14501 Barnett Center Saint Louis, MO 63121.",
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
        from: "bennett@mail.com",
        to: "process@acme.com",
        subject: "Return device",
        text: "I need to return a device for Elizabeth Brown. The device serial number is G6F35RBY5KH. The return address is 90096 Buell Drive Morgantown, WV 26505.",
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
        from: "jackson@mail.com",
        to: "process@acme.com",
        subject: "Return device for Maria Miller",
        text: "Hi, I need to return a device for Maria Miller. The device serial number is K72Y66OVW2VS. The return address is 5496 Warbler Terrace Portland, OR 97229.",
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
        from: "charlie321@mail.com",
        to: "process@acme.com",
        subject: "Returning computer",
        text: "I'm returning a computer with the serial number T24R94CRX9UU for Michelle Clark. The return address is 86166 Forest Run Crossing Honolulu, HI 96805.",
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
      },
      {
        id:"1234",
        from: "oliver.wise@mail.com",
        to: "process@acme.com",
        subject: "Need to return computer",
        text: "I'm returning a computer with the serial number D1N92CSE6ER for Sarah Lewis. The return address is 236 Hudson Lane Stockton, CA 95298.",
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
        from: "charlie.mcenroe@mail.com",
        to: "process@acme.com",
        subject: "Sending back computer",
        text: "Sending back a computer with SN# T5E91TED9BJ for Christine Roberts. The address is 418 Messerschmidt Plaza Lancaster, PA 17605.",
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
        from: "jimmy.cart@mail.com",
        to: "process@acme.com",
        subject: "Returning a device",
        text: "I need to return a device for Ruth Martinez. The device serial number is M91G82QVF2DV. The return address is 185 Maple Road Dallas, TX 75353.",
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
        from: "courts@mail.com",
        to: "process@acme.com",
        subject: "Returning devices",
        text: "I need to return a device for Sharon Robinson. The device serial number is J68A87DUT6GF. The return address is 06 Forest Dale Terrace Fort Worth, TX 76110.",
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
      },
      {
        id:"1234",
        from: "office-admin@mail.com",
        to: "process@acme.com",
        subject: "Returning device for Laura Rodriguez",
        text: "I need to return a device for Laura Rodriguez. The device serial number is H56D71LNY5CC. The return address is 6065 Gina Plaza Pasadena, CA 91125.",
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
        from: "office-space@mail.com",
        to: "process@acme.com",
        subject: "Device Return",
        text: "I need to return a device for Carol Garcia. The device serial number is E48B31CES2IV. The return address is 1249 Lawn Alley Denver, CO 80235.",
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
        from: "john.robert@mail.com",
        to: "process@acme.com",
        subject: "Replace an iPad",
        text: "I need to replace my iPad with the Serial number 6S5SK63EN34636018. My name is Steve Franklin. Appreciate it!",
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
        from: "mcenroe24@mail.com",
        to: "process@acme.com",
        subject: "Replacing a device",
        text: "Hi! I need to replace my iPad with the Serial number 7C0LR3FM97958432. My name is Benjamin Greene. Appreciate it!.",
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
      },
      {
        id:"1234",
        from: "tomluc@mail.com",
        to: "process@acme.com",
        subject: "Return device for Jennifer Davis",
        text: "I need to return a device for Jennifer Davis. The device serial number is B16C16EWR7QN. The return address is 4 Stang Drive Memphis, TN 38136.",
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
        from: "elianab221@mail.com",
        to: "process@acme.com",
        subject: "Return device",
        text: "I need to return a device for Margaret Moore. The device serial number is H28U87DNB7DT. The return address is 5 American Ash Crossing Bakersfield, CA 93386.",
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
        timestamp: new Date("June 7, 2017 10:13:00")
      },
      {
        id:"1234",
        from: "administration@mail.com",
        to: "process@acme.com",
        subject: "Return device for Betty White",
        text: "I need to return a device for Betty White. The device serial number is J6N69DHP9OS. The return address is 711 Talisman Court Waterbury, CT 60705.",
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
      },
      {
        id:"1234",
        from: "management@mail.com",
        to: "process@acme.com",
        subject: "Returning a computer",
        text: "I'm returning a computer with the serial number J68A87DUT6GF for Sharon Robinson. The return address is 06 Forest Dale Terrace Fort Worth, TX 76110.",
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
        from: "steven.arnold@mail.com",
        to: "process@acme.com",
        subject: "Return computer",
        text: "I'm returning a computer with the serial number D1N92CSE6ER for Sarah Lewis. The return address is 236 Hudson Lane Stockton, CA 95298. Thanks!",
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
        from: "dan.feter@mail.com",
        to: "process@acme.com",
        subject: "Sending back computer",
        text: "Sending back a computer with SN# F27D60QJK9VG for Marie Turner. The address is 90 Jenna Alley Dallas, TX 75323. Thanks!",
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
        from: "bears@mail.com",
        to: "process@acme.com",
        subject: "Returning a computer",
        text: "Sending back a computer with SN# J80C89ATT1FT for Diane Collins. The address is 3165 Sachs Lane Richmond, VA 23242.",
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
      },
      {
        id:"1234",
        from: "geta@mail.com",
        to: "process@acme.com",
        subject: "Sending a computer back",
        text: "Sending back a computer with SN# E49K90ZJW9AW for Julie Sanchez. The address is 33685 Carioca Avenue Harrisburg, PA 17126.",
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
        from: "nael@mail.com",
        to: "process@acme.com",
        subject: "Return a computer",
        text: "Sending back a computer with SN# M66W46FZE6QB for Teresa Rogers. The address is 30 West Terrace Austin, TX 78778.",
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
        from: "noel.curtis@mail.com",
        to: "process@acme.com",
        subject: "Replace my MacBook Pro",
        text: "I need to replace my MacBook Pro with the Serial number 4O4HS75IX31395961. My name is Robin Hayes and my mailing address is 99503 Anhalt Junction Palo Alto, CA 94302.",
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
        from: "jimmy.klein@mail.com",
        to: "process@acme.com",
        subject: "Need to replace a MacBook Pro",
        text: "I need to replace my MacBook Pro with the Serial number 9A5WA35PC48863264. My name is Edna West and my mailing address is 03 Sauthoff Avenue Chesapeake, VA 23324",
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
      },
      {
        id:"1234",
        from: "rick.jackson@mail.com",
        to: "process@acme.com",
        subject: "Returning an iPad",
        text: "I need to replace my iPad with the Serial number 9T3UZ62DA2893484. My name is Sheila Wells and my mailing address is 466 Michigan Court Columbia, MO 65218",
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
        from: "jeffrey.harris@mail.com",
        to: "process@acme.com",
        subject: "Need to replace my iPad",
        text: "I need to replace my iPad with the Serial number 8J8BW87EP55712329. My name is Bruce Lawrence. Appreciate it!",
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
        from: "kelly.taylor@mail.com",
        to: "process@acme.com",
        subject: "Replacing an iPad",
        text: "I need to replace my iPad with the Serial number 5A9WS98PQ86429336. My name is Roy Weaver. Appreciate it!",
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
        from: "kerry.shoe@mail.com",
        to: "process@acme.com",
        subject: "Replacing a device",
        text: "Hi! I need to replace my iPad with the Serial number 2M3SF10OK31869312. My name is Ryan Watkins. Thanks!",
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
      },
      {
        id:"1234",
        from: "jimmel.lavine@mail.com",
        to: "process@acme.com",
        subject: "Replacing my iPad",
        text: "I need to replace my iPad. My name is Frank Ferguson and my mailing address is 1880 Hanover Crossing Columbia, SC 29215.",
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
        from: "kim.gary@mail.com",
        to: "process@acme.com",
        subject: "Need to replace my device",
        text: "I need to replace my iPad. My name is Frank Ferguson and my mailing address is 1880 Hanover Crossing Columbia, SC 29215.",
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
        from: "administration-office@mail.com",
        to: "process@acme.com",
        subject: "Sending back a device",
        text: "Sending back a computer with Serial# M33G16HYI3VF for Lori Wood. The address is 376 Leroy Way San Diego, CA 92160.",
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
        from: "admins@mail.com",
        to: "process@acme.com",
        subject: "Need to replace my computer",
        text: "Hi. I need to replace my MacBook Pro with the Serial number 4K5TQ45RS87474065. My name is Sherry Marshall and my mailing address is 9 American Junction New York City, NY 10270.",
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
      },
      {
        id:"1234",
        from: "allocation-office@mail.com",
        to: "process@acme.com",
        subject: "Replacing an iPad",
        text: "Hey! I need to replace my iPad with the Serial number 3P6IW17AK98198863. My name is Michael Porter and my mailing address is 37709 Ruskin Crossing Baton Rouge, LA 70894.",
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
        from: "jerry.calvin@mail.com",
        to: "process@acme.com",
        subject: "Returning a device for Donna Thompson",
        text: "I need to return a device for Donna Thompson. The device serial number is Y90G50KEF6UQ. The return address is 31421 Vahlen Crossing San Antonio, TX 78220.",
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
        from: "gale@mail.com",
        to: "process@acme.com",
        subject: "Returning a computer",
        text: "I'm returning a computer with the serial number O30L39SNG3DQ for Brenda Wright. The return address is 20 Grayhawk Hill Fort Worth, TX 76115.",
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
        from: "tellerd@mail.com",
        to: "process@acme.com",
        subject: "Returning a device for coworkers device",
        text: "Hi. I need to return a device for Helen Harris. The device serial number is B46V84XIW4AB. The return address is 754 Fisk Pass Roanoke, VA 24004.",
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
      },
      {
        id:"1234",
        from: "bennette@mail.com",
        to: "process@acme.com",
        subject: "Replacing my tablet",
        text: "I need to replace my iPad with the Serial number 0Y1QV83DE77752066. My name is Wayne Peters. Appreciate it!",
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
      }
    ]
  ]


  constructor() {}

}
