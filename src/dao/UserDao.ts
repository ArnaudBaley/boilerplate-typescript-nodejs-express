import { Service } from "typedi";
import { sqliteDataSource } from "../config/dataSources/sqliteDataSource";
import { User } from "../entities/UserEntity";

@Service()
export class UserDao {
    
    private userRepository = sqliteDataSource.getRepository(User);
    
    public save(user: User) {
        return this.userRepository.save(user);        
    }
}