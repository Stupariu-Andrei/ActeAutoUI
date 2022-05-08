import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContractComponent } from './pages/contract/contract.component';
import { DetailsComponent } from './pages/details/details.component';
import { DocumentComponent } from './pages/document/document.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginnComponent } from './pages/loginn/loginn.component';
import { ModelContractComponent } from './pages/model-contract/model-contract.component';
import { InsuranceComponent } from './pages/papers/insurance/insurance.component';
import { RagistrationComponent } from './pages/papers/ragistration/ragistration.component';
import { RarComponent } from './pages/papers/rar/rar.component';
import { SaleComponent } from './pages/papers/sale/sale.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { SaleLayoutComponent } from './pages/papers/sale/sale-layout/sale-layout.component';
import { DetailsLayoutComponent } from './pages/details/details-layout/details-layout.component';
import { SellingOperationComponent } from './pages/selling-operation/selling-operation.component';
import { PaymentLayoutComponent } from './pages/payment/payment-layout/payment-layout.component';
import { ContractLayoutComponent } from './pages/contract/contract-layout/contract-layout.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'sale', component: SaleLayoutComponent,
    children: [
      { path: '', component: SaleComponent },
      {
        path: 'contract', component: ContractLayoutComponent,
        children: [
          { path: '', component: ContractComponent},
          {
            path: 'payment', component: PaymentComponent,
            children: [
              { path: 'document', component: DocumentComponent },
            ]
          }
        ]
      },
      { path: 'model-contract', component: ModelContractComponent },
      { path: '**', component: SaleComponent }
    ]
  },

  { 
    path: 'login', component: LoginnComponent,
    children:[
      { 
        path: 'register', component: RegisterComponent
      }
    ]
  },
  { path: 'user-profile', component: UserProfileComponent },
  { 
    path: 'details', component: DetailsLayoutComponent,
    children:[
      { path: '', component: DetailsComponent},
      { path: 'contract', component: ContractComponent}
    ]
  },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component:LoginnComponent},
  { path: 'registration', component: RagistrationComponent },
  { path: 'rar', component: RarComponent },
  { path: 'selling-operation', component: SellingOperationComponent},
  { path: 'insurance', component: InsuranceComponent },
  { path: 'selling-operation/contract', component: ContractComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
