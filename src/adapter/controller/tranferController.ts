
import { NotionAPIInvoice } from '../api/notionAPIInvoice';
import { CsvRepositoryInvoices } from '../repository/csvRepositoryInvoices';
import { TransferInvoices } from '../../usercase/transferInvoices';
import { GetInvoices } from '../../usercase/getInvoices';
import { ImportInvoices } from '../../usercase/importInvoices';
import { Get, JsonController, Post, UploadedFile } from 'routing-controllers';
import { get } from 'http';
import moment from 'moment';
import { FileService } from '../upload/fileService';


@JsonController("/tranfer")
export class TranferController{

    notionAPIInvoice : NotionAPIInvoice
    csvRepositoryInvoices : CsvRepositoryInvoices
    fileService : FileService

    constructor( notionAPIInvoice : NotionAPIInvoice ,
                csvRepositoryInvoices : CsvRepositoryInvoices,
                fileService : FileService){

        this.notionAPIInvoice = notionAPIInvoice
        this.csvRepositoryInvoices = csvRepositoryInvoices
        this.fileService = fileService
    }

    @Post()
    async uploadPhoto(@UploadedFile('file') file : any) {
        this.fileService = new FileService();

        const date : string = moment(new Date()).format('YYYY-MM-DDHH:MM:SS');
        const fileName : string  = 'invoice-' + date + '.csv';
        const dir  = await this.fileService.upload("uploads/invoices",fileName,file);

        this.csvRepositoryInvoices = new CsvRepositoryInvoices(dir);
        this.init();
    }

    async init(){
       const getInvoices = new GetInvoices(this.csvRepositoryInvoices)
       const importInvoices = new ImportInvoices(this.notionAPIInvoice)
       const transferInvoices = new TransferInvoices(getInvoices,importInvoices);
       await transferInvoices.init();
    }

}