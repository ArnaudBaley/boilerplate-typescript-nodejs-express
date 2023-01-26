import { Controller, Param, Body, Get, Post, Put, Delete, JsonController } from 'routing-controllers';
import { UserDomain } from '../domain/UserDomain';
import { UserDTO } from '../dtos/user/UserDto';
import { User } from '../entities/UserEntity';

@JsonController()
export class UserController {
  
  private userDomain = new UserDomain();
  
  @Post('/user')
  public postUser(@Body() user: User) {
    return this.userDomain.save(user);
  }
}