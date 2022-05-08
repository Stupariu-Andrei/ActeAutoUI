export class Option{
    id: any;
    type: string;
    isSelected: boolean = false;
    necessaryDocuments: string[];
    progress: string;

    constructor(type:string){
        this.type = type;
    }
}