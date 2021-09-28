import { CsvRepositoryInvoices } from '../../../src/adapter/repository/csvRepositoryInvoices';
import { TranferController } from '../../../src/adapter/controller/tranferController';
import { NotionAPIInvoice } from '../../../src/adapter/api/notionAPIInvoice';

describe('Tranfer Controller', () => {
    test('Tranfer Controller', async() => {   
        const key ="secret_UrPpW9iL7Tvu6UpjilCInadQApIc7m2jFy6omXarFNJ"
        const databaseId= "db57de0d93b140bba09d2cd8d7cf30d4"

        const csvRepo  = new CsvRepositoryInvoices("./test/resources/test.csv");
        const notionApi = new NotionAPIInvoice(key,databaseId);

        const controller = new TranferController(notionApi,csvRepo);

        await controller.init()
        
    })

})