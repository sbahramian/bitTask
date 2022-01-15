import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import config from './config/configuration';
import { AppModule } from './app.module';
import websocket from './utils/websocket';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // connect to bybit websocket
  websocket();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  (app as any).set('etag', false);
  app.use((req, res, next) => {
    res.removeHeader('x-powered-by');
    res.removeHeader('date');
    next();
  });
  const apps = await app.listen(config.port);
}
bootstrap();
