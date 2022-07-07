import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OperationsService } from 'src/app/services/operations.service';

@Component({
  selector: 'app-selling-option-chooser',
  templateUrl: './selling-option-chooser.component.html',
  styleUrls: ['./selling-option-chooser.component.css']
})
export class SellingOptionChooserComponent implements OnInit {

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<SellingOptionChooserComponent>,
    @Inject(MAT_DIALOG_DATA) public optionsList: any, private router: Router, private operationService:OperationsService) { }

  ngOnInit(): void {
  }

  closeWindow(){
    this.dialog.closeAll();
  }

  startOperation(option: any){
    if(option.type == 'Contract vanzare-cumparare'){
      this.closeWindow();
      this.goToPage('contract');
      return;
    }
    if(option.type == 'Inmatriculare'){
      this.closeWindow();
      this.goToPage('car-registration')
      return;
    }
    if(option.type == 'Schimbare certificat'){
      this.closeWindow();
      this.goToPage('cerificate-change');
      return;
    }
    this.operationService.setCurrentOption(option);
  }

  async goToPage(pageName: string){
    this.router.navigate([pageName]);
  }

}
