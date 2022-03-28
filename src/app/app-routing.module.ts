import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { ActeComponent } from './pages/acte/acte.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContractComponent } from './pages/contract/contract.component';
import { DetailsComponent } from './pages/details/details.component';
import { DocumentComponent } from './pages/document/document.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginnComponent } from './pages/loginn/loginn.component';
import { ModelContractComponent } from './pages/model-contract/model-contract.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'acte', component: ActeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'contract', component: ContractComponent},
  {path: 'details/contract',component: ContractComponent},
  {path: 'contract/document', component: DocumentComponent},
  {path: 'contract/payment', component: PaymentComponent},
  {path: 'details',component: DetailsComponent},
  {path:'details/modelContract',component: ModelContractComponent},
  {path: 'login',component: LoginnComponent},
  {path:'user-profile', component:UserProfileComponent},
  {path:'login/register', component: RegisterComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
