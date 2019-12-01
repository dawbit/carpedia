//import { Country } from "../country/country";

export class Company {
  id: number;
  name: string;
  foundation: number;
  //country: Country;
  country: {
    id: number;
    name: string;
  };
}
