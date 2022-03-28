import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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
    DocumentComponent,
    PaymentComponent,
    DetailsComponent,
    ModelContractComponent,
    LoginnComponent,
    UserProfileComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    NgxDocViewerModule,
    HttpClientModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
