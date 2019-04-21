export class WeatherInfo {

    /*
         Note: i know that attributes must be in private access but for the sake of this example (and don't add more set/get function) 
        i will let this in public.
    */

    constructor(
        public tempMin: number,
        public tempMax: number,
        public humidity: number,
        public weather: string,
        public date: Date,
        public icon: string
    ) {}


}
