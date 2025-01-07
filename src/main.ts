import fastifyCookie from '@fastify/cookie';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './modules/AppModule';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  );
  const configService = app.get(ConfigService);
  await app.register(fastifyCookie, {
    secret: configService.get<string>('COOKIE_SECRET'),
    prefix: '__Host-',
  });
  app.enableCors({
    origin:
      configService.get<string>('NODE_ENV') === 'production'
        ? 'https://sorocabatech.com.br'
        : 'http://localhost:5173',
    credentials: true,
  });
  await app.listen(
    +configService.get<string | number>('PORT', 3000),
    '0.0.0.0',
  );
}
bootstrap();
