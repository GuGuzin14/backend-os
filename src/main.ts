import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:4200', //URL do frontend
    methods: 'GET, POST, PUT, PATCH, HEAD, DELETE', 
    credentials: true
  });

  await app.listen(3000);
}
bootstrap();
