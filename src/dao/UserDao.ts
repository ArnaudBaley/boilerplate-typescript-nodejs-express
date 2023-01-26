import { SqliteDataSource } from "../config/dataSources/SqliteDataSource";
import { User } from "../entities/UserEntity";

export class UserDao {
    
    private userRepository = SqliteDataSource.getRepository(User);
    
    public save(user: User) {
        this.userRepository.save(user);
    }
}