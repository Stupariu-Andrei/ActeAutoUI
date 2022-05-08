import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ActeComponent } from './pages/acte/acte.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContractComponent } from './pages/contract/contract.component';
import { CommonModule } from '@angular/common';
import { DocumentComponent } from './pages/document/document.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { PaymentComponent } from './pages/payment/payment.component';
import { DetailsComponent } from './pages/details/details.component';
import { ModelContractComponent } from './pages/model-contract/model-contract.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { LoginnComponent } from './pages/loginn/loginn.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import { UsertypeComponent } from './sharepage/usertype/usertype.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';

import { NecessaryDocumentsComponent } from './pages/details/necessary-documents/necessary-documents.component';
import { UserTypeComponent } from './pages/home/user-type/user-type.component';
import { SaleLayoutComponent } from './pages/papers/sale/sale-layout/sale-layout.component';
import { SaleComponent } from './pages/papers/sale/sale.component';
import { ActeLayoutComponent } from './pages/acte/acte-layout/acte-layout.component';
import { DetailsLayoutComponent } from './pages/details/details-layout/details-layout.component';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SellingOperationComponent } from './pages/selling-operation/selling-operation.component';
import { SellingOperationLayoutComponent } from './pages/selling-operation/selling-operation-layout/selling-operation-layout.component';
import { PaymentLayoutComponent } from './pages/payment/payment-layout/payment-layout.component';
import { ContractLayoutComponent } from './pages/contract/contract-layout/contract-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ActeComponent,
    AboutComponent,
    ContactComponent,
    ContractComponent,
    SaleComponent,
    DocumentComponent,
    PaymentComponent,
    DetailsComponent,
    ModelContractComponent,
    LoginnComponent,
    UserProfileComponent,
    RegisterComponent,
    UsertypeComponent,
    NecessaryDocumentsComponent,
    UserTypeComponent,
    SaleLayoutComponent,
    ActeLayoutComponent,
    DetailsLayoutComponent,
    SellingOperationComponent,
    SellingOperationLayoutComponent,
    PaymentLayoutComponent,
    ContractLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    NgxDocViewerModule,
    HttpClientModule,
    PdfViewerModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatTabsModule,
    MatIconModule,
    MatExpansionModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
