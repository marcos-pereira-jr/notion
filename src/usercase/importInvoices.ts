import { Invoice } from './../domain/invoice';
import { InvoiceAPI } from './ports/invoiceAPI';
export class ImportInvoices{
    invoiceAPI : InvoiceAPI

    constructor(invoiceAPI : InvoiceAPI){
        this.invoiceAPI = invoiceAPI
    }
    async import(invoices :Invoice[]) : Promise<any>{
       return await this.invoiceAPI.import(invoices);
    }
}