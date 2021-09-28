import { Response } from 'express';
import { Invoice } from '../../domain/invoice';

export interface InvoiceAPI {
    import(invoices :Invoice[]): Promise<any>
}