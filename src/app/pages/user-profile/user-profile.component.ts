import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'src/app/models/address';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  currentUser:User;

  public newAddress: any = {};
  userNewAddress: Address;
  userAllowedOperations:any;

  constructor(private authService: AuthService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    this.currentUser = this.authService.getCurrentUser();
    this.userAllowedOperations = await this.authService.getUserOperationsCounter(this.currentUser.id).toPromise();
  }

  async saveAddress(){
    
    this.userNewAddress = this.newAddress as Address;
    if(this.currentUser.address == null){
      this.currentUser.address = new Address();
    }

    this.currentUser.address.apartment = this.userNewAddress.apartment != "" && this.userNewAddress.apartment != null ? this.userNewAddress.apartment : this.currentUser.address.apartment;
    this.currentUser.address.bloc = this.userNewAddress.bloc != "" && this.userNewAddress.bloc != null ? this.userNewAddress.bloc : this.currentUser.address.bloc;
    this.currentUser.address.cod_postal = this.userNewAddress.cod_postal != "" && this.userNewAddress.cod_postal != null ? this.userNewAddress.cod_postal : this.currentUser.address.cod_postal;
    this.currentUser.address.etaj = this.userNewAddress.etaj != "" && this.userNewAddress.etaj != null ? this.userNewAddress.etaj : this.currentUser.address.etaj;
    this.currentUser.address.judet = this.userNewAddress.judet != "" && this.userNewAddress.judet != null ? this.userNewAddress.judet : this.currentUser.address.judet;
    this.currentUser.address.oras = this.userNewAddress.oras != "" && this.userNewAddress.oras != null ? this.userNewAddress.oras : this.currentUser.address.oras;
    this.currentUser.address.scara = this.userNewAddress.scara != "" && this.userNewAddress.scara != null ? this.userNewAddress.scara : this.currentUser.address.scara;
    this.currentUser.address.street_name = this.userNewAddress.street_name != "" && this.userNewAddress.street_name != null ? this.userNewAddress.street_name : this.currentUser.address.street_name;
    this.currentUser.address.street_number = this.userNewAddress.street_number != "" && this.userNewAddress.street_number != null ? this.userNewAddress.street_number : this.currentUser.address.street_number;
    this.currentUser.address.tara = this.userNewAddress.tara != "" && this.userNewAddress.tara != null ? this.userNewAddress.tara : this.currentUser.address.tara;

    this.authService.saveUserAddress(this.currentUser.address, this.currentUser.username).subscribe(
      data => data = this.currentUser.address
    );

    alert("Your new address was saved");
    
  }

  goToHome(){
    this.router.navigate(['/home']);
  }



}
