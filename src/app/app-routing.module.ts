import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { DetailsComponent } from './pages/details/details.component';
import { DocumentComponent } from './pages/document/document.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginnComponent } from './pages/loginn/loginn.component';
import { ModelContractComponent } from './pages/model-contract/model-contract.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { DetailsLayoutComponent } from './pages/details/details-layout/details-layout.component';
import { SellingOperationComponent } from './pages/selling-operation/selling-operation.component';
import { ContractLayoutComponent } from './pages/contract/contract-layout/contract-layout.component';
import { ProfileComponent } from './pages/user-profile/profile/profile.component';
import { ProfileLayoutComponent } from './pages/user-profile/profile-layout/profile-layout.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { IdentityVerificationComponent } from './pages/identity-verification/identity-verification.component';
import { InformationGuideComponent } from './pages/information-guide/information-guide.component';
import { CarRegistrationComponent } from './pages/selling-options/car-registration/car-registration.component';
import { CertificateChangeComponent } from './pages/selling-options/certificate-change/certificate-change.component';
import { ContractCompleterComponent } from './pages/selling-options/contract-completer/contract-completer.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'login', component: LoginnComponent,
    children:[
      {
        path: 'register', component: RegisterComponent
      }
    ]
  },
  {
    path: 'user-profile', component: UserProfileComponent,
    children:[
      {
        path: 'profile', component: ProfileLayoutComponent,
        children:[
          {
            path: '', component: ProfileComponent
          }
        ]
      }
    ]
  },
  {
    path: 'details', component: DetailsLayoutComponent,
    children:[
      { path: '', component: DetailsComponent},
      { path: 'contract', component: ContractCompleterComponent}
    ]
  },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component:LoginnComponent},
  {
    path: 'contract', component: ContractLayoutComponent,
    children: [
      { path: '', component: ContractCompleterComponent},
      {
        path: 'payment', component: PaymentComponent,
        children: [
          { path: 'document', component: DocumentComponent },
        ]
      }
    ]
  },
  { path: 'model-contract', component: ModelContractComponent },
  { path: 'information-guide', component:InformationGuideComponent},
  { path: 'car-registration', component: CarRegistrationComponent},
  { path: 'certificate-change', component: CertificateChangeComponent},
  { path: 'pricing', component: PricingComponent},
  { path: 'selling-operation', component: SellingOperationComponent},
  { path: 'identityverification', component: IdentityVerificationComponent},
  { path: 'contract', component: ContractCompleterComponent },
  { path: 'profile', component: ProfileComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{ anchorScrolling: 'enabled', scrollOffset: [0, 64]}),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
