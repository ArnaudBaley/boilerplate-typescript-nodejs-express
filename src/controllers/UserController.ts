import { Controller, Param, Body, Get, Post, Put, Delete, JsonController } from 'routing-controllers';
import { UserDomain } from '../domain/UserDomain';
import { User } from '../entities/UserEntity';

@JsonController()
export class UserController {
  
  private userDomain = new UserDomain();
  
  @Post('/user')
  public async postUser(@Body() user: User) {
    await this.userDomain.save(user);
    return user;
  }
}