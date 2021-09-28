import moment from 'moment';
import { Invoice } from '../../src/domain/invoice';
import { Tag } from '../../src/domain/tag';

const locale = 'pt-br';
moment.locale(locale);

describe('Invoice', () => {
    test('should create a Invoice', () => {

     
      const date = moment('11-02-2020', 'DD-MM-YYYY');
      const tag = new Tag("f9e5438e-f220-434f-98fe-cdbf4bf8076f","Food")

      const invoice = new Invoice("Bread",2.00,date.toDate(),tag)

      expect(invoice.name).toBe('Bread')
      expect(invoice.value).toBe(2.00)
      expect(invoice.date.toLocaleDateString(locale)).toBe("11/02/2020")
      expect(invoice.tag.name).toBe("Food")
    })
    
})