import { Invoice } from './../domain/invoice';
import { InvoiceRepository } from './ports/invoiceRepository';

export class GetInvoices{
    invoiceRepo : InvoiceRepository

    constructor (importRepo: InvoiceRepository ) {
        this.invoiceRepo = importRepo
    }

    getAll() : Invoice[]{
        return this.invoiceRepo.findAllInvoices();
    }

}