import { Invoice } from './../domain/invoice';
import { ImportInvoices } from './importInvoices';
import { GetInvoices } from './getInvoices';

export class TransferInvoices{
    getInvoices : GetInvoices
    importInvoices : ImportInvoices

    constructor (getInvoices : GetInvoices,importInvoices : ImportInvoices ) {
        this.getInvoices = getInvoices;
        this.importInvoices = importInvoices;
    }

    async init():Promise<any>{
        const invoices : Invoice[] = this.getInvoices.getAll();
        return await this.importInvoices.import(invoices);
    }

}