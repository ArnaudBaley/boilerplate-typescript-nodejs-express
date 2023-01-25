import { Exclude } from "class-transformer";
import { IsNotEmpty } from "class-validator";

export class User {
    
    public id: string;

    @IsNotEmpty()
    public firstName: string;

    @IsNotEmpty()    
    public lastName: string;

    @IsNotEmpty()    
    public password: string;
    
    public toString(): string {
        return `${this.firstName} ${this.lastName})`;
    }
}
