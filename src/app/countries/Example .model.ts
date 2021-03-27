import { Translations } from './Translations .model';

export class Example {

    name:string;
	topLevelDomain:string[];
	alpha2Code:string;
	alpha3Code:string;
	callingCodes:string[];
	capital:string;
	altSpellings:string[] ;
	region:string;
	subregion:string;
	population:number;
	latlng:number[];
	demonym:string;
	area:number;
	gini:any;
	timezones:string[];
	borders:string[] ;
	nativeName:string;
	numericCode:string;
	currencies:string[] ;
	languages:string[] ;
	translations:Translations;
	relevance:string;
}