import { UserDao } from "../dao/UserDao";
import { User } from "../entities/UserEntity";

export class UserDomain {
    private userDao = new UserDao();

    public save(user: User) {
        this.userDao.save(user);
    }
}