import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Operation } from 'src/app/models/operation';
import { Option } from 'src/app/models/option';
import { AuthService } from 'src/app/services/auth.service';
import { OperationsService } from 'src/app/services/operations.service';
import { SellingOptionChooserComponent } from '../selling-options/selling-option-chooser/selling-option-chooser.component';

@Component({
  selector: 'app-selling-operation',
  templateUrl: './selling-operation.component.html',
  styleUrls: ['./selling-operation.component.css']
})
export class SellingOperationComponent implements OnInit {

  options: Option[];
  operation: Operation;
  operationName: string;
  userAllowedOperations: any;

  constructor(public dialog: MatDialog, private operationsService: OperationsService,
    private router: Router, private authService:AuthService) {

  }

  async ngOnInit() {
    this.operation = new Operation();
    this.options = await this.operationsService.retrieveOptions().toPromise();
    for (const option of this.options) {
      if(option.type == 'Fiscal'){
        this.options = this.options.filter(item => item.type != 'Fiscal');
      }
    }

    this.userAllowedOperations = await this.authService.getUserOperationsCounter(this.authService.getCurrentUser().id).toPromise();
  }

  checkedDeed(option: Option) {
    option.isSelected = (option.isSelected) ? true : false;
  }

  getWantedDeed() {
    this.operation.name = this.operationName;

    for (const option of this.options) {
      if (option.isSelected) {
          this.operation.options.push(option);
      }
    }
  }

  async saveOperation() {

    this.operation = await this.operationsService.saveOperation(this.operation).toPromise();

    await this.operationsService.saveUserOperationOptionsProgress(this.operation.id, "In asteptare").toPromise();

    this.operationsService.setCurrentOperation(this.operation);

    if(this.userAllowedOperations > 0){
      this.userAllowedOperations = this.userAllowedOperations - 1;
    }

    await this.authService.updateUserOperationsCounter(this.authService.getCurrentUser().id, this.userAllowedOperations).toPromise();

    for(let option of this.operation.options){
      let optionNecessaryDocumentsList = await this.operationsService.getOptionNecessaryDocuments(option.id).toPromise();
      await this.operationsService.prepareNecessaryDocumentsForOption(this.operation.id, option.id, optionNecessaryDocumentsList).toPromise();
    }


  }

  goToPage(pageName: string){
    this.router.navigate([pageName]);
  }

  async openDialogForChoosingOperationToStart(operation: Operation) {

    await this.saveOperation();

    const dialogRef = this.dialog.open<SellingOptionChooserComponent>(SellingOptionChooserComponent, {
      width: '400px',
      data: operation.options
    });
  }

}
