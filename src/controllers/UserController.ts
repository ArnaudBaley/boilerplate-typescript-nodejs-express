import { Controller, Param, Body, Get, Post, Put, Delete, JsonController } from 'routing-controllers';
import Container, { Service } from 'typedi';
import { UserDomain } from '../domain/UserDomain';
import { User } from '../entities/UserEntity';

@JsonController()
@Service()
export class UserController {
    
  constructor(private userDomain: UserDomain){}

  @Post('/user')
  public postUser(@Body() user: User) {
    return this.userDomain.save(user);
  }
}