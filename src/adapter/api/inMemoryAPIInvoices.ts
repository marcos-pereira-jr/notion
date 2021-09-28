import { Response } from 'express';
import { Invoice } from '../../domain/invoice';
import { InvoiceAPI } from '../../usercase/ports/invoiceAPI';

export class InMemoryAPIInvoices implements InvoiceAPI {
    invoices : Invoice[] = []

    import(invoices: Invoice[]): any {
        this.invoices.concat(invoices);
        return {status : 200}
    }
    

}