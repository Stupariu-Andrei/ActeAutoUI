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
  optionRegistrationNecessaryDocumentsList: any = [];
  optionRegistrationTaxes: string[] = [];
  operation: Operation;

  constructor(private operationService: OperationsService, private docService: DocService) { }

  async ngOnInit(): Promise<void> {
    this.operation = this.operationService.getCurrentOperation();
    this.registrationOptionsList = await this.operationService.getRegistrationOptions().toPromise();
    for (let option of this.operation.options) {
      if (option.type == 'Inmatriculare') {
        this.registrationOption = await this.operationService.getRegistrationType(this.operation.id, option.id).toPromise();
        this.registrationOption = JSON.parse(this.registrationOption);
      }
    }
    if (this.registrationOption) {
      this.isSelected = true;
      this.optionRegistrationNecessaryDocumentsList = await this.operationService.getOptionRegistrationNecessaryDocuments(this.registrationOption.id).toPromise();
      this.getTaxes(this.registrationOption.type);
    }

  }

  async saveRegistrationOptionForOperation(registration_option: RegistrationOption) {
    for (let option of this.operation.options) {
      if (option.type == "Inmatriculare") {
        await this.operationService.saveRegistrationType(this.operation.id, option.id, registration_option.id).toPromise();
        this.isSelected = true;
        this.registrationOption = registration_option;
        this.optionRegistrationNecessaryDocumentsList = await this.operationService.getOptionRegistrationNecessaryDocuments(this.registrationOption.id).toPromise();
        this.getTaxes(this.registrationOption.type);
        await this.operationService.prepareNecessaryDocumentsForRegistration(this.operation.id, option.id, this.optionRegistrationNecessaryDocumentsList).toPromise();
      }

    }
  }

  uploadDocument(event: any) {
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

  getTaxes(registration_type:any){
    if(registration_type == 'Numere rosii'){
      this.optionRegistrationTaxes.push("Taxa ce reprezinta contravaloarea autorizatiei de functionare provizorie de 13 lei");
      this.optionRegistrationTaxes.push("Taxa de autorizatie numerele rosii pe 3 luni este de 39 lei.");
      this.optionRegistrationTaxes.push("Taxa numere rosii - 40 lei");
    }

    if(registration_type == "Numere negre" || registration_type == "Numere verzi"){
      this.optionRegistrationTaxes.push("Daca ai nevoie de dovada de la RAR, va fi necesar sa achiti o taxa de 539 lei pentru masini mici.");
      this.optionRegistrationTaxes.push("Plata certificatului de inmatriculare (37 de lei)");
      this.optionRegistrationTaxes.push("Plata pentru placutele de inmatriculare (40 de lei/aleatoriu sau 85 de lei/la alegere)");
    }
  }

}
