export class Address{
    street_name: string;
    street_number: string;
    bloc: string;
    scara: string;
    apartment: string;
    judet: string;
    tara: string;
    cod_postal: string;
    oras: string;
    etaj: string;

    setAttributes(street: string, streetNumber: string, bloc: string, scara: string, apartment: string, 
        judet: string, tara: string, codPostal: string, oras: string, etaj: string)
    {
        this.street_name = street;
        this.street_number = streetNumber;
        this. bloc = bloc;
        this. scara = scara;
        this.apartment = apartment;
        this.judet = judet;
        this.tara = tara;
        this.cod_postal = codPostal
        this.oras = oras;
        this.etaj = etaj;
    }
}