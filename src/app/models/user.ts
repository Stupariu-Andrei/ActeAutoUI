import { Address } from "./address";

export class User{

    public name: string;
    public username: string;
    public email: string;
    public password: string;
    public phone: string;
    public address: Address;

    setAttributes(name:string, username: string, email:string, phone:string, address: Address){
        this.name = name;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }


}