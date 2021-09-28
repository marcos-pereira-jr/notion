import { Invoice } from '../../domain/invoice';
import { InvoiceRepository } from './../../usercase/ports/invoiceRepository';

export class InMemoryRepositoryInvoices implements InvoiceRepository {
    invoces : Invoice[] = []
    findAllInvoices(): Invoice[] {
       return this.invoces
    }
    
    add(invoice : Invoice){
        this.invoces.push(invoice);
    }

}