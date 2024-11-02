import {Injectable,} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {UserService}from '../../user/user.service';

@Injectable()
export class LocalGuard extends AuthGuard('local'){}