import  {Notafiscal} from './thought'

//Guidance about SRP (SINGLE RESPONSIBILITY PRINCIPLE)
 export class Libraries {
    constructor(nomebook:string){
     this.nomebook = nomebook
    }
    nomebook: string;
}

 export class Pricebook implements Notafiscal {
    valuebook:number;
    namebook: string;
    
    constructor(pricebook:number){
     this.pricebook = pricebook
    }
    pricebook: number;
}

 export class Finnaly implements Notafiscal {
    valuebook:number;
    namebook: string;

    constructor(bookone: number){
        this.bookone = bookone 
    }
    bookone:number;
}
//get interface and adding values of book
let nomebook: Libraries = new Libraries('Learning Mysql')
let pricebook :Pricebook = new Pricebook(99.90)
let finasale: Finnaly = new Finnaly(99.90)


