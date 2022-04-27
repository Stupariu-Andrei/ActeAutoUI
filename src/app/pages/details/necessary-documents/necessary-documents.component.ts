import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-necessary-documents',
  templateUrl: './necessary-documents.component.html',
  styleUrls: ['./necessary-documents.component.css']
})
export class NecessaryDocumentsComponent implements OnInit {

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<NecessaryDocumentsComponent>, @Inject(MAT_DIALOG_DATA)
  public necessaryDocuments: any) { }

  ngOnInit(): void {
  }

  closeWindow() {
    this.dialog.closeAll();
  }

}
