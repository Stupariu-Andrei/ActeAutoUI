import { Address } from "./address";
import { Car } from "./car";
import { IdentityData } from "./identity-data";

export class User{

    public id:number;
    public name: string;
    public username: string;
    public email: string;
    public password: string;
    public phone: string;
    public address: Address;
    public identityData: IdentityData;
    public sellingCar: Car;
    public operations_counter: number;

    public setAttributes(name:string, email:string, phone:string){
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    public setCarForSale(car: Car){
        this.sellingCar = car;
    }

}