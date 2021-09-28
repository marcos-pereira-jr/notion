import { Invoice } from './../../../src/domain/invoice';
import moment from 'moment';
import { Tag } from '../../../src/domain/tag';
import { NotionAPIInvoice } from '../../../src/adapter/api/notionAPIInvoice';

const locale = 'pt-br';
moment.locale(locale);


describe('API Invoices Notion', () => {
    test('Send a Invoice',async () => {   
      const key ="secret_UrPpW9iL7Tvu6UpjilCInadQApIc7m2jFy6omXarFNJ"
      const databaseId= "db57de0d93b140bba09d2cd8d7cf30d4"
      const notionApi = new NotionAPIInvoice(key,databaseId);
   
      const date = moment('11-02-2020', 'DD-MM-YYYY');
      const tag = new Tag("14df3697-e5fb-438c-b8f9-1256205d6820","Food")
      const invoice =  new Invoice("Bread",2.00,date.toDate(),tag)
      

      await notionApi.import([invoice]);
    })
  })