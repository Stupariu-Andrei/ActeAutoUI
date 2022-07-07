import { Option } from "./option";

export class Operation{
    id: any;
    name: string;
    options: Option[] = new Array<Option>();
    progress: string;
    user_id: any;
    registration_type: any;

}
