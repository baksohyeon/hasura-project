import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const logger = new Logger('Bootstrap');

  const app = await NestFactory.create(AppModule);

  const port = app.get(ConfigService).get<number>('port');

  await app.listen(port, () => logger.log(`Server listening on port ${port}`));
}
bootstrap();
