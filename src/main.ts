import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import "reflect-metadata";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
  .setTitle('Simple blog')
  .setDescription('The blog API description')
  .setVersion('1.0')
  .addTag('blog')
  .build();
const document = SwaggerModule.createDocument(app, options);
SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
