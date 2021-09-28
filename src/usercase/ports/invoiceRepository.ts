import { Invoice } from './../../domain/invoice';

export interface InvoiceRepository {
    findAllInvoices ():Invoice[]
}