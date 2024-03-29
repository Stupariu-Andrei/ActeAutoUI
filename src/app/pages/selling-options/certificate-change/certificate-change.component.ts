import { Component, OnInit } from '@angular/core';
import { NecessaryDocuments } from 'src/app/models/necessary-documents';
import { Operation } from 'src/app/models/operation';
import { Option } from 'src/app/models/option';
import { DocService } from 'src/app/services/doc.service';
import { OperationsService } from 'src/app/services/operations.service';

@Component({
  selector: 'app-certificate-change',
  templateUrl: './certificate-change.component.html',
  styleUrls: ['./certificate-change.component.css']
})
export class CertificateChangeComponent implements OnInit {

  operation: Operation;
  option: Option;
  optionNecessaryDocumentsList: NecessaryDocuments[] = [];
  optionRegistrationTaxes: string[] = [];
  selectedDocument: NecessaryDocuments;
  isDocUploadedList:{[id : number]: string} = [];

  constructor(private operationService: OperationsService, private docService: DocService) { }

  ngOnInit(): void {
    this.initializeOption();
  }

  async initializeOption(){
    this.operation = this.operationService.getCurrentOperation();
    for (let option of this.operation.options) {
      if (option.type == 'Schimbare de certificat') {
        this.optionNecessaryDocumentsList = await this.operationService.getOptionNecessaryDocuments(option.id).toPromise();
        this.option = option;
        this.getTaxes();
        await this.checkLoadedDocuments();
        break;
      }
    }
  }

  getTaxes(){
      this.optionRegistrationTaxes.push("Plata certificat de inmatriculare");
  }

  uploadDocument(event: any) {
    const files: File[] = Array.from(event.target.files);
    const filesDataURL: Promise<unknown[]> = Promise.all(files.map((f) => this.readAsDataURL(f)));
    filesDataURL.then(async () => {
      await this.docService.saveOptionDocument(this.operation.id,
        this.option.id,this.selectedDocument.id, event.target.files[0]).toPromise();
      await this.checkLoadedDocuments();
    });
  }

  readAsDataURL(file: File) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = function () {
        return resolve({
          data: fileReader.result,
          name: file.name,
          size: file.size,
          type: file.type
        });
      };
      fileReader.onerror = function (err) {
        return reject(err);
      };
      fileReader.readAsDataURL(file);
    });
  }

  getSelectedDocumentId(documentToSelect: NecessaryDocuments){
    this.selectedDocument = documentToSelect;
  }

  async checkLoadedDocuments(){
    for(let necDoc of this.optionNecessaryDocumentsList){
      let docName = await this.operationService.checkOptionLoadedDocument(this.operation.id, this.option.id, necDoc.id).toPromise();
      this.isDocUploadedList[necDoc.id] = docName;
    }
  }


}
