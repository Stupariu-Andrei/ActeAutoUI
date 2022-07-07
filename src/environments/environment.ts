// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

// <main id="main">
//   <div class="registration-title" data-aos="fade-in">
//     <div class="container">
//       <h2>Inmatriculare masina</h2>
//       <mat-tab-group>
//         <mat-tab label="Numere rosii">
//           <h3>Numere rosii</h3>
//           <ul>
//             <h4>Acte necesare</h4>
//             <li>Dovada prin care se atesta ca ai asigurarea obligatorie.
//               Poti sa optezi pentru o asigurare pe o luna in vederea inmatricularii
//               sau pentru o perioada mai mare de timp (3 luni, 6 luni, 1 an). Aceasta trebuie sa fie
//               facuta pe numele persoanei care vrea sa faca inmatricularea.
//               <a mat-button href="#">Ataseaza documentul<mat-icon>attach_file</mat-icon></a></li>
//             <li>Cerere numere provizorii, ce se face din partea noului proprietar.
//               Pe cerere se scrie in clar ca se doresc numere rosii si pe ce perioada.
//               <a mat-button href="#">Ataseaza documentul<mat-icon>attach_file</mat-icon></a></li>
//             <li>Copie dupa actul de proprietate. In aceasta faza, actul nu trebuie tradus, ci doar prezentat in copie.
//               Pentru schimbare proprietar auto, vei avea nevoie fie de contractul de vanzare-cumparare, fie de factura
//               de achizitie.
//               <a mat-button href="#">Ataseaza documentul<mat-icon>attach_file</mat-icon></a></li>
//             <li>Copie dupa cartea de identitate a masinii. In functie de ghiseul la care te vei prezenta,
//               este posibil sa iti ceara sa prezinti si originalul, asa ca este bine sa il ai la tine.
//               <a mat-button href="#">Ataseaza documentul<mat-icon>attach_file</mat-icon></a></li>
//             <li>Dovada ca ai achitat taxele de autorizatia de circulatie provizorie.
//               <a mat-button href="#">Ataseaza documentul<mat-icon>attach_file</mat-icon></a>
//             </li>
//             <li>Actul de identitate a proprietarului in copie si original.
//               <a mat-button href="#">Ataseaza documentul<mat-icon>attach_file</mat-icon></a>
//             </li>
//           </ul>
//           <ul>
//             <h4>Taxe numere rosii</h4>
//             <li>Taxa ce reprezinta contravaloarea autorizatiei de functionare provizorie de 13 lei.
//               <a mat-button href="#">Plateste aici</a>
//             </li>
//             <li>Taxa de autorizatie numerele rosii pe 3 luni este de 39 lei. <a mat-button href="#">Plateste aici</a></li>
//             <li>Taxa numere rosii - 40 lei <a mat-button href="#">Plateste aici</a></li>
//           </ul>
//         </mat-tab>
//         <mat-tab label="Numere negre">
//           <h3>Numere negre</h3>
//           <ul>
//             <h4>Acte necesare</h4>
//             <li>Cerere de inmatriculare -
//               <a mat-button href="#">Completeaza cererea</a>
//               <a mat-button download="model_contract" href="../../../assets/model_cerere.docx">Descarca cerere</a>
//               <a mat-button href="#">Ataseaza documentul<mat-icon>attach_file</mat-icon></a>
//             </li>
//             <li>Fisa de inmatriculare vizata la circa financiara de care apartine proprietarul
//               <a mat-button href="#">Ataseaza documentul<mat-icon>attach_file</mat-icon></a>
//             </li>
//             <li>Certificatul de inmatriculare a fostului proprietar, in caz ca ai cumparat masina second hand, in original,
//               iar ITP-ul trebuie sa fie in termen de valabilitate;
//               <a mat-button href="#">Ataseaza documentul<mat-icon>attach_file</mat-icon></a></li>
//             <li>Cartea de identitate a autovehicului (original si copie simpla)
//               <a mat-button href="#">Ataseaza documentul<mat-icon>attach_file</mat-icon></a>
//             </li>
//             <li>Actul de identitate al solicitantului (original si copie simpla)
//               <a mat-button href="#">Ataseaza documentul<mat-icon>attach_file</mat-icon></a>
//             </li>
//             <li>Copie dupa asigurarea RCA valabila
//               <a mat-button href="#">Ataseaza documentul<mat-icon>attach_file</mat-icon></a>
//             </li>
//             <li>Daca vehiculul este adus din strainatate, ai nevoie si de Certificatul de Autenticitate, ce il vei obtine de la RAR.
//               <a mat-button href="#">Ataseaza documentul<mat-icon>attach_file</mat-icon></a>
//             </li>
//             <li>Chitanta care atesta plata certificatului de inmatriculare.
//               <a mat-button href="#">Ataseaza documentul<mat-icon>attach_file</mat-icon></a>
//             </li>
//             <li>Dovada platii pentru placutele de inmatriculare
//               <a mat-button href="#">Ataseaza documentul<mat-icon>attach_file</mat-icon></a>
//             </li>
//             <li>Procura notariala, in cazul in care actele nu sunt depuse de titular
//               <a mat-button href="#">Ataseaza documentul<mat-icon>attach_file</mat-icon></a>
//             </li>
//             <li>In cazul in care masina este adusa din afara tarii, ai nevoie si de documentul de inmatriculare din tara respectiva,
//               de placutele de tranzit sau de dovada ca vehiculul a intrat pe platforma in tara.
//               <a mat-button href="#">Ataseaza documentul<mat-icon>attach_file</mat-icon></a></li>
//             <li>Dovada ca a fost achitat TVA-ul pentru persoanele fizice sau pentru firmele ce nu sunt platitoare de TVA,
//                 daca masina este din afara tarii, dar din spatiul UE.
//                 <a mat-button href="#">Ataseaza documentul<mat-icon>attach_file</mat-icon></a></li>
//             <li>In cazul persoanelor juridice, mai este nevoie si de documentele care atesta dobandirea personalitatii
//               juridice, denumirea si sediul, in copie simpla, precum si imputernicirea pentru reprezentantul legal al
//               acestora.
//               <a mat-button href="#">Ataseaza documentul<mat-icon>attach_file</mat-icon></a>
//             </li>
//           </ul>
//           <ul>
//             <h4>Taxe numere negre</h4>
//             <li>
//               Daca ai nevoie de dovada de la RAR, va fi necesar sa achiti o taxa de 539 lei pentru masini mici.
//               <a mat-button href="#">Plateste aici</a>
//             </li>
//             <li>Plata certificatului de inmatriculare (37 de lei)
//               <a mat-button href="#">Plateste aici</a>
//             </li>
//             <li>Plata pentru placutele de inmatriculare (40 de lei/aleatoriu sau 85 de lei/la alegere)
//               <a mat-button href="#">Plateste aici</a>
//             </li>
//           </ul>
//         </mat-tab>
//         <mat-tab label="Numere verzi">
//           <h3>Numere verzi</h3>
//           <ul>
//             <h4>Acte necesare</h4>
//             <li>Cerere de inmatriculare <a mat-button href="#">Completeaza cererea</a></li>
//             <li>Fisa de inmatriculare vizata la circa financiara de care apartine proprietarul
//               <a mat-button href="#">Ataseaza documentul<mat-icon>attach_file</mat-icon></a></li>
//             <li>Certificatul de inmatriculare a fostului proprietar, in caz ca ai cumparat masina second hand, in original,
//               iar ITP-ul trebuie sa fie in termen de valabilitate;
//               <a mat-button href="#">Ataseaza documentul<mat-icon>attach_file</mat-icon></a></li>
//             <li>Cartea de identitate a autovehicului (original si copie simpla)
//               <a mat-button href="#">Ataseaza documentul<mat-icon>attach_file</mat-icon></a>
//             </li>
//             <li>Actul de identitate al solicitantului (original si copie simpla)
//               <a mat-button href="#">Ataseaza documentul<mat-icon>attach_file</mat-icon></a>
//             </li>
//             <li>Copie dupa asigurarea RCA valabila
//               <a mat-button href="#">Ataseaza documentul<mat-icon>attach_file</mat-icon></a>
//             </li>
//             <li>Daca vehiculul este adus din strainatate, ai nevoie si de Certificatul de Autenticitate, ce il vei obtine de la RAR.
//               <a mat-button href="#">Ataseaza documentul<mat-icon>attach_file</mat-icon></a>
//             </li>
//             <li>Chitanta care atesta plata certificatului de inmatriculare.
//               <a mat-button href="#">Ataseaza documentul<mat-icon>attach_file</mat-icon></a>
//             </li>
//             <li>Dovada platii pentru placutele de inmatriculare
//               <a mat-button href="#">Ataseaza documentul<mat-icon>attach_file</mat-icon></a>
//             </li>
//             <li>Procura notariala, in cazul in care actele nu sunt depuse de titular
//               <a mat-button href="#">Ataseaza documentul<mat-icon>attach_file</mat-icon></a>
//             </li>
//             <li>In cazul in care masina este adusa din afara tarii, ai nevoie si de documentul de inmatriculare din tara respectiva,
//               de placutele de tranzit sau de dovada ca vehiculul a intrat pe platforma in tara;
//               <a mat-button href="#">Ataseaza documentul<mat-icon>attach_file</mat-icon></a></li>
//             <li>Dovada ca a fost achitat TVA-ul pentru persoanele fizice sau pentru firmele ce nu sunt platitoare de TVA,
//                 daca masina este din afara tarii, dar din spatiul UE
//                 <a mat-button href="#">Ataseaza documentul<mat-icon>attach_file</mat-icon></a></li>
//             <li>In cazul persoanelor juridice, mai este nevoie si de documentele care atesta dobandirea personalitatii
//               juridice, denumirea si sediul, in copie simpla, precum si imputernicirea pentru reprezentantul legal al
//               acestora. <a mat-button href="#">Ataseaza documentul<mat-icon>attach_file</mat-icon></a>
//             </li>
//           </ul>
//           <ul>
//             <h4>Taxe numere verzi</h4>
//             <li>Daca ai nevoie de dovada de la RAR, va fi necesar sa achiti o taxa de 539 lei pentru masini mici.
//               <a mat-button href="#">Plateste aici</a>
//             </li>
//             <li>Plata certificatului de inmatriculare (37 de lei)
//               <a mat-button href="#">Plateste aici</a>
//             </li>
//             <li>Plata pentru placutele de inmatriculare (40 de lei/aleatoriu sau 85 de lei/la alegere)
//               <a mat-button href="#">Plateste aici</a>
//             </li>
//           </ul>
//         </mat-tab>
//       </mat-tab-group>
//     </div>
//   </div>
// </main>
