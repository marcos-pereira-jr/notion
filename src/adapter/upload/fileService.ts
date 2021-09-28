const fs = require('fs');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

export class FileService {

    async upload(path : string,fileName :any, file:any) : Promise<string> {
        const dir :string = path + "/" + fileName;
        await this.save(file,dir);     
        return dir;
    }

    async save(file : any,dir :any) : Promise<string>{
        return new Promise(resolve =>  fs.writeFile(dir, file.buffer,resolve));
    }

    async getLenghtLine(dir :string):Promise<number>{
        const { stdout } = await exec(`cat ${dir} | wc -l`);
        return parseInt(stdout) -1;
    }

}