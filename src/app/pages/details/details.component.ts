import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Operation } from 'src/app/models/operation';
import { Option } from 'src/app/models/option';
import { User } from 'src/app/models/user';
import { DocService } from 'src/app/services/doc.service';
import { OperationsService } from 'src/app/services/operations.service';
import { NecessaryDocumentsComponent } from './necessary-documents/necessary-documents.component';
import {saveAs} from 'file-saver';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  operationsList: Operation[];
  panelOpenState: boolean;
  optionsMap:Map<number, string>;
  searchedOperation:any;

  constructor(public dialog: MatDialog, private operationsService: OperationsService, private docService:DocService) { }

  async ngOnInit(): Promise<void> {
    this.operationsList = await this.operationsService.getOperationsList().toPromise();
  }
  

  openDialog(option: Option): void {

    option.necessaryDocuments = [];

    if(option.type == "Contract vanzare-cumparare"){
      option.necessaryDocuments = ["Buletin","Poza buletin"]
    }
    if(option.type == "Fiscal"){
      option.necessaryDocuments = ["Buletin","Certificat de vanzare-cumparare"];
    }
    if(option.type == "R.A.R."){
      option.necessaryDocuments = ["Buletin","Certificat masina","Cerere"];
    }
    if(option.type == "Numere rosii"){
      option.necessaryDocuments = ["Buletin","Certificat masina"];
    }
    if(option.type == "Numere negre"){
      option.necessaryDocuments = ["Buletin","Certificat de vanzare-cumparare","Certificat masina"];
    }

    const dialogRef = this.dialog.open<NecessaryDocumentsComponent>(NecessaryDocumentsComponent,{
      width: '250px',
      data : option.necessaryDocuments
    });
  }

  selectOperation(operation: Operation){
    this.operationsService.setCurrentOperation(operation);
  }
  
  async getOperationOptionProgress(operation: Operation){
    for(var option of operation.options){
      option.progress = await this.operationsService.getOptionProgress(operation.id, option.id).toPromise();
    }
  }

  downloadDoc(){

    var seller = JSON.parse(localStorage.getItem('seller')!) as User;
    var buyer = JSON.parse(localStorage.getItem('buyer')!) as User;

    this.docService.downloadDoc("Contract-auto " + seller.name +" "+ buyer.name+".docx").subscribe(
      blob => saveAs(blob,"Contract-auto " + seller.name +" "+ buyer.name+".docx" ),
      error => console.log(error)
    );

  }
}
