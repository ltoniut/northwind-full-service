import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { EnvironmentService } from 'modules/environment/environment.service';
import { AppModule } from 'app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  app.setGlobalPrefix(new EnvironmentService().getEnvs().GLOBAL_ROUTES_PREFIX);

  const options = new DocumentBuilder()
    .setTitle('LinOS Connect Inventory API')
    .setDescription('API docs for the Inventory API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  const configService = app.get(ConfigService);
  await app.listen(configService.get('PORT') || 3034);
}
bootstrap();
