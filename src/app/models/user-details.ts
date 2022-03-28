import { Address } from "./address";

export class UserDetails{
    public firstName: string;
    public lastName: string;
    public address: Address;
    public mail: string;
    public phone: string;

    constructor(name:string, surname: string, email:string, phone:string, address: Address){
        this.firstName = name;
        this.lastName = surname;
        this.mail = email;
        this.phone = phone;
        this.address = address;
    }

}