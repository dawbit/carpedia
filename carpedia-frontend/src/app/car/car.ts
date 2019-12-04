import { Company } from '../company/company';
import { Country } from '../country/country';
import { Engine } from '../engine/engine';
import { Segment } from '../segment/segment';
import { Bodytype } from '../bodytype/bodytype';
//import { User } from '../user/user';

export class Car {
    id: number;
    company: Company;
    name: string;
    startproduction: string;
    endproduction: string;
    //engine: Engine;
    ncap: number;
    country: Country;
    segment: Segment;
    bodytype: Bodytype;
    //user: User;
  }
  