import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CommonModule } from '@angular/common';
import { DocumentComponent } from './pages/document/document.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { PaymentComponent } from './pages/payment/payment.component';
import { DetailsComponent } from './pages/details/details.component';
import { ModelContractComponent } from './pages/model-contract/model-contract.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
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
import { DetailsLayoutComponent } from './pages/details/details-layout/details-layout.component';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SellingOperationComponent } from './pages/selling-operation/selling-operation.component';
import { SellingOperationLayoutComponent } from './pages/selling-operation/selling-operation-layout/selling-operation-layout.component';
import { PaymentLayoutComponent } from './pages/payment/payment-layout/payment-layout.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ProfileComponent } from './pages/user-profile/profile/profile.component';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { ProfileLayoutComponent } from './pages/user-profile/profile-layout/profile-layout.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { IdentityVerificationComponent } from './pages/identity-verification/identity-verification.component';
import { LoadDocumentsComponent } from './pages/details/load-documents/load-documents.component';
import { InformationGuideComponent } from './pages/information-guide/information-guide.component';
import { CarRegistrationComponent } from './pages/selling-options/car-registration/car-registration.component';
import { CertificateChangeComponent } from './pages/selling-options/certificate-change/certificate-change.component';
import { SellingOptionChooserComponent } from './pages/selling-options/selling-option-chooser/selling-option-chooser.component';
import { ContractCompleterComponent } from './pages/selling-options/selling-contract/contract-completer/contract-completer.component';
import { ContractCompleterLayoutComponent } from './pages/selling-options/selling-contract/contract-completer/contract-completer-layout/contract-completer-layout.component';
import { SellingContractComponent } from './pages/selling-options/selling-contract/selling-contract.component';
import { SellingContractLayoutComponent } from './pages/selling-options/selling-contract/selling-contract-layout/selling-contract-layout.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    DocumentComponent,
    PaymentComponent,
    DetailsComponent,
    ModelContractComponent,
    UserProfileComponent,
    UsertypeComponent,
    NecessaryDocumentsComponent,
    UserTypeComponent,
    DetailsLayoutComponent,
    SellingOperationComponent,
    SellingOperationLayoutComponent,
    PaymentLayoutComponent,
    ProfileComponent,
    ProfileLayoutComponent,
    PricingComponent,
    IdentityVerificationComponent,
    LoadDocumentsComponent,
    InformationGuideComponent,
    CarRegistrationComponent,
    CertificateChangeComponent,
    SellingOptionChooserComponent,
    ContractCompleterComponent,
    ContractCompleterLayoutComponent,
    SellingContractComponent,
    SellingContractLayoutComponent,
    LoginComponent
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
    MatTableModule,
    MatIconModule,
    MatExpansionModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    MatMenuModule,
    NgxPageScrollCoreModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
