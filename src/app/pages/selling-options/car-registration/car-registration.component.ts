import { Component, OnInit } from '@angular/core';
import { Operator } from 'rxjs';
import { Operation } from 'src/app/models/operation';
import { RegistrationOption } from 'src/app/models/registration-option';
import { DocService } from 'src/app/services/doc.service';
import { OperationsService } from 'src/app/services/operations.service';

@Component({
  selector: 'app-car-registration',
  templateUrl: './car-registration.component.html',
  styleUrls: ['./car-registration.component.css']
})
export class CarRegistrationComponent implements OnInit {

  registrationOptionsList: any = [];
  registrationOption: any;
  isSelected: boolean = false;
  operation: Operation;

  constructor(private operationService: OperationsService, private docService:DocService) { }

  async ngOnInit(): Promise<void> {
    this.operation = this.operationService.getCurrentOperation();
    this.registrationOptionsList = this.operationService.getRegistrationOptions();
    for (let option of this.operation.options) {
      if (option.id == 8 ) {
        this.registrationOptionsList = await this.operationService.getRegistrationType(this.operation.id,option.id).toPromise();
      }
    }
    if(this.registrationOption){
      console.log(this.isSelected);
      this.isSelected = true;
    }
  }

  saveRegistrationOptionForOperation(registration_option: RegistrationOption) {
    for (let option of this.operation.options) {
      if (option.type == "Inmatriculare" ) {
        this.operationService.saveRegistrationType(this.operation.id, option.id, registration_option.id).subscribe( data =>{
          this.isSelected = true;
          this.registrationOption = registration_option.type;
        })
      }
    }
  }

  uploadDocument(event: any){
    const files: File[] = Array.from(event.target.files);
		const filesDataURL: Promise<unknown[]> = Promise.all(files.map((f) => this.readAsDataURL(f)));
		filesDataURL.then(() => {
      const operation_id = this.operationService.getCurrentOperation().id;
      console.log(operation_id);
			this.docService.saveDocument(operation_id, event.target.files[0]).toPromise();
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

}
