import { createParamDecorator, Req } from '@nestjs/common';
import { User } from './user.entity';

export const GetUser = createParamDecorator((data, req): User => {
  console.log();
  return req.user;
});