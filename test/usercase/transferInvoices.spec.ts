import { Invoice } from './../../src/domain/invoice';
import { InMemoryRepositoryInvoices } from '../../src/adapter/repository/inMemoryRepositoryInvoices';
import { ImportInvoices } from '../../src/usercase/importInvoices';
import moment from 'moment';
import { Tag } from '../../src/domain/tag';
import { GetInvoices } from '../../src/usercase/getInvoices';
import { TransferInvoices } from '../../src/usercase/transferInvoices';
import { InMemoryAPIInvoices } from '../../src/adapter/api/inMemoryAPIInvoices';

describe('Transfer invoices ', () => {
    test('Transfer All invoices', () => {   
        
        const inMemoryRepositoryInvoices  = new InMemoryRepositoryInvoices(); 
        const getInvoice = ()=>{
            const date = moment('11-02-2020', 'DD-MM-YYYY');
            const tag = new Tag("f9e5438e-f220-434f-98fe-cdbf4bf8076f","Food")
            return  new Invoice("Bread",2.00,date.toDate(),tag)
        }
        inMemoryRepositoryInvoices.add(getInvoice());
        const getInvoices = new GetInvoices(inMemoryRepositoryInvoices);

        const inMemoryAPIInvoices = new InMemoryAPIInvoices();
        const importInvoice = new ImportInvoices(inMemoryAPIInvoices);
        const transferInvoices = new TransferInvoices(getInvoices,importInvoice);
        transferInvoices.init();
        
        //expect(status).toBe(200)
    })
  })