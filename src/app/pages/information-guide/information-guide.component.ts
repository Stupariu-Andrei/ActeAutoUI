import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-information-guide',
  templateUrl: './information-guide.component.html',
  styleUrls: ['./information-guide.component.css']
})
export class InformationGuideComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToPage(pageLink: string){
    this.router.navigate([pageLink]);
  }

  downloadApplicantRequestFile(){

  }

}
