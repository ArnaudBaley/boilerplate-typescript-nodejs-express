import { Exclude } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    
    @PrimaryGeneratedColumn()
    public id: string;

    @Column()
    @IsNotEmpty()
    public firstName: string;

    @Column()
    @IsNotEmpty()    
    public lastName: string;
    
    @Column()    
    @IsNotEmpty()        
    public password: string;
    
    public toString(): string {
        return `${this.firstName} ${this.lastName})`;
    }
}
