import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Operation } from 'src/app/models/operation';
import { Option } from 'src/app/models/option';
import { User } from 'src/app/models/user';
import { DocService } from 'src/app/services/doc.service';
import { OperationsService } from 'src/app/services/operations.service';
import { NecessaryDocumentsComponent } from './necessary-documents/necessary-documents.component';
import { saveAs } from 'file-saver';
import { Contract } from 'src/app/models/contract';
import { LoadDocumentsComponent } from './load-documents/load-documents.component';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  operationsList: Operation[];
  panelOpenState: boolean;
  optionsMap: Map<number, string>;
  searchedOperation: any;

  constructor(public dialog: MatDialog, private operationsService: OperationsService,
    private docService: DocService, private router: Router, private authService:AuthService) { }

  async ngOnInit(): Promise<void> {
    this.operationsList = await this.operationsService.getOperationsList().toPromise();
  }


  openDialogForNecessaryDocsDetails(option: Option): void {

    option.necessaryDocuments = this.createOptionNecessaryDocsList(option);

    const dialogRef = this.dialog.open<NecessaryDocumentsComponent>(NecessaryDocumentsComponent, {
      width: '250px',
      data: option.necessaryDocuments
    });
  }

  selectOption(option: Option) {
    if (option.type.includes('Contract')) {
      this.router.navigate(['details/selling-contract']);
    }

    if (option.type.includes('Inmatriculare')) {
      this.router.navigate(['details/car-registration']);
    }

    if(option.type.includes('Schimbare')){
      this.router.navigate(['details/certificate-change']);
    }

    if(option.type.includes('Fiscal')){
      this.router.navigate(['details/selling-contract']);
    }
  }

  async getOperationOptionProgress(operation: Operation) {
    for (var option of operation.options) {
      option.progress = await this.operationsService.getOptionProgress(operation.id, option.id).toPromise();
    }
  }

  async downloadDoc(operation: Operation) {
    var contract = await this.docService.getContractFromOperation(operation.id).toPromise() as Contract;

    this.docService.downloadDoc(operation.id).subscribe(
      blob => saveAs(blob, contract.contract_name),
      error => console.log(error)
    );

  }

  async downloadFiscalDoc(operation: Operation) {
    var contract = await this.docService.getContractFromOperation(operation.id).toPromise() as Contract;

    this.docService.downloadFiscalDoc(contract.id).subscribe(
      blob => saveAs(blob, "Fiscal " + contract.contract_name),
      error => console.log(error)
    );

  }

  openDialogForLoadingDocuments(option: any) {

    option.necessaryDocuments = this.createOptionNecessaryDocsList(option);

    const dialogRef = this.dialog.open<LoadDocumentsComponent>(LoadDocumentsComponent, {
      width: '400px',
      data: option.necessaryDocuments
    });
  }

  createOptionNecessaryDocsList(option: any) {
    option.necessaryDocuments = [];

    if (option.type == "Contract vanzare-cumparare") {
      option.necessaryDocuments = ["Buletin", "Poza buletin"]
    }
    if (option.type == "Fiscal") {
      option.necessaryDocuments = ["Buletin", "Certificat de vanzare-cumparare"];
    }

    return option.necessaryDocuments;
  }

  checkFiscal(operation: Operation) {
    for (let option of operation.options) {
      if (option.type == 'Fiscal' && option.progress == 'Complete') {
        return true;
      }
    }

    return false;
  }

  setOperation(operation: Operation){
    this.operationsService.setCurrentOperation(operation);
  }
}
