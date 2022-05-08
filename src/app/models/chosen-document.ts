export class ChosenDocument{
    name: string;
    isSelected:boolean = false;
    progress: string = "In asteptare";
    
    necessaryDocuments:string[];
    
    constructor(name: string){
      this.name = name;
    }
}