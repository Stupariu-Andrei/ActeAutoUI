import { Component, OnInit } from '@angular/core';
import * as saveAs from 'file-saver';
import { Contract } from 'src/app/models/contract';
import { NecessaryDocuments } from 'src/app/models/necessary-documents';
import { Operation } from 'src/app/models/operation';
import { Option } from 'src/app/models/option';
import { DocService } from 'src/app/services/doc.service';
import { OperationsService } from 'src/app/services/operations.service';

@Component({
  selector: 'app-selling-contract',
  templateUrl: './selling-contract.component.html',
  styleUrls: ['./selling-contract.component.css']
})
export class SellingContractComponent implements OnInit {

  operation: Operation;
  option: Option;
  optionNecessaryDocumentsList: NecessaryDocuments[] = [];
  optionRegistrationTaxes: string[] = [];
  selectedDocument: NecessaryDocuments;
  isDocUploadedList:{[id : number]: string} = [];
  fiscalOption: Option;

  completedContract: any;

  constructor(private operationService: OperationsService, private docService: DocService) { }

  ngOnInit(): void {
    this.initializeOption();
  }

  async initializeOption(){
    this.operation = this.operationService.getCurrentOperation();
    for (let option of this.operation.options) {
      if (option.type == 'Contract vanzare-cumparare') {
        this.optionNecessaryDocumentsList = await this.operationService.getOptionNecessaryDocuments(option.id).toPromise();
        this.completedContract = await this.docService.getContractFromOperation(this.operation.id).toPromise();
        this.option = option;
        this.getTaxes();
        await this.checkLoadedDocuments();
      }
      if(option.type == 'Fiscal'){
        this.fiscalOption = option;
      }
    }
  }

  getTaxes(){
      this.optionRegistrationTaxes.push("Plata fiscal pentru contractul de vanzare cumparare");
  }

  uploadDocument(event: any) {
    const files: File[] = Array.from(event.target.files);
    const filesDataURL: Promise<unknown[]> = Promise.all(files.map((f) => this.readAsDataURL(f)));
    filesDataURL.then(() => {
      this.docService.saveOptionDocument(this.operation.id,
        this.option.id,this.selectedDocument.id, event.target.files[0]).toPromise();
      this.checkLoadedDocuments();
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

  async downloadDoc(operation: Operation) {
    var contract = await this.docService.getContractFromOperation(operation.id).toPromise() as Contract;

    this.docService.downloadDoc(operation.id).subscribe(
      blob => saveAs(blob, contract.contract_name),
      error => console.log(error)
    );

  }

}
