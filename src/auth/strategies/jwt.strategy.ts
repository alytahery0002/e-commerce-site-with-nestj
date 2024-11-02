import { ExtractJwt, Strategy } from 'passport-jwt';
import {Injectable,} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {PassportStrategy} from '@nestjs/passport';
import {AccessTokenPayload} from '../types/accessToken.interface'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(private readonly configService:ConfigService){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get<string>('JWT_SECRET'),
        })    
    }

    async validate(payload: AccessTokenPayload) {
        return {
          userId: payload.userId,
          username: payload.username,
          role: payload.role,
        };
    }
}