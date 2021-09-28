import { InMemoryRepositoryInvoices } from './../../src/adapter/repository/inMemoryRepositoryInvoices';
import { Invoice } from './../../src/domain/invoice';
import { Tag } from '../../src/domain/tag';
import moment from 'moment';
import { GetInvoices } from '../../src/usercase/getInvoices';


const locale = 'pt-br';
moment.locale(locale);

describe('Get Invoices', () => {
  test('get All invoices', async () => {   
    const inMemoryRepositoryInvoices  = new InMemoryRepositoryInvoices(); 
    
    const getInvoice = ()=>{
        const date = moment('11-02-2020', 'DD-MM-YYYY');
        const tag = new Tag("f9e5438e-f220-434f-98fe-cdbf4bf8076f","Food")
        return  new Invoice("Bread",2.00,date.toDate(),tag)
    }
    
    inMemoryRepositoryInvoices.add(getInvoice());

    const getInvoices = new GetInvoices(inMemoryRepositoryInvoices);
    const invoices : Invoice[] = await getInvoices.getAll();

    expect(invoices[0].name).toBe('Bread')
    expect(invoices[0].value).toBe(2.00)
    expect(invoices[0].date.toLocaleDateString(locale)).toBe("11/02/2020")
    expect(invoices[0].tag.name).toBe("Food")

  })
})