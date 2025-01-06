import fastifyCookie from '@fastify/cookie';
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
  await app.register(fastifyCookie, {
    secret: process.env.COOKIE_SECRET,
  });
  app.enableCors({
    origin:
      process.env.NODE_ENV === 'production'
        ? 'https://sorocabatech.com.br'
        : 'http://localhost:5173',
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}
bootstrap();
