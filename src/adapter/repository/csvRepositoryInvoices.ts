
import { Invoice } from '../../domain/invoice';
import { Tag } from '../../domain/tag';
import { InvoiceRepository } from './../../usercase/ports/invoiceRepository';
import moment from 'moment';

const fs = require('fs');

export class CsvRepositoryInvoices implements InvoiceRepository{
    invoices : Invoice[] = []

    constructor (filename: string) {
        var loader = require('csv-load-sync')
        var csv = loader(filename)
        csv.forEach((element: any) => {
          this.invoices.push(this.formatFromCsv(element))
        })
    }
    formatFromCsv(element : any){
        const date= moment('2021-08-09', 'YYYY-MM-DD');
        const invoice = new Invoice(element.title,parseFloat(element.amount),
                                         date.toDate(),new Tag("14df3697-e5fb-438c-b8f9-1256205d6820"
                                         ,element.category ? element.category : "Não tem"))
        return invoice;   
    }

    findAllInvoices(): Invoice[]{
        return this.invoices;
    }
}