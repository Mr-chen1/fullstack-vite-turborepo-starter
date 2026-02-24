import {Injectable, UnauthorizedException} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import {PassportStrategy} from '@nestjs/passport';
import {ExtractJwt, Strategy} from 'passport-jwt';
import {type Request} from 'express';
import {ConfigKey} from '../../config/config-key.enum';

export type JwtPayload = {
  sub: string;
  email: string;
  role: string;
};

const extractJwtFromCookie = (req: Request): string | undefined =>
  (req.cookies as Record<string, string | undefined>).access_token;

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([extractJwtFromCookie, ExtractJwt.fromAuthHeaderAsBearerToken()]),
      ignoreExpiration: false,
      secretOrKey: configService.getOrThrow<string>(ConfigKey.JWT_SECRET),
    });
  }

  validate(payload: JwtPayload): JwtPayload {
    if (!payload.sub || !payload.email) {
      throw new UnauthorizedException();
    }

    return payload;
  }
}
