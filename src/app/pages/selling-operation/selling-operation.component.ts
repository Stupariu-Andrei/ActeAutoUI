import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Operation } from 'src/app/models/operation';
import { Option } from 'src/app/models/option';
import { OperationsService } from 'src/app/services/operations.service';

@Component({
  selector: 'app-selling-operation',
  templateUrl: './selling-operation.component.html',
  styleUrls: ['./selling-operation.component.css']
})
export class SellingOperationComponent implements OnInit {

  options: Option[];
  operation: Operation;
  operationName: string;

  constructor(public dialog: MatDialog, private operationsService: OperationsService, private router: Router) {

  }

  async ngOnInit() {
    this.operation = new Operation();
    this.options = await this.operationsService.retrieveOptions().toPromise();
    for (const option of this.options) {
      if(option.id == 2){
        this.options = this.options.filter(item => item.id != 2);
      }
    }
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

    for(var option of this.operation.options){
      if(option.type == 'Contract vanzare-cumparare'){
        this.router.navigate(['selling-operation/contract']);
        return;
      }
    }
    this.router.navigate(['selling-operation/details']);
  }


}
