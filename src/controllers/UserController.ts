import { Controller, Param, Body, Get, Post, Put, Delete, JsonController } from 'routing-controllers';
import { User } from '../models/User';

@JsonController()
export class UserController {
  @Post('/user')
  public postUser(@Body() user: User) {
    return user;
  }
}