import { Tag } from './tag';

export class Invoice{

    name: string
    value: number
    date: Date
    tag : Tag
    
   
    constructor(name:string, value :number, date:Date,tag:Tag){
        this.name = name
        this.value = value
        this.date = date
        this.tag = tag
    }

}