import { DataSource } from "typeorm";
import { User } from "../../entities/UserEntity";

export const sqliteDataSource = new DataSource({
    type: "sqlite",    
    database: "db.sqlite",
    synchronize: true,
    logging: true,
    entities: [User],
    // entities: [__dirname + "/**/*.entity{.ts,.js}"],    
})