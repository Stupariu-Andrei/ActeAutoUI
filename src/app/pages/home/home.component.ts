import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { AuthService } from 'src/app/services/auth.service';
import { UserTypeComponent } from 'src/app/pages/home/user-type/user-type.component';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT, ViewportScroller } from '@angular/common';
import { PageScrollInstance, PageScrollService } from 'ngx-page-scroll-core';
import { IdentityVerificationComponent } from '../identity-verification/identity-verification.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  public loggedIn: boolean;
  contactForm: FormGroup = new FormGroup({});

  constructor(private dialog: MatDialog, private authService: AuthService,
    private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any,
    private router: Router, private route: ActivatedRoute, private viewportScroller: ViewportScroller) {

  }

  ngAfterViewInit(): void {
    this.route.fragment.subscribe((fragment: any) => {
      this.viewportScroller.scrollToAnchor(fragment);
    })
  }

  ngOnInit(): void {
    this.authService.loggedIn.subscribe((isLoggedIn) => {
      this.loggedIn = isLoggedIn;
    });

    if (localStorage.getItem("popupDisplay") === "display" && this.authService.loggedIn) {
      this.dialog.open(UserTypeComponent);
    } else {
      localStorage.setItem("popupDisplay", "hide");
    }

  }

  startOperation() {
    if (this.loggedIn) {
      this.router.navigate(['selling-operation']);
    } else {
      this.viewportScroller.scrollToAnchor('user_type');
    }
  }

  goToPage(pageName: string){
    this.router.navigate([pageName]);
  }

  goToSection(sectionName: string){
    this.viewportScroller.scrollToAnchor(sectionName);
  }

  openDialog(){
    const dialogRef = this.dialog.open<IdentityVerificationComponent>(IdentityVerificationComponent,{
      width: '650px',
      height:'400px'
    });
  }

}
