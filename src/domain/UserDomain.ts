import Container, { Service } from "typedi";
import { UserDao } from "../dao/UserDao";
import { User } from "../entities/UserEntity";

@Service()
export class UserDomain {
  constructor(private userDao: UserDao) {}

  public save(user: User) {
    return this.userDao.save(user);
  }
}
