import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { DetailsComponent } from './pages/details/details.component';
import { DocumentComponent } from './pages/document/document.component';
import { HomeComponent } from './pages/home/home.component';
import { ModelContractComponent } from './pages/model-contract/model-contract.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { DetailsLayoutComponent } from './pages/details/details-layout/details-layout.component';
import { SellingOperationComponent } from './pages/selling-operation/selling-operation.component';
import { ProfileComponent } from './pages/user-profile/profile/profile.component';
import { ProfileLayoutComponent } from './pages/user-profile/profile-layout/profile-layout.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { IdentityVerificationComponent } from './pages/identity-verification/identity-verification.component';
import { InformationGuideComponent } from './pages/information-guide/information-guide.component';
import { CarRegistrationComponent } from './pages/selling-options/car-registration/car-registration.component';
import { CertificateChangeComponent } from './pages/selling-options/certificate-change/certificate-change.component';
import { ContractCompleterComponent } from './pages/selling-options/selling-contract/contract-completer/contract-completer.component';
import { SellingContractComponent } from './pages/selling-options/selling-contract/selling-contract.component';
import { SellingContractLayoutComponent } from './pages/selling-options/selling-contract/selling-contract-layout/selling-contract-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { ContractCompleterLayoutComponent } from './pages/selling-options/selling-contract/contract-completer/contract-completer-layout/contract-completer-layout.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  {
    path: 'user-profile', component: UserProfileComponent,
    children: [
      {
        path: 'profile', component: ProfileLayoutComponent,
        children: [
          {
            path: '', component: ProfileComponent
          }
        ]
      }
    ]
  },
  {
    path: 'contract', component: ContractCompleterLayoutComponent,
    children: [
      { path: '', component: ContractCompleterComponent },
      {
        path: 'payment', component: PaymentComponent,
        children: [
          { path: 'document', component: DocumentComponent },
        ]
      }
    ]
  },
  {
    path: 'details', component: DetailsLayoutComponent,
    children: [
      { path: '', component: DetailsComponent },
      {
        path: 'selling-contract', component: SellingContractLayoutComponent,
        children: [
          { path: '', component: SellingContractComponent },
          {
            path: 'contract', component: ContractCompleterLayoutComponent,
            children:[
              { path: '', component: ContractCompleterComponent}
            ]
          }
        ]
      },
      { path: 'car-registration', component: CarRegistrationComponent },
      { path: 'certificate-change', component: CertificateChangeComponent },
    ]
  },
  {
    path: 'selling-contract', component: SellingContractLayoutComponent,
    children: [
      { path: '', component: SellingContractComponent },
      {
        path: 'contract', component: ContractCompleterLayoutComponent,
        children:[
          { path: '', component: ContractCompleterComponent}
        ]
      }
    ]
  },
  { path: 'model-contract', component: ModelContractComponent },
  { path: 'information-guide', component: InformationGuideComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'selling-operation', component: SellingOperationComponent },
  { path: 'identityverification', component: IdentityVerificationComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollOffset: [0, 64] }),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
