import { Invoice } from '../../src/domain/invoice';
import moment from 'moment';
import { Tag } from '../../src/domain/tag';
import { ImportInvoices } from '../../src/usercase/importInvoices';
import { InMemoryAPIInvoices } from '../../src/adapter/api/inMemoryAPIInvoices';

const locale = 'pt-br';
moment.locale(locale);

describe('Import Invoices', () => {
    test('Import All invoices', async () => {   
        const inMemoryAPIInvoices = new InMemoryAPIInvoices();
        const importInvoice = new ImportInvoices(inMemoryAPIInvoices);

        const getInvoice = ()=>{
            const date = moment('11-02-2020', 'DD-MM-YYYY');
            const tag = new Tag("f9e5438e-f220-434f-98fe-cdbf4bf8076f","Food")
            return  new Invoice("Bread",2.00,date.toDate(),tag)
        }
        const {status } = await importInvoice.import([getInvoice()]);

        expect(status).toBe(200)
        
    })


  })