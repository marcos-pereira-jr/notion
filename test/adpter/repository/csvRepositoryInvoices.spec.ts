import { Invoice } from './../../../src/domain/invoice';
import { CsvRepositoryInvoices } from '../../../src/adapter/repository/csvRepositoryInvoices';
import moment from 'moment';

const locale = 'pt-br';
moment.locale(locale);


describe('CSV Invoices repositoru', () => {
    test('get All invoices from CSV test',async () => {   
      const csvRepo  = new CsvRepositoryInvoices("./test/resources/test.csv");
      const invoices : Invoice[] = await csvRepo.findAllInvoices();
        
      expect(invoices[0].name).toBe('Bonamigo Racoes')
      expect(invoices[0].value).toBe(49.9)
      expect(invoices[0].date.toLocaleDateString(locale)).toBe("09/08/2021")
      expect(invoices[0].tag.name).toBe("casa")
  
    })
  })