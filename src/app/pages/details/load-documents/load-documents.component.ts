import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-load-documents',
  templateUrl: './load-documents.component.html',
  styleUrls: ['./load-documents.component.css']
})
export class LoadDocumentsComponent implements OnInit {

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<LoadDocumentsComponent>, @Inject(MAT_DIALOG_DATA)
  public necessaryDocuments: any) { }

  ngOnInit(): void {
  }

  closeWindow() {
    this.dialog.closeAll();
  }

}
