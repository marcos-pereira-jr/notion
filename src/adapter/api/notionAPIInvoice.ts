import { Invoice } from '../../domain/invoice';
import { InvoiceAPI } from '../../usercase/ports/invoiceAPI';
import { Client } from "@notionhq/client"

export class NotionAPIInvoice implements InvoiceAPI {
    notion : Client
    databaseId : string

    constructor( key : string,databaseId : string){
        this.notion  = new Client({ auth:key })
        this.databaseId = databaseId
    }
    async import(invoices: Invoice[]): Promise<any> {
        try {
            invoices.forEach(async(invoice) =>{
                try{
                const response  = await this.notion.pages.create({
                    parent:{ database_id: this.databaseId},
                    properties:{
                        name: {
                            type:'title',
                            title:[
                              {
                                "text": {
                                  "content": invoice.name
                                },
                                type:'text'
                              },
                            ]
                        },
                        value:{
                            type:'number',
                            number: invoice.value
                        },
                        date:{
                            type:"date",
                            date: {
                                start: invoice.date.toISOString()
                            },
                        },
                        Tag: {
                           type:'select',
                           select:{id:invoice.tag.id,name:invoice.tag.name,color:'orange' },
                    
                        }
                    }
                });
                }catch(err){
                    console.log("ERRO AO TENTAR",invoice)
                    console.log(err)
                }
            })
            
            console.log("Success! Entry added.")
          } catch (error :any) {
            console.error(error.body)
          }
          return 
    }
    

}