import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model-contract',
  templateUrl: './model-contract.component.html',
  styleUrls: ['./model-contract.component.css']
})
export class ModelContractComponent implements OnInit {

  pdfSrc = "../../../assets/model_contract.pdf";

  constructor() { }

  ngOnInit(): void {
  }

}
