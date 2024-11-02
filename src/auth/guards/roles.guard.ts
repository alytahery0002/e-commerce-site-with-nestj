import {Injectable,ExecutionContext,CanActivate} from '@nestjs/common';
import{Reflector} from '@nestjs/core';
import {Role_Key } from '../decorators/roles.decorator';

@Injectable()
export class RoleGuard implements CanActivate{
    constructor(private reflector:Reflector){}

    canActivate(context: ExecutionContext):boolean{
        const requiredRoles=this.reflector.getAllAndOverride(
            Role_Key,
            [context.getHandler(), context.getClass()]
        )
        if(! requiredRoles)
        return true;
        const { user } = context.switchToHttp().getRequest();
        return requiredRoles.some((role) => user.role?.includes(role));
    }
}