import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  );
  app.useStaticAssets({
    root: join(__dirname, '..', 'public'),
    prefix: '/public/',
  });
  app.setViewEngine({
    engine: {
      handlebars: require('handlebars'),
    },
    templates: join(__dirname, '..', 'views'),
    options: {
      partials: {
        whatsAppIcon: join('..', 'components', 'icons', 'whatsapp.hbs'),
        instagramIcon: join('..', 'components', 'icons', 'instagram.hbs'),
      },
    },
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
