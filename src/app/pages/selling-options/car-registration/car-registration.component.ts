import { Component, OnInit } from '@angular/core';
import { Operator } from 'rxjs';
import { Operation } from 'src/app/models/operation';
import { OperationsService } from 'src/app/services/operations.service';

@Component({
  selector: 'app-car-registration',
  templateUrl: './car-registration.component.html',
  styleUrls: ['./car-registration.component.css']
})
export class CarRegistrationComponent implements OnInit {

  registrationTypeList: any = ['numere-rosii', 'numere-negre', 'numere-verzi'];
  registrationType: any;
  isSelected: boolean = false;
  operation: Operation;

  constructor(private operationService: OperationsService) { }

  async ngOnInit(): Promise<void> {
    this.operation = this.operationService.getCurrentOperation();
    for (let option of this.operation.options) {
      if (option.id == 8 && this.operation.registration_type == null) {
        this.registrationType = await this.operationService.getRegistrationType(this.operation.id,option.id).toPromise();
      }
    }
    if(this.registrationType){
      this.isSelected = true;
    }
  }

  saveRegistrationOptionForOperation(registration_type: any) {
    for (let option of this.operation.options) {
      if (option.id == 8 && this.operation.registration_type == null) {
        this.operationService.saveRegistrationType(this.operation.id, registration_type, option.id).subscribe( data =>{
          this.isSelected = true;
        })
      }
    }
  }

}
